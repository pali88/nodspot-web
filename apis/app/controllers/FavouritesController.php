<?php


class FavouritesController extends BaseController {

    public function getFavourites() {
        $userId = UsersController::getUserIdByHash();

        if ($userId > 0) {
            return DB::select('SELECT * FROM ' . T_SAVED_ALBUMS . ' WHERE user_id = ?', [$userId]);
        }
    }


    //add this release to logged in users favourites
	public function add($releaseId, $releaseType, $searchTerm, $releaseTitle, $releaseYear, $artistName) {
        $userId = UsersController::getUserIdByHash();

        DB::insert('INSERT INTO ' . T_SAVED_ALBUMS . ' (user_id, id, type, search_term, title, year, artist_name)
        VALUES (?, ?, ?, ?, ?, ?, ?)', [$userId, $releaseId, $releaseType, $searchTerm, $releaseTitle, $releaseYear, $artistName]);

        return DB::getPDO()->lastInsertId();
	}


    public function delete($releaseId) {
        $userId = UsersController::getUserIdByHash();

        return DB::delete('DELETE FROM ' . T_SAVED_ALBUMS . ' WHERE (user_id = ? AND id = ?)', [$userId, $releaseId]);
	}


    //check if the release is already favourited by the logged in user
    public function isExisting($releaseId) {
        $userId = UsersController::getUserIdByHash();

        return DB::select('SELECT id FROM ' . T_SAVED_ALBUMS . ' WHERE user_id = ? AND id = ?', [$userId, $releaseId]);
	}
}
