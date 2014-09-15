<?php


class UsersController extends BaseController {

    public function isExisting($fb_id, $email) {
        $hash = self::getHashByUserId($fb_id, $email);

        if ($hash) {
            return self::updateHash($fb_id, $email);
        } else {

            //user does not exist, create it
            DB::insert('INSERT INTO ' . T_USERS . ' (user_id, email, hash) VALUES (?, ?, ?)', [$fb_id, $email, self::generateHash()]);
            return self::getHashByUserId($fb_id, $email);
        }
    }

    public function getHashByUserId($fb_id, $email) {
        return DB::select('SELECT hash FROM ' . T_USERS . ' WHERE user_id = ? AND email = ?', [$fb_id, $email]);
    }

    public static function getUserByHash() {
        $hash = Request::header('hash');
        $user_id = DB::select('SELECT id FROM ' . T_USERS . ' WHERE hash = ?', [$hash]);
        $user_id = $user_id[0]->id;
        return $user_id;
    }

    public function generateHash() {
        return Hash::Make(md5(openssl_random_pseudo_bytes(10)));
    }

    public function updateHash($fb_id, $email) {
        $new_hash = self::generateHash();
        DB::update('UPDATE ' . T_USERS . ' SET hash = ? WHERE (user_id = ? AND email = ?)', [$new_hash, $fb_id, $email]);
        return $new_hash;
    }

    public function getPlaylists() {
        $user_id = self::getUserByHash();
        return DB::select('SELECT * FROM ' . T_PLAYLISTS . ' WHERE user_id = ?', [$user_id]);
    }

    public function getFavourites() {
        $user_id = self::getUserByHash();
        return DB::select('SELECT * FROM ' . T_SAVED_ALBUMS . ' WHERE user_id = ?', [$user_id]);
    }
}
