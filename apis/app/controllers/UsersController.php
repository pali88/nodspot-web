<?php

//Once the user logs in with FB, we assign a hash key to that user.
//All further requests will carry that hash key in the request header.
//App will use the hash key when looking up for a userId in nodspot DB.
//The hash will also be used to check if the hash key is not

class UsersController extends BaseController
{

    public function isExisting($fbId, $email)
    {
        $hash = self::getHashByUserId($fbId, $email);

        //if the user is found, renew his hash and last used ip
        if ($hash)
        {
            return $hash;
//            return self::renewHash($fbId, $email);

        } else
        {
            //user does not exist, create it
            return self::createUser($fbId, $email);
        }
    }


    public static function createUser($fbId, $email)
    {
        DB::insert('INSERT INTO ' . T_USERS . ' (user_id, email, hash) VALUES (?, ?, ?)', [$fbId, $email, self::generateHash()]);

        return self::getHashByUserId($fbId, $email);
    }


    //get user's hash that will be used for setting a cookie
    public static function getHashByUserId($fbId, $email)
    {
        $hash = DB::select('SELECT hash FROM ' . T_USERS . ' WHERE user_id = ? AND email = ?', [$fbId, $email]);
        $hash = $hash[0]->hash;

        return $hash;
    }


    //will be used for every other API request, that requires the user id
    public static function getUserIdByHash()
    {
        if (isset($_COOKIE['hash'])) {
            $hash_cookie = $_COOKIE['hash'];
            $hash = $hash_cookie;
            $userId = self::lookupUserIdByHash($hash);

            return $userId;
        }
    }


    public static function lookupUserIdByHash($hash)
    {
        $userId = DB::select('SELECT id FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
//        setcookie('token', $hash, 60*60*24*12, null, null, true, true);

        return $userId = ($userId != null) ? $userId[0]->id : null;
    }


    public static function generateHash()
    {
        return Hash::Make(md5(openssl_random_pseudo_bytes(10)));
    }


    public static function renewHash($fbId, $email)
    {
        $newHash = self::generateHash();
        DB::update('UPDATE ' . T_USERS . ' SET hash = ? WHERE (user_id = ? AND email = ?)', [$newHash, $fbId, $email]);
        self::refreshHashExpiry($newHash);

        return $newHash;
    }


    public static function refreshHashExpiry($userId)
    {
        $hashExpiry = time() + 5*60;
        DB::update('UPDATE ' . T_USERS . ' SET hash_expiry = ? WHERE (id = ?)', [$hashExpiry, $userId]);

        return $hashExpiry;
    }


    //update user's last_ip used for authorisation with nodspot
    public static function updateLastIp($userId)
    {
        $currentIp = Request::getClientIp();
        DB::update('UPDATE ' . T_USERS . ' SET last_ip = ? WHERE (id = ?)', [$currentIp, $userId]);
    }


    //check if the request is coming from the same IP the user logged in
    public static function isFromSameIp($hash)
    {
        $lastIp = DB::select('SELECT last_ip FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
        $lastIp = ($lastIp != null) ? $lastIp[0]->last_ip : null;

        return $isFromSameIp = (Request::getClientIp() == $lastIp) ? true : false;
    }


    //check if currently logged in user's hash_expiry has expired
    public static function isHashExpired($hash)
    {
        $hashExpiry = DB::select('SELECT hash_expiry FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
        $hashExpiry = $hashExpiry[0]->hash_expiry;

        return $isExpired = (time() > $hashExpiry) ? true : false;
    }


    //check if the request is valid - hash is not expired and the request comes from the same ip.
    //return true for valid, false for invalid.
    public static function isValidRequest($hash)
    {
        $isValid = null;

        return $isValid = (self::isFromSameIp($hash) && !self::isHashExpired($hash)) ? true : false;
    }
}
