<?php


class PlaylistsController extends BaseController
{

    public function show($id)
    {
        return DB::select('SELECT * FROM ' . T_PLAYLIST_TRACKS . ' WHERE playlist_id = ?', [$id]);
    }


    public static function getPlaylists()
    {
        $userId = UsersController::getUserIdByHash();

        if ($userId)
        {
            return DB::select('SELECT * FROM ' . T_PLAYLISTS . ' WHERE user_id = ?', [$userId]);
        }
    }


    //create a simple nodspot playlist.
    public function createPlaylist($playlistName)
    {
        $userId = UsersController::getUserIdByHash();
        DB::insert('INSERT INTO ' . T_PLAYLISTS . ' (user_id, playlist_name) VALUES (?, ?)', [$userId, $playlistName]);

        return DB::getPdo()->lastInsertId();
    }


    //create a playlist that will be flagged as youtube playlist in the DB. is_youtube = 1.
    public function createPlaylistTypeYoutube($playlistName, $youtubePlaylistId)
    {
        $userId = UsersController::getUserIdByHash();
        DB::insert('INSERT INTO ' . T_PLAYLISTS . ' (user_id, playlist_name, is_youtube, youtube_playlist_id) VALUES (?, ?, ?, ?)', [$userId, $playlistName, 1, $youtubePlaylistId]);
    }


    public function addTrack($playlistId, $trackId, $trackTitle, $artistName)
    {
        if (self::isUsersPlaylist($playlistId))
        {
            DB::insert('INSERT INTO ' . T_PLAYLIST_TRACKS . ' (playlist_id, track_id, track_title, artist_name) VALUES (?, ?, ?, ?)', [$playlistId, $trackId, $trackTitle, $artistName]);
        }
    }


    //check if the specified playlist belongs to the currently logged in user.
    public static function isUsersPlaylist($playlistId)
    {
        $usersPlaylists = PlaylistsController::getPlaylists();

        foreach ($usersPlaylists as $playlist) {
            if ($playlist->playlist_id == $playlistId)
            {
                return true;
            }
        }
    }


    public function removeTrack($playlistId, $trackId)
    {
        if (self::isUsersPlaylist($playlistId))
        {
            DB::delete('DELETE FROM ' . T_PLAYLIST_TRACKS . ' WHERE (playlist_id = ? AND track_id = ?)', [$playlistId, $trackId]);
        }
    }


    //returns playlists id the given track belongs to.
    public function trackBelongsTo($trackId)
    {
        $userId = UsersController::getUserIdByHash();

        return DB::select('SELECT ns_playlist_tracks.playlist_id FROM ' . T_PLAYLIST_TRACKS . '
            INNER JOIN ' . T_PLAYLISTS . ' ON ns_playlist_tracks.playlist_id = ns_playlists.playlist_id
            WHERE (ns_playlists.user_id = ? AND track_id = ?)', [$userId, $trackId]);
    }


    //if a given playlist exists, return its id.
    public function isExisting($playlistName)
    {
        $userId = UsersController::getUserIdByHash();

        //note: case sensitive playlist_name - might introduce problems later on
        return DB::select('SELECT playlist_id FROM ' . T_PLAYLISTS . ' WHERE (playlist_name = ? AND user_id = ?)', [$playlistName, $userId]);
    }


    //rename a playlist
    public function updatePlaylist($playlistId, $newPlaylistName)
    {
        $userId = UsersController::getUserIdByHash();
        DB::update('UPDATE ' . T_PLAYLISTS . ' SET playlist_name = ? WHERE (user_id = ? AND playlist_id = ?)', [$newPlaylistName, $userId, $playlistId]);
    }


    public function deletePlaylist($playlistId)
    {
        $userId = UsersController::getUserIdByHash();
        DB::delete('DELETE FROM ns_playlists WHERE (user_id = ? AND playlist_id = ?)', [$userId, $playlistId]);

        return DB::delete('DELETE FROM ' . T_PLAYLIST_TRACKS . ' WHERE playlist_id = ?', [$playlistId]);
    }
}
