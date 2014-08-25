<?php


class UsersController extends BaseController {

    public function getPlaylists($id) {
        return DB::select('SELECT * FROM ns_playlists WHERE user_id = ?', [$id]);
    }

    public function getFavourites($id) {
        return DB::select('SELECT * FROM ns_saved_albums WHERE user_id = ?', [$id]);
    }
}
