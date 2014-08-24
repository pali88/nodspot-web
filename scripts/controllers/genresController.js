nodspot.controller('GenresCtrl', ['$scope', 'ReleasesServices', 'EventsConstants', 'GenresServices', 'LastfmServices', '$rootScope', function ($scope, ReleasesServices, EventsConstants, GenresServices, LastfmServices, $rootScope) {

    $scope.visibility = true;
    $scope.styles = GenresServices.getStyles();

    $scope.$watch(GenresServices.getStyles, function () {
        $scope.styles = GenresServices.getStyles();
    });

    $scope.$watch(GenresServices.getTags, function () {
        $scope.tags = GenresServices.getTags();
    });

    $scope.playTagsTopTracks = function (tagName) {
        LastfmServices.playTagsTopTracks(tagName);
        $scope.collapseTagsAndGenres();
    };

    $scope.collapseTagsAndGenres = function () {
        $scope.visibility = false;
        $rootScope.$broadcast(EventsConstants.showPlayer);
    };

    //re-initiate accent colours
    $scope.setAccent = function () {
        GenresServices.setAccent();
    };

    $scope.$watch(GenresServices.isVisible, function () {
        $scope.visibility = GenresServices.isVisible();
    });

    $scope.getReleasesByStyle = function (style) {
        ReleasesServices.getReleasesByStyle(style);
        $scope.collapseTagsAndGenres();
    };

    $scope.$on(EventsConstants.playlistReady, function () {
        $scope.visibility = false;
    });

}]);