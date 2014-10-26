nodspot.controller('ArtistsCtrl', ['$scope', 'ReleasesServices', 'EventsConstants', 'ArtistServices', 'SearchServices', 'PlayerServices', function ($scope, ReleasesServices, EventsConstants, ArtistServices, SearchServices, PlayerServices)
{

    $scope.artistImagesVisibility = false;

    $scope.expandPanel = function ()
    {
        $scope.state = 'expanded';
    };


    $scope.collapsePanel = function ()
    {
        $scope.state = 'collapsed';
    };


    $scope.$on(EventsConstants.similarArtistsReturned, function (event, response)
    {
        try {
            $scope.similarArtists = response.similarartists.artist;
            $scope.similarArtists = ReleasesServices.generateThumbnails('name', $scope.similarArtists);
        } catch (e) {};
    });


    $scope.$on(EventsConstants.artistBioReturned, function (event, response)
    {
        $scope.artist = response.artist;
    });


    $scope.$watch(ArtistServices.getImages, function (newValue, oldValue)
    {
        $scope.images = ArtistServices.getImages();
        $scope.artistImagesVisibility = ($scope.images.length > 0) ? true : false;
    });


    $scope.searchArtist = function (artistName)
    {
        SearchServices.logSearch(artistName, 'similar');
        PlayerServices.resetCurrentlyPlaying();
        SearchServices.searchSource = SearchServices.searchSources.userInput;

        ReleasesServices.getVideosFromYoutube(artistName, 40).then(function (videos) {
            PlayerServices.loadPlaylist(videos, 0);
        });

        ReleasesServices.findAlbums(artistName);
    }

}]);