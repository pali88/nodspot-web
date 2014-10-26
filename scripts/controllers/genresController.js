nodspot.controller('GenresCtrl', ['$scope', 'ReleasesServices', 'EventsConstants', 'GenresServices', 'LastfmServices', '$rootScope', 'PlayerServices', function ($scope, ReleasesServices, EventsConstants, GenresServices, LastfmServices, $rootScope, PlayerServices)
{

    $scope.visibility = true;
    $scope.styles = GenresServices.getStyles();

    $scope.$watch(GenresServices.getStyles, function ()
    {
        $scope.styles = GenresServices.getStyles();
    });


    $scope.$watch(GenresServices.getTags, function ()
    {
        $scope.tags = GenresServices.getTags();
    });


    $scope.playTagsTopTracks = function (tagName)
    {
        LastfmServices.getTagsTopTracksVideos(tagName).then(function (videos) {
            PlayerServices.loadPlaylist(videos, 0);
        });
        $scope.collapseTagsAndGenres();
    };


    $scope.collapseTagsAndGenres = function ()
    {
        $scope.visibility = false;
        $rootScope.$broadcast(EventsConstants.showPlayer);
    };


    //re-initiate accent colours
    $scope.setAccent = function ()
    {
        GenresServices.setAccent();
    };


    $scope.$watch(GenresServices.isVisible, function ()
    {
        $scope.visibility = GenresServices.isVisible();
    });


    $scope.getReleasesByStyle = function (style)
    {
        ReleasesServices.getReleasesByStyle(style);
        $scope.collapseTagsAndGenres();
    };

}]);