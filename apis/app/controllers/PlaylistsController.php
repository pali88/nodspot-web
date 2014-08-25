<?php

class PlaylistsController extends BaseController {

    const PLAYLIST_TRACKS = 'ns_playlist_tracks';
    const PLAYLISTS = 'ns_playlists';

    public function show($id) {
        return DB::select('SELECT * FROM ' . self::PLAYLIST_TRACKS . ' WHERE playlist_id = ?', [$id]);
    }

    public function createPlaylist($user_id, $playlist_name) {
        DB::insert('INSERT INTO ' . self::PLAYLISTS . ' (user_id, playlist_name) VALUES (?, ?)', [$user_id, $playlist_name]);
    }

    public function addTrack($playlist_id, $track_id, $track_title) {
        DB::insert('INSERT INTO ' . self::PLAYLIST_TRACKS . ' (playlist_id, track_id, track_title)  VALUES (?, ?, ?)', [$playlist_id, $track_id, $track_title]);
    }

    public function removeTrack($playlist_id, $track_id) {
        DB::delete('DELETE FROM ' . self::PLAYLIST_TRACKS . ' WHERE (playlist_id = ? AND track_id = ?)', [$playlist_id, $track_id]);
    }

    //returns playlists id the given track belongs to.
    public function trackBelongsTo($user_id, $track_id) {
        return DB::select('SELECT ns_playlist_tracks.playlist_id FROM ' . self::PLAYLIST_TRACKS . '
            INNER JOIN ' . self::PLAYLISTS . ' ON ns_playlist_tracks.playlist_id = ns_playlists.playlist_id
            WHERE (ns_playlists.user_id = ? AND track_id = ?)', [$user_id, $track_id]);
    }

    //if a given playlist exists, return its id.
    public function isExisting($user_id, $playlist_name) {
        //note: case sensitive playlist_name - might introduce problems later on
        return DB::select('SELECT playlist_id FROM ' . self::PLAYLISTS . ' WHERE (playlist_name = ? AND user_id = ?)', [$playlist_name, $user_id]);
    }

    public function updatePlaylist($playlist_id, $user_id, $new_playlist_name) {
        DB::update('UPDATE ' . self::PLAYLISTS . ' SET playlist_name = ? WHERE (user_id = ? AND playlist_id = ?)', [$new_playlist_name, $user_id, $playlist_id]);
    }

    public function deletePlaylist($playlist_id, $user_id) {
        DB::delete('DELETE FROM ns_playlists WHERE (user_id = ? AND playlist_id = ?)', [$user_id, $playlist_id]);
        return DB::delete('DELETE FROM ' . self::PLAYLIST_TRACKS . ' WHERE playlist_id = ?', [$playlist_id]);
    }
}
