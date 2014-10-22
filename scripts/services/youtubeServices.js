nodspot.factory('YoutubeServices', ['$http', '$rootScope', 'EventsConstants', '$window', '$q', function ($http, $rootScope, EventsConstants, $window, $q) {

    var baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet',
        apiKey = 'AIzaSyCqb509HUMemkHf0fEHMiE3abVWdN-aKK0';

    var YoutubeServices =
    {
        isConnected: false,
        authUrl: 'https://accounts.google.com/o/oauth2/auth?',
        redirectUrl: 'http://www.nodspot.com/ytCallback.html',
        scope: 'https://www.googleapis.com/auth/youtube.readonly',
        API: 'AIzaSyCqb509HUMemkHf0fEHMiE3abVWdN-aKK0',
        clientID: '944591291174.apps.googleusercontent.com',
        token: '',
        feedBaseUrl: '',

        returnedVideos: [],
        returnedVideosCounter: 0,

        //OAuth2
        auth: function ()
        {
            $window.open(
                this.authUrl + 'client_id=' +
                this.clientID + '&redirect_uri=' +
                this.redirectUrl + '&scope=' +
                this.scope + '&response_type=token', 'Google Sign in', 'height=500,width=500'
            );
        },


        //retrieve currently logged in user's (with Google's OAuth) youtube playlists.
        getUsersYoutubePlaylists: function ()
        {
            var deferred = $q.defer();

            YoutubeServices.getAuthTokenFromLocalStorage()
                .then(function (token)
                {
                    if (token)
                    {
                        deferred.resolve($http.get('https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&key=' + YoutubeServices.API + '&access_token=' + token));
                    }
                    else {
                        deferred.reject(false);

                        setTimeout(function ()
                        {
                            YoutubeServices.getUsersYoutubePlaylists();
                        }, 1000);
                    }
                });
            return deferred.promise;
        }
    };


    //read ytToken from localStorage
    YoutubeServices.getAuthTokenFromLocalStorage = function ()
    {
        var deferred = $q.defer(),
            ytToken = localStorage['ytToken'];

        if (ytToken != '')
        {
            deferred.resolve(ytToken);
        }
        else {
            deferred.resolve(false);
        }

        return deferred.promise;
    };

    //set playlist length so we can use it later on to know if we have all the tracks for the playlist or not
    YoutubeServices.setPlaylistLength = function (playlistLength)
    {
        YoutubeServices.returnedVideos = [];
        YoutubeServices.returnedVideosCounter = 0;
        YoutubeServices.playlistLength = playlistLength;
    };


    //wrapper function firing firing "fetchVideo" for every track in the tracklist
    YoutubeServices.findVideos = function (tracklist, maxResults)
    {

        //check if we're dealing with a tracklist or just one track
        if (typeof (tracklist) == "object")
        {
            YoutubeServices.setPlaylistLength(tracklist.length);
        } else {
            tracklist = [{track_title: tracklist }];
        }

        if (maxResults == undefined)
        {
            maxResults = 1;
        }

        angular.forEach(tracklist, function (track, i)
        {
            YoutubeServices.findVideo(track.artist_name, decodeURIComponent(track.track_title), i, maxResults);
        });
    };


    //check if the video still exists on youtube
    YoutubeServices.isValidVideo = function (videoId)
    {
        var url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + '&key=' + apiKey,
            isValid;

        return $http.get(url).then(function (res)
        {
            isValid = res.data.pageInfo.totalResults > 0 ? true : false;

            return isValid;
        });
    };


    //try to fetch video from youtube
    YoutubeServices.findVideo = function (artistName, trackName, i, maxResults)
    {
        var url;

        url = baseUrl + '&maxResults='
            + maxResults
            + '&q='
            + trackName
            + "&type=video&key="
            + apiKey;

        $http.get(encodeURI(url)).then(function (res)
        {
            if (res.data.pageInfo.totalResults > 0)
            {

                switch (maxResults)
                {
                    case 1:
                    {
                        YoutubeServices.returnedVideos[i] = res.data.items[0];
                        YoutubeServices.returnedVideos[i].artistName = artistName;
                        YoutubeServices.returnedVideosCounter++;
                        break;
                    }

                    //this means that we could not find any releases for this term, therefore we're returning 20 videos straight from youtube
                    case 40:
                    {
                        angular.forEach(res.data.items, function (video, j)
                        {
                            YoutubeServices.returnedVideos[j] = video;
                            YoutubeServices.returnedVideosCounter++;
                            YoutubeServices.playlistLength = maxResults;
                        });
                        break;
                    }
                }

            }
            else
            {
                YoutubeServices.playlistLength--;
            }


            //check if we've built the playlist we were expected to. If yes, broadcast. PlayerCtrl will be waiting.
            if (YoutubeServices.returnedVideosCounter == YoutubeServices.playlistLength)
            {
                $rootScope.$broadcast(EventsConstants.playlistReady, YoutubeServices.returnedVideos);
                YoutubeServices.returnedVideos = [];
                YoutubeServices.returnedVideosCounter = 0;
            }
        });
    };

    YoutubeServices.getVideosFromYoutubePlaylist = function (playlistId)
    {
        var deferred = $q.defer();

        $http.get(
            "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="
            + playlistId
            + "&key="
            + this.API
        ).then(function (res) {
                var returnedVideos = [];

                angular.forEach(res.data.items, function (video, key)
                {
                    returnedVideos[key] =
                    {
                        artistName: '',
                        id: video.snippet.resourceId,
                        snippet: video.snippet
                    };
                });

                $rootScope.$broadcast(EventsConstants.playlistReady, returnedVideos);
                deferred.resolve(returnedVideos);
            });

        return deferred.promise;
    };


    var ytObj = {

        getMySubscriptions: function () {
            ytObj.validateToken(function (res) {
                if(res) {
                    $.ajax({
                        url: 'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=50&mine=true&key=' + ytObj.API + '&access_token=' + ytObj.token,
                        success: function (res) {
                            console.log(res);
                        }
                    });
                }
            });
        },

        getAllVideosByUser: function (userName) {
            $.ajax({
                url: "http://gdata.youtube.com/feeds/api/users/" + userName + "/uploads?alt=json",
                success: function (videos) {
                    console.log(videos);
                },
                error: function (request, status, error) {
                    helpersObj.showNotification(messagesObj.somethingWrong);
                }
            });
        },

        getVideoDataByID: function (id) {
            $.ajax({
                url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=' + ytObj.API,
                success: function (res) {

                }
            });
        },

        getVideosFromPlaylist: function (playlistID) {
            $.ajax({
                url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + playlistID + "&key=" + ytObj.API
            }).success(function (res) {
                console.log(res);
                playerObj.clearPlaylist();
                playerObj.findVideos(res);
            });
        }

    };

    return YoutubeServices;
}]);