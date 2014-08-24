nodspot.factory('FavouritesServices', ['$http', 'FacebookServices', '$rootScope', 'EventsConstants', 'YoutubeServices', 'MessagesConstants', 'PlayerServices', 'SearchServices',
    function ($http, FacebookServices, $rootScope, EventsConstants, YoutubeServices, MessagesConstants, PlayerServices, SearchServices) {

        var baseUrl = 'favourites.php?action=';
        var FavouritesServices = {};

        FavouritesServices.baseUrl = baseUrl;

        //will be used when saving a track to a playlist
        FavouritesServices.trackId = undefined;
        FavouritesServices.trackIndex = undefined;
        FavouritesServices.trackTitle = undefined;
        FavouritesServices.tracksPlaylists = [];

        FavouritesServices.playlists = undefined;
        FavouritesServices.favourites = undefined;


        FavouritesServices.fetchFavourites = function () {
            $http.get(baseUrl + 'getFavouritedAlbums').success(function (favourites) {
                FavouritesServices.favourites = favourites;
            });
        };


        FavouritesServices.getFavourites = function () {
            return FavouritesServices.favourites;
        };


        FavouritesServices.fetchPlaylists = function () {
            $http.get(baseUrl + 'getAllPlaylists').success(function (playlists) {
                angular.forEach(playlists, function (playlist) {
                    playlist.state = "notSaved"; //flag it so that no track's currently belong to this playlist
                    playlist.editMode = false; //flag so the "edit playlist name" input box is hidden
                });
                FavouritesServices.playlists = playlists;
                FavouritesServices.fetchTracksPlaylists(FavouritesServices.trackId);
            });
        };


        FavouritesServices.getPlaylists = function () {
            return FavouritesServices.playlists;
        };


        FavouritesServices.fetchTracksPlaylists = function (trackId) {
            $http.get(baseUrl + 'getTracksPlaylists' +
                    '&track_id=' + trackId).success(function (tracksPlaylists) {
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
            return $http.get(baseUrl + 'getTracksFromPlaylist' + '&playlist_id=' + playlistId).then(function (playlistTracks) {

                var youtubeLikePlaylist = [];

                angular.forEach(playlistTracks.data, function (track, i) {
                    youtubeLikePlaylist[i] = {
                        snippet: {
                            title: decodeURI(track.track_title)
                        },
                        id: {
                            videoId: track.track_id
                        }
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

                return $http.get(baseUrl + 'favouriteAlbum' +
                    '&album_name=' + releaseTitle +
                    '&artist_name=' + artistName +
                    '&album_id=' + releaseId +
                    '&album_year=' + releaseYear +
                    '&search_type=' + searchType +
                    '&search_term=' + searchTerm);
            } else {
                FacebookServices.login(function () {
                    FavouritesServices.addReleaseToFavourites(releaseTitle, artistName, releaseId, releaseYear, searchType, searchTerm).success(function () {
                        $rootScope.$broadcast(EventsConstants.releaseFavourited); //notify PlayerCtrl about the favourited release
                    });
                });
            }
        };


        FavouritesServices.renamePlaylist = function (index, playlistId, playlistName, event) {
            if (event.which == 13) {
                if (FacebookServices.isConnected()) {
                    return $http.get(baseUrl + 'updatePlaylist' +
                            '&playlist_name=' + playlistName +
                            '&playlist_id=' + playlistId).then(function () {
                            FavouritesServices.playlists[index].playlist_name = playlistName;
                            FavouritesServices.playlists[index].editMode = false;
                        });
                }
            }
        };


        FavouritesServices.deletePlaylist = function (index, playlistId, event) {
            event.stopPropagation();
            if (FacebookServices.isConnected()) {
                var prompt = confirm(MessagesConstants.deletePlaylist);

                if (prompt == true) {
                    return $http.get(baseUrl + 'deletePlaylist' +
                            '&playlist_id=' + playlistId).then(function () {
                            FavouritesServices.playlists.splice(index, 1);
                        });
                }
            }
        };


        FavouritesServices.removeReleaseFromFavourites = function (releaseId) {
            if (FacebookServices.isConnected()) {
                return $http.get(baseUrl + 'unfavouriteAlbum' +
                    '&album_id=' + releaseId);
            }
        };


        FavouritesServices.isReleaseFavourite = function (releaseId) {
            return $http.get(baseUrl + 'getAlbumState' +
                '&album_id=' + releaseId);
        };


        FavouritesServices.addTrackToPlaylist = function (trackId, playlistId, playlistName, trackTitle) {
            if (FacebookServices.isConnected()) {
                return $http.get(baseUrl + 'addTrackToPlaylist' +
                    '&track_id=' + trackId +
                    '&track_title=' + trackTitle +
                    '&playlist_id=' + playlistId +
                    '&playlist_name=' + playlistName
                );
            } else {
                FacebookServices.login(function () {
                    FavouritesServices.addTrackToPlaylist(trackId, playlistId, playlistName, trackTitle);
                });
            }
        };


        FavouritesServices.removeTrackFromPlaylist = function (trackId, playlistId) {
            if (FacebookServices.isConnected()) {
                return $http.get(baseUrl + 'removeTrackFromPlaylist' +
                    '&track_id=' + trackId +
                    '&playlist_id=' + playlistId
                );
            } else {
                FacebookServices.login(function () {
                    FavouritesServices.removeTrackFromPlaylist(trackId, playlistId);
                });
            }
        };

        return FavouritesServices;
}]);