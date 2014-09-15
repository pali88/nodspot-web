<?php


class FavouritesController extends BaseController {

	public function add($release_id, $release_type, $search_term, $release_title, $release_year, $artist_name) {
        $user_id = UsersController::getUserByHash();
        DB::insert('INSERT INTO ' . T_SAVED_ALBUMS . ' (user_id, id, type, search_term, title, year, artist_name)
        VALUES (?, ?, ?, ?, ?, ?, ?)', [$user_id, $release_id, $release_type, $search_term, $release_title, $release_year, $artist_name]);
        return DB::getPDO()->lastInsertId();
	}

    public function delete($release_id) {
        $user_id = UsersController::getUserByHash();
        return DB::delete('DELETE FROM ' . T_SAVED_ALBUMS . ' WHERE (user_id = ? AND id = ?)', [$user_id, $release_id]);
	}

    public function isExisting($release_id) {
        $user_id = UsersController::getUserByHash();
        return DB::select('SELECT id FROM ' . T_SAVED_ALBUMS . ' WHERE user_id = ? AND id = ?', [$user_id, $release_id]);
	}
}
