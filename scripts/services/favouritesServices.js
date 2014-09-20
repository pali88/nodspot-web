nodspot.factory('FavouritesServices', ['$http', 'FacebookServices', '$rootScope', 'EventsConstants', 'YoutubeServices', 'MessagesConstants', 'PlayerServices', 'SearchServices', 'ApiConstants',
    function ($http, FacebookServices, $rootScope, EventsConstants, YoutubeServices, MessagesConstants, PlayerServices, SearchServices, ApiConstants) {

        var baseUrl = ApiConstants.baseUrlNodspot;
        var FavouritesServices = {};


        //will be used when saving a track to a playlist
        FavouritesServices.trackId = undefined;
        FavouritesServices.trackIndex = undefined;
        FavouritesServices.trackTitle = undefined;
        FavouritesServices.tracksPlaylists = [];

        FavouritesServices.playlists = [];
        FavouritesServices.favourites = [];


        FavouritesServices.fetchFavourites = function () {
            $http.get(baseUrl + 'favourites').success(function (favourites) {
                FavouritesServices.favourites = favourites;
            });
        };


        FavouritesServices.getFavourites = function () {
            return FavouritesServices.favourites;
        };


        FavouritesServices.fetchPlaylists = function () {
            $http.get(baseUrl + 'playlists').success(function (playlists) {
                angular.forEach(playlists, function (playlist) {
                    playlist.state = "notSaved"; //flag it so that no track's currently belong to this playlist
                    playlist.editMode = false; //flag so the "edit playlist name" input box is hidden
                });
                FavouritesServices.playlists = playlists;

                if (FavouritesServices.trackId) {
                    FavouritesServices.fetchTracksPlaylists(FavouritesServices.trackId);
                }
            });
        };


        FavouritesServices.getPlaylists = function () {
            return FavouritesServices.playlists;
        };


        FavouritesServices.fetchTracksPlaylists = function (trackId) {
            $http.get(baseUrl + 'track/' + trackId + '/belongsTo').success(function (tracksPlaylists) {
                    FavouritesServices.tracksPlaylists = tracksPlaylists;
                });
        };


        FavouritesServices.getTracksPlaylists = function () {
            return FavouritesServices.tracksPlaylists;
        };


        //highlight playlists this track belongs to
        FavouritesServices.highlightTracksPlaylists = function (playlists, tracksPlaylists) {
            angular.forEach(playlists, function (playlist) {
                playlist.state = 'notSaved'
            });

            angular.forEach(playlists, function (playlist) {
                angular.forEach(tracksPlaylists, function (tracksPlaylist) {
                    if (playlist.playlist_id == tracksPlaylist.playlist_id) {
                        playlist.state = 'saved';
                    }
                });
            });
        };


        FavouritesServices.getPlaylistTracks = function (playlistId) {
            SearchServices.expandProgressBar();
            PlayerServices.currentlyPlaying.playlistId = playlistId;
            return $http.get(baseUrl + 'playlist/' + playlistId).then(function (playlistTracks) {

                var youtubeLikePlaylist = [];

                angular.forEach(playlistTracks.data, function (track, i) {
                    youtubeLikePlaylist[i] = {
                        snippet: {
                            title: decodeURI(track.track_title)
                        },
                        id: {
                            videoId: track.track_id
                        },
                        artistName: track.artist_name
                    }
                });

                $rootScope.$broadcast(EventsConstants.playlistReady, youtubeLikePlaylist);
                return playlistTracks.data;
            });
        };


        FavouritesServices.playPlaylist = function (playlistId) {
            FavouritesServices.getPlaylistTracks(playlistId).then(function (playlistsTracks) {
                PlayerServices.currentlyPlaying.title = "Someone's playlist";
                PlayerServices.currentlyPlaying.releaseTitle = playlistsTracks.length + ' tracks';
                PlayerServices.currentlyPlaying.releaseYear = 'all good :)';
                SearchServices.searchSource = SearchServices.searchSources.userPlaylist;
            });
        };


        FavouritesServices.playlistEditMode = function (index, event) {
            event.stopPropagation();
            if (FavouritesServices.playlists[index].editMode == false) {
                FavouritesServices.playlists[index].editMode = true;
            } else {
                FavouritesServices.playlists[index].editMode = false;
            }
        };



        FavouritesServices.addReleaseToFavourites = function (releaseTitle, artistName, releaseId, releaseYear, searchType, searchTerm) {
            if (FacebookServices.connected == true) {

                //todo check for the searchTerm is not empty - need to allow users to save supriseMe releases

                //favourites/{release_id}/{type}/{search_term}/{title}/{year}/{artist_name}/add
                return $http.get(baseUrl + 'favourites/' +
                    '/' + releaseId +
                    '/' + searchType +
                    '/' + searchTerm +
                    '/' + releaseTitle +
                    '/' + releaseYear +
                    '/' + artistName +
                    '/add'
                );
            } else {
                FacebookServices.login(function () {
                    FavouritesServices.addReleaseToFavourites(releaseTitle, artistName, releaseId, releaseYear, searchType, searchTerm).success(function () {
                        $rootScope.$broadcast(EventsConstants.releaseFavourited); //notify PlayerCtrl about the favourited release
                    });
                });
            }
        };

        //playlist/{playlist_id}/{{new_playlist_name}/update
        FavouritesServices.renamePlaylist = function (index, playlistId, playlistName, event) {
            if (event.which == 13) {
                if (FacebookServices.isConnected()) {

                    return $http.get(baseUrl + 'playlist' +
                            '/' + playlistId +
                            '/' + playlistName +
                            '/update'
                    ).then(function () {
                            FavouritesServices.playlists[index].playlist_name = playlistName;
                            FavouritesServices.playlists[index].editMode = false;
                        });
                }
            }
        };

        //playlist/{playlist_id}/delete
        FavouritesServices.deletePlaylist = function (index, playlistId, event) {
            event.stopPropagation();
            if (FacebookServices.isConnected()) {
                var prompt = confirm(MessagesConstants.deletePlaylist);

                if (prompt == true) {
                    return $http.get(baseUrl + 'playlist' +
                            '/' + playlistId +
                            '/delete'
                    ).then(function () {
                            FavouritesServices.playlists.splice(index, 1);
                        });
                }
            }
        };

        //favourites/{release_id}/delete
        FavouritesServices.removeReleaseFromFavourites = function (releaseId) {
            if (FacebookServices.isConnected()) {
                return $http.get(baseUrl + 'favourites' +
                    '/' + releaseId +
                    '/delete'
                );
            }
        };


        //favourites/{release_id}/existing
        FavouritesServices.isReleaseFavourite = function (releaseId) {
            return $http.get(baseUrl + 'favourites' +
                '/' + releaseId +
                '/existing'
            );
        };


        //playlist/{playlist_id}/{track_id}/{track_title}/{artist_name}/add
        FavouritesServices.addTrackToPlaylist = function (trackId, playlistId, playlistName, trackTitle, artistName) {
            if (FacebookServices.isConnected()) {
                return $http.get(baseUrl + 'playlist' +
                    '/' + playlistId +
                    '/' + trackId +
                    '/' + trackTitle +
                    '/' + artistName +
                    '/add'
                );
            } else {
                FacebookServices.login(function () {
                    FavouritesServices.addTrackToPlaylist(trackId, playlistId, playlistName, trackTitle);
                });
            }
        };


        //playlist/{playlist_id}/{track_id}/remove
        FavouritesServices.removeTrackFromPlaylist = function (trackId, playlistId) {
            if (FacebookServices.isConnected()) {
                return $http.get(baseUrl + 'playlist' +
                    '/' + playlistId +
                    '/' + trackId +
                    '/remove'
                );
            } else {
                FacebookServices.login(function () {
                    FavouritesServices.removeTrackFromPlaylist(trackId, playlistId);
                });
            }
        };

        return FavouritesServices;
}]);