nodspot.factory('FacebookServices', ['$http', '$rootScope', 'ApiConstants', function ($http, $rootScope, ApiConstants) {

    var FacebookServices = {};

    FacebookServices.connected = false;

    FacebookServices.isConnected = function () {
        return FacebookServices.connected;
    };

    console.log('old cookie: ' + document.cookie);

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

            FacebookServices.getNodspotUserId(FacebookServices.userInfo.userId, FacebookServices.userInfo.userEmail);

            if (typeof (callback) == 'function') {
                callback(FacebookServices.userInfo);
            }
        });
    };


    //check if hash cookie exists
    FacebookServices.isCookieSet = function () {
        return document.cookie.indexOf('hash') > -1;
    };

    FacebookServices.getNodspotUserId = function (fbUserId, fbEmail) {
        var eventCookieSet = 'requestCookieSet';

        $http.get(ApiConstants.baseUrlNodspot + 'user/' + fbUserId + '/' + fbEmail + '/existing').then(function (res, status, headers, config) {
            document.cookie = "hash=" + res.data;
            console.log('new cookie: ' + document.cookie);
            document.cookie = "hash=" + res.data + "; expires=Thu, 18 Dec 2015 12:00:00 UTC";
            $rootScope.$broadcast(eventCookieSet);
        });
    };


    FacebookServices.logout = function () {
        FB.logout(function () {
            $rootScope.$apply(function () {
                FacebookServices.connected = false;
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