nodspot.controller('LoginCtrl', ['$scope', 'FacebookServices', 'LoginConstants', 'FavouritesServices', 'GenresServices', 'EventsConstants', '$rootScope', 'YoutubeServices', function ($scope, FacebookServices, LoginConstants, FavouritesServices, GenresServices, EventsConstants, $rootScope, YoutubeServices) {

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
        $scope.loginMenuClass = ($scope.loginMenuClass == 'collapsed') ? '' : 'collapsed';
    };


    $scope.fbLogin = function () {
        if (FacebookServices.isConnected()) {
            FacebookServices.logout();
        } else {
            FacebookServices.login();
        }

        $scope.loginMenuVisibility = false;
    };


    $scope.ytLogin = function () {
        //YoutubeServices.auth();
        //YoutubeServices.getUsersYoutubePlaylists().then(function (playlists) {
        //    //console.log(playlists);
        //    FavouritesServices.createPlaylistTypeYoutube(playlists.data.items[0].snippet.title, 1);
        //});

    };

}]);