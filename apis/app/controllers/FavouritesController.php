<?php

const T_SAVED_ALBUMS = 'ns_saved_albums';

class FavouritesController extends BaseController {

	public function add($user_id, $release_id, $release_type, $search_term, $release_title, $release_year, $artist_name) {
        DB::insert('INSERT INTO ' . T_SAVED_ALBUMS . ' (user_id, id, type, search_term, title, year, artist_name)
        VALUES (?, ?, ?, ?, ?, ?, ?)', [$user_id, $release_id, $release_type, $search_term, $release_title, $release_year, $artist_name]);
        return DB::getPDO()->lastInsertId();
	}

    public function delete($user_id, $release_id) {
        return DB::delete('DELETE FROM ' . T_SAVED_ALBUMS . ' WHERE (user_id = ? AND id = ?)', [$user_id, $release_id]);
	}

    public function isExisting($user_id, $release_id) {
        return DB::select('SELECT id FROM ' . T_SAVED_ALBUMS . ' WHERE user_id = ? AND id = ?', [$user_id, $release_id]);
	}
}
