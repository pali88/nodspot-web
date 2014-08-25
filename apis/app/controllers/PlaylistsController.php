<?php


class PlaylistsController extends BaseController {

    public function show($id) {
        return DB::select('SELECT * FROM ns_playlist_tracks WHERE playlist_id = ?', [$id]);
    }

    public function createPlaylist($user_id, $playlist_name) {
        DB::insert('INSERT INTO ns_playlists (user_id, playlist_name) VALUES (?, ?)', [$user_id, $playlist_name]);
    }

    public function isExisting($user_id, $playlist_name) {
        //note: case sensitive playlist_name - might introduce problems later on
        return DB::select('SELECT playlist_id FROM ns_playlists WHERE (playlist_name = ? AND user_id = ?)', [$playlist_name, $user_id]);
    }

    public function deletePlaylist($playlist_id, $user_id) {
        DB::delete('DELETE FROM ns_playlists WHERE (user_id = ? AND playlist_id = ?)', [$user_id, $playlist_id]);
        return DB::delete('DELETE FROM ns_playlist_tracks WHERE playlist_id = ?', [$playlist_id]);
    }

    public function updatePlaylist($playlist_id, $user_id, $new_playlist_name) {
        DB::update('UPDATE ns_playlists SET playlist_name = ? WHERE (user_id = ? AND playlist_id = ?)', [$new_playlist_name, $user_id, $playlist_id]);
    }
}
