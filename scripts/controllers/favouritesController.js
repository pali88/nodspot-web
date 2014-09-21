nodspot.controller('FavouritesCtrl', ['$rootScope', '$scope', 'FavouritesServices', 'YoutubeServices', 'ReleasesServices', 'PlayerServices', 'ArtistServices', 'SearchServices', 'FacebookServices', 'EventsConstants', function ($rootScope, $scope, FavouritesServices, YoutubeServices, ReleasesServices, PlayerServices, ArtistServices, SearchServices, FacebookServices, EventsConstants) {

    //"your favourites will appear here" placeholder
    $scope.placeholderVisibility = true;
    $scope.favouritesPanelVisibility = false;
    $scope.releases = [];
    $scope.playlists = [];
    $scope.predicate = '-artist_name';


    $scope.hidePlaceholder = function () {
        $scope.placeholderVisibility = false;
    };


    $scope.expandPanel = function () {
        $scope.state = 'expanded';
    };


    $scope.collapsePanel = function () {
        $scope.state = 'collapsed';
    };


    $scope.$watch(FacebookServices.isConnected, function () {
        if (FacebookServices.isConnected()) {
            $scope.favouritesPanelVisibility = true;
        }
    });


    //once the request headers are set, try fetching users favourites
    $scope.$on('requestCookieSet', function (event) {
        FavouritesServices.fetchPlaylists();
        FavouritesServices.fetchFavourites();
    });


    //watch for changes in playlists
    $scope.$watch(FavouritesServices.getPlaylists, function () {
        $scope.playlists = FavouritesServices.getPlaylists();
        $scope.hidePlaceholder();
    });


    $scope.$watch(FavouritesServices.getFavourites, function () {
        $scope.releases = FavouritesServices.getFavourites();
        $scope.hidePlaceholder();
        $scope.releases = ReleasesServices.generateThumbnails('artist_name', $scope.releases);
    });


    $scope.getPlaylistTracks = function (index, playlistId) {
        FavouritesServices.getPlaylistTracks(playlistId).then(function (playlistTracks) {
            PlayerServices.currentlyPlaying.title = $scope.playlists[index].playlist_name;
            PlayerServices.currentlyPlaying.releaseTitle = playlistTracks.length + ' tracks';
            PlayerServices.currentlyPlaying.releaseYear = 'all good :)';
            PlayerServices.currentlyPlaying.track = 0;
            SearchServices.searchSource = SearchServices.searchSources.userPlaylist;
        });
    };


    //reveals/hides "edit playlist name" input box
    $scope.playlistEditMode = function (index, event) {
        FavouritesServices.playlistEditMode(index, event);
    };


    $scope.deletePlaylist = function (index, playlistId, event) {
        FavouritesServices.deletePlaylist(index, playlistId, event);
    };


    $scope.renamePlaylist = function (index, playlistId, newPlaylistName, event) {
        FavouritesServices.renamePlaylist(index, playlistId, newPlaylistName, event);
    };


    $scope.playRelease = function (releaseId, searchType, searchTerm, artistName) {
        ReleasesServices.playRelease(releaseId, searchType);
        SearchServices.searchType = searchType;
        SearchServices.searchTerm = searchTerm;
        SearchServices.searchSource = SearchServices.searchSources.userInput;
        PlayerServices.currentlyPlaying.track = 0;
    };
}]);


nodspot.controller('AddToPlaylistCtrl', ['$scope', 'FavouritesServices', function ($scope, FavouritesServices) {

    $scope.playlistName = '';
    $scope.myFirstPlaylistVisibility = true;


    $scope.$watch(FavouritesServices.getPlaylists, function () {
        $scope.playlists = FavouritesServices.playlists;

        if ($scope.playlists.length > 0) {
            $scope.myFirstPlaylistVisibility = false;
        }
    });


    //get playlists the track is saved in (i.e. a track can belong to playlist a, playlist b, etc.)
    $scope.$watch(FavouritesServices.getTracksPlaylists, function () {
        $scope.tracksPlaylists = FavouritesServices.tracksPlaylists;
        FavouritesServices.highlightTracksPlaylists($scope.playlists, $scope.tracksPlaylists);
    });


    //reveals/hides "edit playlist name" input box
    $scope.playlistEditMode = function (index, event) {
        FavouritesServices.playlistEditMode(index, event);
    };


    $scope.addTrackToPlaylist = function (index, trackState, playlistId, event) {
        if (event.target.localName != 'input') {
            if (trackState == 'notSaved' && playlistId != '') {
                FavouritesServices.addTrackToPlaylist(FavouritesServices.trackId, playlistId, null, FavouritesServices.trackTitle, FavouritesServices.artistName).success(function () {
                    $scope.playlists[index].state = 'saved';
                });
            } else if (trackState == 'saved') {
                FavouritesServices.removeTrackFromPlaylist(FavouritesServices.trackId, playlistId);
                $scope.playlists[index].state = 'notSaved';
            }
        }
    };


    $scope.renamePlaylist = function (index, playlistId, newPlaylistName, event) {
        FavouritesServices.renamePlaylist(index, playlistId, newPlaylistName, event);
    };


    $scope.deletePlaylist = function (index, playlistId, event) {
        FavouritesServices.deletePlaylist(index, playlistId, event);
    };


    $scope.addTrackToNewPlaylist = function (playlistName, event) {
        if (event.which == 13 || event.which == 1) {
            FavouritesServices.addTrackToPlaylist(FavouritesServices.trackId, '', playlistName, FavouritesServices.trackTitle, FavouritesServices.artistName).success(function () {
                FavouritesServices.fetchPlaylists();
            });
        }
    };
}]);