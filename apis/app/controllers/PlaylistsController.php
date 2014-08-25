<?php


class PlaylistsController extends BaseController {

    public function show($id) {
        return DB::select('SELECT * FROM ns_playlist_tracks WHERE playlist_id = ?', [$id]);
    }

    public function createPlaylist($user_id, $playlist_name) {
        DB::insert('INSERT INTO ns_playlists (user_id, playlist_name) VALUES (?, ?)', [$user_id, $playlist_name]);
    }

    public function deletePlaylist($playlist_id, $user_id) {
        DB::delete('DELETE FROM ns_playlists WHERE (user_id = ? AND playlist_id = ?)', [$user_id, $playlist_id]);
        return DB::delete('DELETE FROM ns_playlist_tracks WHERE playlist_id = ?', [$playlist_id]);
    }
}
