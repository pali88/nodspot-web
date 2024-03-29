nodspot.factory('FavouritesServices', ['$http', 'FacebookServices', '$rootScope', 'EventsConstants', 'YoutubeServices', 'MessagesConstants', 'PlayerServices', 'SearchServices', 'ApiConstants',
    function ($http, FacebookServices, $rootScope, EventsConstants, YoutubeServices, MessagesConstants, PlayerServices, SearchServices, ApiConstants)
    {

        var baseUrl = ApiConstants.baseUrlNodspot;
        var FavouritesServices = {};


        //will be used when saving a track to a playlist
        FavouritesServices.trackId = undefined;
        FavouritesServices.trackIndex = undefined;
        FavouritesServices.trackTitle = undefined;
        FavouritesServices.tracksPlaylists = [];

        FavouritesServices.playlists = [];
        FavouritesServices.favourites = [];


        //gather the currently playing track's info that is about to be added to a playlist
        FavouritesServices.captureTrackInfo = function (index) {

            var track = YoutubeServices.returnedVideos[index];

            FavouritesServices.trackIndex = index;
            FavouritesServices.trackId = track.id.videoId;
            FavouritesServices.trackTitle = encodeURIComponent(track.snippet.title);
            FavouritesServices.artistName = encodeURIComponent(track.artistName);
            FavouritesServices.fetchTracksPlaylists(FavouritesServices.trackId);

            $rootScope.$broadcast(EventsConstants.trackInfoCaptured);
        };


        FavouritesServices.fetchFavourites = function ()
        {
            $http.get(baseUrl + 'favourites').success(function (favourites)
            {
                FavouritesServices.favourites = favourites;
            });
        };


        FavouritesServices.getFavourites = function ()
        {
            return FavouritesServices.favourites;
        };


        FavouritesServices.fetchPlaylists = function ()
        {
            $http.get(baseUrl + 'playlists').success(function (playlists)
            {

                angular.forEach(playlists, function (playlist)
                {
                    playlist.state = "notSaved"; //flag it so that no track's currently belong to this playlist
                    playlist.editMode = false; //flag so the "edit playlist name" input box is hidden
                });

                FavouritesServices.playlists = playlists;

                if (FavouritesServices.trackId)
                {
                    FavouritesServices.fetchTracksPlaylists(FavouritesServices.trackId);
                }
            });
        };


        FavouritesServices.getPlaylists = function ()
        {
            return FavouritesServices.playlists;
        };


        FavouritesServices.fetchTracksPlaylists = function (trackId)
        {
            $http.get(baseUrl
            + 'track/'
            + trackId
            + '/belongsTo'
            ).success(function (tracksPlaylists)
                {
                    FavouritesServices.tracksPlaylists = tracksPlaylists;
                });
        };


        FavouritesServices.getTracksPlaylists = function ()
        {
            return FavouritesServices.tracksPlaylists;
        };


        //highlight playlists this track belongs to
        FavouritesServices.highlightTracksPlaylists = function (playlists, tracksPlaylists)
        {
            //unhighlight all the playlists
            angular.forEach(playlists, function (playlist)
            {
                playlist.state = 'notSaved'
            });

            //highlight only those playlists that this track belongs to
            angular.forEach(playlists, function (playlist)
            {
                angular.forEach(tracksPlaylists, function (tracksPlaylist)
                {
                    if (playlist.playlist_id == tracksPlaylist.playlist_id)
                    {
                        playlist.state = 'saved';
                    }
                });
            });
        };


        FavouritesServices.getPlaylistTracks = function (playlistId)
        {
            SearchServices.expandProgressBar();

            return $http.get(baseUrl
            + 'playlist/'
            + playlistId
            ).then(function (playlistTracks)
                {
                    var youtubeLikePlaylist = [];

                    //format playlist obj in the same way as youtube returned videos
                    angular.forEach(playlistTracks.data, function (track, i)
                    {
                        youtubeLikePlaylist[i] =
                        {
                            snippet:
                            {
                                title: decodeURI(track.track_title)
                            },

                            id:
                            {
                                videoId: track.track_id
                            },
                            artistName: track.artist_name
                        }
                    });

                    YoutubeServices.returnedVideos = youtubeLikePlaylist;

                    PlayerServices.currentlyPlaying.albumName = "Someone's playlist, all tracks are good";
                    SearchServices.searchSource = SearchServices.searchSources.userPlaylist;

                    //return playlist tracks
                    return youtubeLikePlaylist;
                });
        };


        //get videos from youtube playlist
        FavouritesServices.getVideosFromYoutubePlaylist = function (playlistId) {
            PlayerServices.currentlyPlaying.playlistId = playlistId;
            SearchServices.searchSource = SearchServices.searchSources.youtubePlaylist;
            return YoutubeServices.getVideosFromYoutubePlaylist(playlistId);
        };


        FavouritesServices.playlistEditMode = function (index, event)
        {
            event.stopPropagation();

            if (FavouritesServices.playlists[index].editMode == false)
            {
                FavouritesServices.playlists[index].editMode = true;
            }
            else
            {
                FavouritesServices.playlists[index].editMode = false;
            }
        };


        FavouritesServices.addReleaseToFavourites = function (releaseTitle, artistName, releaseId, releaseYear, releaseType, searchTerm)
        {
            if (FacebookServices.connected == true)
            {

                //todo check for the searchTerm is not empty - need to allow users to save supriseMe releases

                //favourites/{release_id}/{type}/{search_term}/{title}/{year}/{artist_name}/add
                return $http.get(baseUrl
                    + 'favourites'
                    + '/' + releaseId
                    + '/' + releaseType
                    + '/' + searchTerm
                    + '/' + releaseTitle
                    + '/' + releaseYear
                    + '/' + artistName
                    + '/add'
                ).then(function () {
                        FavouritesServices.fetchFavourites();
                    });
            }
            else
            {
                FacebookServices.login(function ()
                {
                    FavouritesServices.addReleaseToFavourites(releaseTitle, artistName, releaseId, releaseYear, releaseType, searchTerm)
                        .success(function ()
                        {
                            //notify PlayerCtrl about the favourited release
                            $rootScope.$broadcast(EventsConstants.releaseFavourited);
                        });
                });
            }
        };


        //playlist/{playlist_id}/{{new_playlist_name}/update
        FavouritesServices.renamePlaylist = function (index, playlistId, playlistName, event)
        {
            if (event.which == 13)
            {
                if (FacebookServices.isConnected())
                {
                    return $http.get(baseUrl
                        + 'playlist'
                        + '/' + playlistId
                        + '/' + playlistName
                        + '/update'
                    ).then(function () {
                            FavouritesServices.playlists[index].playlist_name = playlistName;
                            FavouritesServices.playlists[index].editMode = false;
                        });
                }
            }
        };

        //playlist/{playlist_id}/delete
        FavouritesServices.deletePlaylist = function (index, playlistId, event)
        {
            event.stopPropagation();

            if (FacebookServices.isConnected())
            {
                var prompt = confirm(MessagesConstants.deletePlaylist);

                if (prompt == true)
                {
                    return $http.get(baseUrl
                        + 'playlist'
                        + '/'
                        + playlistId
                        + '/delete'
                    ).then(function ()
                        {
                            FavouritesServices.playlists.splice(index, 1);
                        });
                }
            }
        };


        //favourites/{release_id}/delete
        FavouritesServices.removeReleaseFromFavourites = function (releaseId)
        {
            if (FacebookServices.isConnected())
            {
                return $http.get(baseUrl
                    + 'favourites'
                    + '/'
                    + releaseId
                    + '/delete'
                );
            }
        };


        //favourites/{release_id}/existing
        FavouritesServices.isReleaseFavourite = function (releaseId)
        {
            return $http.get(baseUrl
                + 'favourites'
                + '/' + releaseId
                + '/existing'
            );
        };


        //playlist/{playlist_name}/new
        FavouritesServices.createPlaylist = function (playlistName)
        {
            if (FacebookServices.isConnected())
            {
                return $http.get(baseUrl
                    + 'playlist'
                    + '/' + playlistName
                    + '/new'
                );
            }
            else {
                FacebookServices.login(function () {
                    FavouritesServices.createPlaylist(playlistName);
                });
            }
        };


        //playlist/{playlist_name}/{youtube_playlist_id}/new
        FavouritesServices.createPlaylistTypeYoutube = function (playlistName, youtubePlaylistId)
        {
            if (FacebookServices.isConnected())
            {
                return $http.get(baseUrl
                    + 'playlist'
                    + '/' + playlistName
                    + '/' + youtubePlaylistId
                    + '/new'
                );
            }
            else {
                FacebookServices.login(function ()
                {
                    FavouritesServices.createPlaylist(playlistName, youtubePlaylistId);
                });
            }
        };


        //playlist/{playlist_id}/{track_id}/{track_title}/{artist_name}/add
        FavouritesServices.addTrackToPlaylist = function (trackId, playlistId, playlistName, trackTitle, artistName)
        {
            if (FacebookServices.isConnected())
            {
                return $http.get(baseUrl
                    + 'playlist'
                    + '/' + playlistId
                    + '/' + trackId
                    + '/' + trackTitle
                    + '/' + artistName
                    + '/add'
                );
            }
            else {
                FacebookServices.login(function ()
                {
                    FavouritesServices.addTrackToPlaylist(trackId, playlistId, playlistName, trackTitle);
                });
            }
        };


        //playlist/{playlist_id}/{track_id}/remove
        FavouritesServices.removeTrackFromPlaylist = function (trackId, playlistId)
        {
            if (FacebookServices.isConnected())
            {
                return $http.get(baseUrl
                    + 'playlist'
                    + '/' + playlistId
                    + '/' + trackId
                    + '/remove'
                );
            }
            else {
                FacebookServices.login(function ()
                {
                    FavouritesServices.removeTrackFromPlaylist(trackId, playlistId);
                });
            }
        };

        return FavouritesServices;
}]);