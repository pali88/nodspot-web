<?php

class UsersController extends BaseController {

    public function isExisting($fb_id, $email) {

        //lookup user's hash by his FB_ID
        $hash = self::getHashByUserId($fb_id, $email);

        //if the user is found, renew his hash
        if ($hash) {
            return self::renewHash($fb_id, $email);

        } else {
            //user does not exist, create it
            DB::insert('INSERT INTO ' . T_USERS . ' (user_id, email, hash) VALUES (?, ?, ?)', [$fb_id, $email, self::generateHash()]);

            //get user's hash that will be used for setting request headers
            return self::getHashByUserId($fb_id, $email);
        }
    }


    //get user's hash by his FB_ID
    public static function getHashByUserId($fb_id, $email) {
        return DB::select('SELECT hash FROM ' . T_USERS . ' WHERE user_id = ? AND email = ?', [$fb_id, $email]);
    }


    public static function getUserIdByHash() {
//        $hash = Request::header('hash');
        $hash = '$2y$10$wfZHTBo9NEj.Jdp7aDhSROBTuWhV31ANVwTR1hT0zcaR4Upx29w6u'; //dev
//        $hash = '$2y$10$1XN1G7gJUPbrJ61v79LnVehXSg65Y42jtxHMG0yuNe62/KrC0Dqbm'; //production
        $user_id = DB::select('SELECT id FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
        $user_id = $user_id[0]->id;



        //check if the hash is expired - if yes, the user's request will not be authorised
        if(self::isHashExpired($hash)) {

            //not authorised - will have to sign in again
            echo 'You will have to sign in again mate..';
        } else {

            //authorised, refresh hash_expiry & clients last_ip the call was made from
            self::refreshHashExpiry($hash);
            self::updateClientsIp($hash);

            //will be used to perform future requests for this user_id
            return $user_id;
        };

    }


    //check if currently logged in user's hash_expiry has expired
    public static function isHashExpired($hash) {
        $hash_expiry = DB::select('SELECT hash_expiry FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
        $hash_expiry = $hash_expiry[0]->hash_expiry;
        $is_expired = (time() > $hash_expiry) ? true : false;

        return $is_expired;
    }


    public static function refreshHashExpiry($hash) {
        $hash_expiry = time() + 2*60;
        DB::update('UPDATE ' . T_USERS . ' SET hash_expiry = ? WHERE (hash = ?)', [$hash_expiry, $hash]);

        return $hash_expiry;
    }


    //update clients last_ip in the DB
    public static function updateClientsIp($hash) {
        $last_ip = Request::getClientIp();
        DB::update('UPDATE ' . T_USERS . ' SET last_ip = ? WHERE (hash = ?)', [$last_ip, $hash]);
    }


    public static function generateHash() {
        return Hash::Make(md5(openssl_random_pseudo_bytes(10)));
    }


    public static function renewHash($fb_id, $email) {
        $new_hash = self::generateHash();
        DB::update('UPDATE ' . T_USERS . ' SET hash = ? WHERE (user_id = ? AND email = ?)', [$new_hash, $fb_id, $email]);
        self::refreshHashExpiry($new_hash);

        return $new_hash;
    }

}
