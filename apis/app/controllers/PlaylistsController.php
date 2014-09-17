<?php


class PlaylistsController extends BaseController {

    public function show($id) {
        return DB::select('SELECT * FROM ' . T_PLAYLIST_TRACKS . ' WHERE playlist_id = ?', [$id]);
    }


    public function getPlaylists() {
        $user_id = UsersController::getUserIdByHash();

        return DB::select('SELECT * FROM ' . T_PLAYLISTS . ' WHERE user_id = ?', [$user_id]);
    }


    public function createPlaylist($playlist_name) {
        $user_id = UsersController::getUserIdByHash();
        DB::insert('INSERT INTO ' . T_PLAYLISTS . ' (user_id, playlist_name) VALUES (?, ?)', [$user_id, $playlist_name]);
    }


    public function addTrack($playlist_id, $track_id, $track_title) {
        DB::insert('INSERT INTO ' . T_PLAYLIST_TRACKS . ' (playlist_id, track_id, track_title)  VALUES (?, ?, ?)', [$playlist_id, $track_id, $track_title]);
    }


    public function removeTrack($playlist_id, $track_id) {
        DB::delete('DELETE FROM ' . T_PLAYLIST_TRACKS . ' WHERE (playlist_id = ? AND track_id = ?)', [$playlist_id, $track_id]);
    }


    //returns playlists id the given track belongs to.
    public function trackBelongsTo($track_id) {
        $user_id = UsersController::getUserIdByHash();
        return DB::select('SELECT ns_playlist_tracks.playlist_id FROM ' . T_PLAYLIST_TRACKS . '
            INNER JOIN ' . T_PLAYLISTS . ' ON ns_playlist_tracks.playlist_id = ns_playlists.playlist_id
            WHERE (ns_playlists.user_id = ? AND track_id = ?)', [$user_id, $track_id]);
    }


    //if a given playlist exists, return its id.
    public function isExisting($playlist_name) {
        $user_id = UsersController::getUserIdByHash();

        //note: case sensitive playlist_name - might introduce problems later on
        return DB::select('SELECT playlist_id FROM ' . T_PLAYLISTS . ' WHERE (playlist_name = ? AND user_id = ?)', [$playlist_name, $user_id]);
    }


    public function updatePlaylist($playlist_id, $new_playlist_name) {
        $user_id = UsersController::getUserIdByHash();
        DB::update('UPDATE ' . T_PLAYLISTS . ' SET playlist_name = ? WHERE (user_id = ? AND playlist_id = ?)', [$new_playlist_name, $user_id, $playlist_id]);
    }


    public function deletePlaylist($playlist_id) {
        $user_id = UsersController::getUserIdByHash();
        DB::delete('DELETE FROM ns_playlists WHERE (user_id = ? AND playlist_id = ?)', [$user_id, $playlist_id]);

        return DB::delete('DELETE FROM ' . T_PLAYLIST_TRACKS . ' WHERE playlist_id = ?', [$playlist_id]);
    }
}
