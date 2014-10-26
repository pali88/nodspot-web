nodspot.controller('ReleasesCtrl', ['$scope', 'ReleasesServices', 'EventsConstants', 'SearchServices', 'PlayerServices', function ($scope, ReleasesServices, EventsConstants, SearchServices, PlayerServices)
{

    //show/hide releases sidebar
    $scope.sidebarVisibility = false;
    $scope.releasesVisibility = true;
    $scope.releases = undefined;
    $scope.searchType = undefined;
    $scope.releaseId = undefined;

    $scope.collapseReleases = function ()
    {
        $scope.releasesVisibility = false;
    };

    $scope.expandReleases = function ()
    {
        $scope.releasesVisibility = true;
    };

    $scope.collapseSidebar = function ()
    {
        $scope.sidebarVisibility = false;
    };

    $scope.expandSidebar = function ()
    {
        $scope.sidebarVisibility = true;
    };

    $scope.playRelease = function (albumId, searchTerm, index)
    {
        ReleasesServices.getAlbumTracklist(albumId).then(function (tracklist)
        {

            ReleasesServices.findVideos(tracklist).then(function (videos)
            {
                PlayerServices.loadPlaylist(videos, 0);
            })

            SearchServices.searchSource = SearchServices.searchSources.userInput;
            PlayerServices.currentlyPlaying.albumId = albumId;
            PlayerServices.currentlyPlaying.albumName = ReleasesServices.returnedReleases[index].name;
            ReleasesServices.highlightRelease(albumId);
        });
    };


    $scope.$on(EventsConstants.similarArtistsReturned, function ()
    {
        $scope.expandSidebar();
    });


    $scope.$watch(ReleasesServices.getReleases, function (newValue, oldValue)
    {
        $scope.releases = ReleasesServices.getReleases();

        if ($scope.releases.length > 0)
        {
            $scope.expandReleases();
            $scope.releases.searchTerm = SearchServices.searchTerm;
        }
        else {
            $scope.collapseReleases();
        }
    });

}]);