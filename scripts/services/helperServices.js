nodspot.factory('HelperServices', ['$http', 'EventsConstants', '$q', function ($http, EventsConstants, $q)
{
    var HelperServices =
    {
        //extracts and returns video ids from video objects returned from youtube
        extractVideoIds: function (videos)
        {
            var playlistIds = [];

            angular.forEach(videos, function (video, key) {
                playlistIds.push(video.id.videoId);
            });

            return playlistIds;
        }

    };

    return HelperServices;
}]);