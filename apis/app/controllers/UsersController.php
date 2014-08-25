<?php


class UsersController extends BaseController {

    public function getPlaylists($id) {
        return DB::select('SELECT * FROM ns_playlists WHERE user_id = ?', [$id]);
    }

    public function getFavourites($id) {
        return DB::select('SELECT * FROM ns_saved_albums WHERE user_id = ?', [$id]);
    }

    public function isExisting($fb_id, $email) {
        return DB::select('SELECT id FROM ns_users WHERE user_id = ? AND email = ?', [$fb_id, $email]);
    }
}
