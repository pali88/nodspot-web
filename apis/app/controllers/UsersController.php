<?php

class UsersController extends BaseController {

    public function isExisting($fbId, $email) {

        //lookup user's hash by his FB_ID
        $hash = self::getHashByUserId($fbId, $email);

        //if the user is found, renew his hash
        if ($hash) {
            return self::renewHash($fbId, $email);
        } else {
            //user does not exist, create it
            DB::insert('INSERT INTO ' . T_USERS . ' (user_id, email, hash) VALUES (?, ?, ?)', [$fbId, $email, self::generateHash()]);

            //get user's hash that will be used for setting request headers
            return self::getHashByUserId($fbId, $email);
        }
    }


    //get user's hash by his FB_ID
    public static function getHashByUserId($fb_id, $email) {
        return DB::select('SELECT hash FROM ' . T_USERS . ' WHERE user_id = ? AND email = ?', [$fb_id, $email]);
    }


    public static function getUserIdByHash() {
//        $hash = Request::header('hash');
//        $hash = '$2y$10$1XN1G7gJUPbrJ61v79LnVehXSg65Y42jtxHMG0yuNe62/KrC0Dqbm'; //production
        $hash = '$2y$10$wfZHTBo9NEj.Jdp7aDhSROBTuWhV31ANVwTR1hT0zcaR4Upx29w6u'; //dev
        $userId = DB::select('SELECT id FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
        $userId = $userId[0]->id;

        //check if the hash is expired - if yes, the user's request will not be authorised
        if(self::isHashExpired($hash)) {

            //not authorised - will have to sign in again
            echo 'You will have to sign in again mate..';
        } else {

            //authorised, refresh hash_expiry & clients last_ip the call was made from
            self::refreshHashExpiry($hash);
            self::updateClientsIp($hash);

            //will be used to perform future requests for this user_id
            return $userId;
        };

    }


    //check if currently logged in user's hash_expiry has expired
    public static function isHashExpired($hash) {
        $hashExpiry = DB::select('SELECT hash_expiry FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
        $hashExpiry = $hashExpiry[0]->hash_expiry;
        $isExpired = (time() > $hashExpiry) ? true : false;

        return $isExpired;
    }

    //check if the request is coming from the same IP the user logged in
    public static function isSameIp($hash) {
        $lastIp = DB::select('SELECT last_ip FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
        $lastIp = $lastIp[0]->last_ip;
        $isSameIp = (Request::getClientIp() == $lastIp) ? true : false;

        return $isSameIp;
    }

    //check if the request is valid - hash is valid and comes from the same ip
    public static function isValidRequest($hash) {
        $isValid = null;

        return $isValid;
    }


    public static function refreshHashExpiry($hash) {
        $hashExpiry = time() + 2*60;
        DB::update('UPDATE ' . T_USERS . ' SET hash_expiry = ? WHERE (hash = ?)', [$hashExpiry, $hash]);

        return $hashExpiry;
    }


    //update clients last_ip in the DB
    public static function updateClientsIp($hash) {
        $lastIp = Request::getClientIp();
        DB::update('UPDATE ' . T_USERS . ' SET last_ip = ? WHERE (hash = ?)', [$lastIp, $hash]);
    }


    public static function generateHash() {
        return Hash::Make(md5(openssl_random_pseudo_bytes(10)));
    }


    public static function renewHash($fb_id, $email) {
        $newHash = self::generateHash();
        DB::update('UPDATE ' . T_USERS . ' SET hash = ? WHERE (user_id = ? AND email = ?)', [$newHash, $fb_id, $email]);
        self::refreshHashExpiry($newHash);

        return $newHash;
    }

}
