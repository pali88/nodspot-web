nodspot.controller('LoginCtrl', ['$scope', 'FacebookServices', 'LoginConstants', 'FavouritesServices', 'GenresServices', 'EventsConstants', '$rootScope', function ($scope, FacebookServices, LoginConstants, FavouritesServices, GenresServices, EventsConstants, $rootScope) {

    $scope.loginMenuClass = 'collapsed';

    $scope.$watch(FacebookServices.isConnected, function () {
        if (FacebookServices.isConnected()) {
            $scope.facebookBtn = LoginConstants.fbLogout;

            FacebookServices.getUserInfo(function (userInfo) {
                $scope.$apply(function () {
                    $scope.user = userInfo;
                });
            });
        } else {
            $scope.facebookBtn = LoginConstants.fbLogin;
        }
    });

    $scope.expandGenres = function () {
        window.location.href = 'http://www.nodspot.com';
    };

    $scope.toggleVisibility = function () {
        if ($scope.loginMenuClass == 'collapsed') {
            $scope.loginMenuClass = '';
        } else {
            $scope.loginMenuClass = 'collapsed';
        }
    };

    $scope.fbLogin = function () {
        if (FacebookServices.isConnected()) {
            FacebookServices.logout();
        } else {
            FacebookServices.login();
        }
        $scope.loginMenuVisibility = false;
    };

}]);