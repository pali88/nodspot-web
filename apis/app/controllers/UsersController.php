<?php


class UsersController extends BaseController {

    public function isExisting($fb_id, $email) {
        $user_id = DB::select('SELECT id FROM ns_users WHERE user_id = ? AND email = ?', [$fb_id, $email]);

        if ($user_id) {
            return $user_id;
        } else {
            //adding a new user
            DB::insert('INSERT INTO ns_users (user_id, email) VALUES (?, ?)', [$fb_id, $email]);
            return DB::getPdo()->lastInsertId();
        }
    }

    public function getPlaylists($id) {
        return DB::select('SELECT * FROM ns_playlists WHERE user_id = ?', [$id]);
    }

    public function getFavourites($id) {
        return DB::select('SELECT * FROM ns_saved_albums WHERE user_id = ?', [$id]);
    }

}
