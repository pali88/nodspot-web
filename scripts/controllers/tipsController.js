nodspot.controller('TipsCtrl', ['$scope', 'FavouritesServices', 'PlayerServices', function ($scope, FavouritesServices, PlayerServices)
{
    $scope.tipVisibility = true;

    $scope.addTrackToPlaylist = function () {
        var index = PlayerServices.currentlyPlaying.track;
        FavouritesServices.captureTrackInfo(index);
    }

    $scope.collapseTip = function () {
        $scope.tipVisibility = false;
        localStorage["showTips"] = 0;
    }

    $scope.$watch(PlayerServices.getFirstTimePlay, function (newValue, oldValue) {
        $scope.tipVisibility = PlayerServices.getFirstTimePlay();
    });

}]);