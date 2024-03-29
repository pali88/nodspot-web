nodspot.controller('FavouritesCtrl', ['$rootScope', '$scope', 'FavouritesServices', 'YoutubeServices', 'ReleasesServices', 'PlayerServices', 'ArtistServices', 'SearchServices', 'FacebookServices', 'EventsConstants', function ($rootScope, $scope, FavouritesServices, YoutubeServices, ReleasesServices, PlayerServices, ArtistServices, SearchServices, FacebookServices, EventsConstants)
{

    //"your favourites will appear here" placeholder
    $scope.placeholderVisibility = true;
    $scope.favouritesPanelVisibility = false;
    $scope.releases = [];
    $scope.playlists = [];
    $scope.predicate = '-artist_name';


    $scope.hidePlaceholder = function ()
    {
        $scope.placeholderVisibility = false;
    };


    $scope.expandPanel = function ()
    {
        $scope.state = 'expanded';
    };


    $scope.collapsePanel = function ()
    {
        $scope.state = 'collapsed';
    };


    $scope.$watch(FacebookServices.isConnected, function ()
    {
        if (FacebookServices.isConnected())
        {
            $scope.favouritesPanelVisibility = true;
        }
    });


    //once the request headers are set, try fetching users favourites
    $scope.$on('requestCookieSet', function (event)
    {
        FavouritesServices.fetchPlaylists();
        FavouritesServices.fetchFavourites();
    });


    //watch for changes in playlists
    $scope.$watch(FavouritesServices.getPlaylists, function ()
    {
        $scope.playlists = FavouritesServices.getPlaylists();
        $scope.hidePlaceholder();
    });


    $scope.$watch(FavouritesServices.getFavourites, function ()
    {
        $scope.releases = FavouritesServices.getFavourites();
        $scope.releases = ReleasesServices.generateThumbnails('artist_name', $scope.releases);
        $scope.hidePlaceholder();
    });


    $scope.getPlaylistTracks = function (index, playlistId)
    {
        var playlist = $scope.playlists[index];

        //check if we're trying to play a nodspot playlist
        if (!$scope.playlists[index].is_youtube) {
            FavouritesServices.getPlaylistTracks(playlistId).then(function (videos)
            {
                PlayerServices.loadPlaylist(videos, 0);
                PlayerServices.currentlyPlaying.albumName =  playlist.playlist_name + ', ' + videos.length + ' tracks';
                PlayerServices.currentlyPlaying.playlistId = playlistId;
                SearchServices.searchSource = SearchServices.searchSources.userPlaylist;
            });
        }

        //means, it's an imported playlist from youtube
        else {
            YoutubeServices.getVideosFromYoutubePlaylist(playlist.youtube_playlist_id)
                .then(function (videos)
                {
                    PlayerServices.loadPlaylist(videos, 0);
                    PlayerServices.currentlyPlaying.albumName = videos.length + ' tracks';
                    PlayerServices.currentlyPlaying.playlistId = playlist.youtube_playlist_id;
                    SearchServices.searchSource = SearchServices.searchSources.youtubePlaylist;
                });
        }
        PlayerServices.currentlyPlaying.releaseYear = 'all good :)';
    };


    //reveals/hides "edit playlist name" input box
    $scope.playlistEditMode = function (index, event)
    {
        FavouritesServices.playlistEditMode(index, event);
    };


    $scope.deletePlaylist = function (index, playlistId, event)
    {
        FavouritesServices.deletePlaylist(index, playlistId, event);
    };


    $scope.renamePlaylist = function (index, playlistId, newPlaylistName, event)
    {
        FavouritesServices.renamePlaylist(index, playlistId, newPlaylistName, event);
    };

}]);


nodspot.controller('AddToPlaylistCtrl', ['$scope', 'FavouritesServices', function ($scope, FavouritesServices)
{

    $scope.playlistName = '';
    $scope.myFirstPlaylistVisibility = true;

    $scope.$watch(FavouritesServices.getPlaylists, function ()
    {
        $scope.playlists = FavouritesServices.playlists;
        $scope.myFirstPlaylistVisibility = ($scope.playlists.length > 0) ? false : true;
    });


    //get playlists the track is saved in (i.e. a track can belong to playlist a, playlist b, etc.)
    $scope.$watch(FavouritesServices.getTracksPlaylists, function ()
    {
        $scope.tracksPlaylists = FavouritesServices.tracksPlaylists;
        FavouritesServices.highlightTracksPlaylists($scope.playlists, $scope.tracksPlaylists);
    });


    //reveals/hides "edit playlist name" input box
    $scope.playlistEditMode = function (index, event)
    {
        FavouritesServices.playlistEditMode(index, event);
    };


    $scope.addTrackToPlaylist = function (index, trackState, playlistId, event)
    {
        if (event.target.localName != 'input')
        {
            if (trackState == 'notSaved' && playlistId != '')
            {
                FavouritesServices.addTrackToPlaylist(FavouritesServices.trackId, playlistId, null, FavouritesServices.trackTitle, FavouritesServices.artistName)
                    .success(function ()
                        {
                            $scope.playlists[index].state = 'saved';
                        });
            }
            else if (trackState == 'saved')
            {
                FavouritesServices.removeTrackFromPlaylist(FavouritesServices.trackId, playlistId);
                $scope.playlists[index].state = 'notSaved';
            }
        }
    };


    $scope.renamePlaylist = function (index, playlistId, newPlaylistName, event)
    {
        FavouritesServices.renamePlaylist(index, playlistId, newPlaylistName, event);
    };


    $scope.deletePlaylist = function (index, playlistId, event)
    {
        FavouritesServices.deletePlaylist(index, playlistId, event);
    };


    //add track to a new playlist, that has not been created yet.
    $scope.addTrackToNewPlaylist = function (playlistName, event)
    {
        if (event.which == 13 || event.which == 1)
        {
            FavouritesServices.createPlaylist(playlistName).success(function (playlistId)
            {
                FavouritesServices.addTrackToPlaylist(FavouritesServices.trackId, playlistId, playlistName, FavouritesServices.trackTitle, FavouritesServices.artistName).success(function ()
                {
                    FavouritesServices.fetchPlaylists();
                });
            });
        }
    };
}]);