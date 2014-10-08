nodspot.factory('YoutubeServices', ['$http', '$rootScope', 'EventsConstants', function ($http, $rootScope, EventsConstants) {
    var baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet',
        apiKey = 'AIzaSyCqb509HUMemkHf0fEHMiE3abVWdN-aKK0',
        YoutubeServices = {};

    YoutubeServices.returnedVideos = [];
    YoutubeServices.returnedVideosCounter = 0;

    //set playlist length so we can use it later on to know if we have all the tracks for the playlist or not
    YoutubeServices.setPlaylistLength = function (playlistLength) {
        YoutubeServices.returnedVideos = [];
        YoutubeServices.returnedVideosCounter = 0;
        YoutubeServices.playlistLength = playlistLength;
    };

    //wrapper function firing firing "fetchVideo" for every track in the tracklist
    YoutubeServices.findVideos = function (tracklist, maxResults) {
        if (typeof (tracklist) == "object") {
            YoutubeServices.setPlaylistLength(tracklist.length);
        } else { //it means that only one track was passed as a tracklist
            tracklist = [{track_title: tracklist }];
        }

        if (maxResults == undefined) {
            maxResults = 1;
        }

        angular.forEach(tracklist, function (track, i) {
            YoutubeServices.fetchVideo(track.artist_name, decodeURIComponent(track.track_title), i, maxResults);
        });
    };


    //check if the video still exists on youtube
    YoutubeServices.isValidVideo = function (videoId) {
        var url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + '&key=' + apiKey;

        return $http.get(url).then(function (res) {
            var isValid = res.data.pageInfo.totalResults > 0 ? true : false;

            return isValid;
        });
    };


    //try to fetch video from youtube
    YoutubeServices.fetchVideo = function (artistName, trackName, i, maxResults) {
        var url;

        url = baseUrl + '&maxResults='
            + maxResults
            + '&q='
            + trackName
            + "&type=video&key="
            + apiKey;

        $http.get(encodeURI(url)).then(function (res) {
            if (res.data.pageInfo.totalResults > 0) {

                switch (maxResults) {
                    case 1: {
                        YoutubeServices.returnedVideos[i] = res.data.items[0];
                        YoutubeServices.returnedVideos[i].artistName = artistName;
                        YoutubeServices.returnedVideosCounter++;
                        break;
                    }
                    case 40: { //this means that we could not find any releases for this term, therefore we're returning 20 videos straight from youtube
                        angular.forEach(res.data.items, function (video, j) {
                            YoutubeServices.returnedVideos[j] = video;
                            YoutubeServices.returnedVideosCounter++;
                            YoutubeServices.playlistLength = maxResults;
                        });
                        break;
                    }
                }

            } else {
                YoutubeServices.playlistLength--;
            }


            //check if we've built the playlist we were expected to. If yes, broadcast. PlayerCtrl will be waiting.
            if (YoutubeServices.returnedVideosCounter == YoutubeServices.playlistLength) {
                $rootScope.$broadcast(EventsConstants.playlistReady, YoutubeServices.returnedVideos);
                YoutubeServices.returnedVideos = [];
                YoutubeServices.returnedVideosCounter = 0;
            }
        });
    };

    return YoutubeServices;
}]);