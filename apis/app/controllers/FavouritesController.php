<?php


class FavouritesController extends BaseController {

	public function getPlaylists($id) {
        return DB::select('SELECT * FROM ns_playlists WHERE user_id = ?', [$id]);
	}

    public function getPlaylistTracklist($id) {
        return DB::select('SELECT * FROM ns_playlists WHERE user_id = ?', [$id]);
	}

    public function pienas($id) {
        return DB::select('SELECT * FROM ns_playlists WHERE user_id = ?', [$id]);
    }


}
