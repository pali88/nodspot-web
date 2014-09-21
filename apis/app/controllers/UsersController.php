<?php

//Once the user logs in with FB, we assign a hash key to that user.
//All further requests will carry that hash key in the request header.
//App will use the hash key when looking up for a userId in nodspot DB.
//The hash will also be used to check if the hash key is not

class UsersController extends BaseController {

    public function isExisting($fbId, $email) {
        $hash = self::getHashByUserId($fbId, $email);

        //if the user is found, renew his hash and last used ip
        if ($hash) {

            $userId = self::lookupUserIdByHash($hash);
            self::updateLastIp($userId);
            self::refreshHashExpiry($userId);

            return self::renewHash($fbId, $email);

        } else {
            //user does not exist, create it
            self::createUser($fbId, $email);
        }
    }


    public static function createUser ($fbId, $email) {
        DB::insert('INSERT INTO ' . T_USERS . ' (user_id, email, hash) VALUES (?, ?, ?)', [$fbId, $email, self::generateHash()]);

        //get user's hash that will be used for setting request headers
        return self::getHashByUserId($fbId, $email);
    }


    //get user's hash by his FB_ID
    public static function getHashByUserId($fbId, $email) {
        $hash = DB::select('SELECT hash FROM ' . T_USERS . ' WHERE user_id = ? AND email = ?', [$fbId, $email]);
        $hash = $hash[0]->hash;

        return $hash;
    }


    public static function getUserIdByHash() {
        $hash = $_COOKIE['hash'];
        $userId = self::lookupUserIdByHash($hash);

        if (self::isValidRequest($hash) && $userId != null) {
            self::refreshHashExpiry($userId);
            self::updateLastIp($userId);

            return $userId;
        } else {
            //not authorised
            echo 'You will have to sign in again mate ;)';
        }
    }


    public static function lookupUserIdByHash($hash) {
        $userId = DB::select('SELECT id FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);

        return $userId = ($userId != null) ? $userId[0]->id : null;
    }


    public static function generateHash() {
        return Hash::Make(md5(openssl_random_pseudo_bytes(10)));
    }


    public static function renewHash($fbId, $email) {
        $newHash = self::generateHash();
        DB::update('UPDATE ' . T_USERS . ' SET hash = ? WHERE (user_id = ? AND email = ?)', [$newHash, $fbId, $email]);
        self::refreshHashExpiry($newHash);

        return $newHash;
    }

    public static function refreshHashExpiry($userId) {
        $hashExpiry = time() + 5*60;
        DB::update('UPDATE ' . T_USERS . ' SET hash_expiry = ? WHERE (id = ?)', [$hashExpiry, $userId]);

        return $hashExpiry;
    }


    //update user's last_ip used for authorisation with nodspot
    public static function updateLastIp($userId) {
        $lastIp = Request::getClientIp();
        DB::update('UPDATE ' . T_USERS . ' SET last_ip = ? WHERE (id = ?)', [$lastIp, $userId]);
    }



    //check if the request is coming from the same IP the user logged in
    public static function isSameIp($hash) {
        $lastIp = DB::select('SELECT last_ip FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
        $lastIp = ($lastIp != null) ? $lastIp[0]->last_ip : null;

        return $isSameIp = (Request::getClientIp() == $lastIp) ? true : false;
    }


    //check if currently logged in user's hash_expiry has expired
    public static function isHashExpired($hash) {
        $hashExpiry = DB::select('SELECT hash_expiry FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
        $hashExpiry = $hashExpiry[0]->hash_expiry;

        return $isExpired = (time() > $hashExpiry) ? true : false;
    }


    //check if the request is valid - hash is not expired and the request comes from the same ip.
    //return true for valid, false for invalid.
    public static function isValidRequest($hash) {
        $isValid = null;

        return $isValid = (self::isSameIp($hash) && !self::isHashExpired($hash)) ? true : false;
    }
}
