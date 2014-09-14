nodspot.factory('FacebookServices', ['$http', '$rootScope', function ($http, $rootScope) {

    var FacebookServices = {};

    FacebookServices.connected = false;

    FacebookServices.isConnected = function () {
        return FacebookServices.connected;
    };

    //check if FB SDK is loaded, and if it is, get login status
    FacebookServices.isLive = function () {
        try {
            if (FB != undefined) {
                FacebookServices.getLoginStatus();
            }
        } catch (e) {
            setTimeout(function () {
                FacebookServices.isLive();
            }, 250);
        }
    };

    FacebookServices.login = function (callback) {
        FB.login(function (response) {
            $rootScope.$apply(function () {
                if (response.authResponse) {
                    FacebookServices.connected = true;
                    if (typeof callback == "function") {
                        callback(true);
                    }
                }
            });
        }, {scope: 'email, user_likes'}); //publish_actions, publish_stream
    };

    FacebookServices.getUserInfo = function (callback) {
        FB.api('/me', function (res) {
            FacebookServices.userInfo = {
                firstName: res.first_name,
                userId: res.id,
                userEmail: res.email
            };

            FacebookServices.getUserNodspotId(FacebookServices.userInfo.userId, FacebookServices.userInfo.userEmail);

            if (typeof (callback) == 'function') {
                callback(FacebookServices.userInfo);
            }
        });
    };

    FacebookServices.getUserNodspotId = function (fbUserId, fbEmail) {
        $http.get('favourites.php?action=' + 'getUserID' +
            '&user_id=' + fbUserId +
            '&email=' + fbEmail)
            .then(function (nodspotId) {
                FacebookServices.userInfo.nodspotId = nodspotId;
                localStorage['nodspotUserId'] = nodspotId.data;
            });
    };

    FacebookServices.logout = function () {
        FB.logout(function () {
            $rootScope.$apply(function () {
                FacebookServices.connected = false;
                FacebookServices.logout();
            });
        });
    };

    FacebookServices.getLoginStatus = function () {
        FB.getLoginStatus(function (res) {
            $rootScope.$apply(function () {
                    if (res.status === "connected") {
                        FacebookServices.connected = true;
                    } else {
                        FacebookServices.connected = false;
                    }

                    return FacebookServices.connected;
                }
            );
        });
    };

    return FacebookServices;
}]);