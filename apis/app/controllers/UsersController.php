<?php

const T_USERS = 'ns_users';

class UsersController extends BaseController {

    public function isExisting($fb_id, $email) {
        $user_id = DB::select('SELECT id FROM ' . T_USERS . ' WHERE user_id = ? AND email = ?', [$fb_id, $email]);

        if ($user_id) {
            return $user_id;
        } else {
            //adding a new user
            DB::insert('INSERT INTO ' . T_USERS . ' (user_id, email) VALUES (?, ?)', [$fb_id, $email]);
            return DB::getPdo()->lastInsertId();
        }
    }

    public function getPlaylists($id) {
        return DB::select('SELECT * FROM ' . T_PLAYLISTS . ' WHERE user_id = ?', [$id]);
    }

    public function getFavourites($id) {
        return DB::select('SELECT * FROM ' . T_SAVED_ALBUMS . ' WHERE user_id = ?', [$id]);
    }

}
