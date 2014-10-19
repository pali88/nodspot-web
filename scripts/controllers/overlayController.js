nodspot.controller('OverlayCtrl', ['$scope', 'EventsConstants', function ($scope, EventsConstants)
{

    $scope.overlayVisibility = false;

    $scope.closeOverlay = function (event)
    {
        if (event.target.id == 'overlay' || event.target.className == 'btn btnDark close')
        {
            $scope.overlayVisibility = false;
        }
    };


    $scope.$on(EventsConstants.trackInfoCaptured, function (event)
    {
       $scope.overlayVisibility = true;
    });
}]);