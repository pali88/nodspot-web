nodspot.factory('HelperServices', ['$http', 'EventsConstants', '$q', function ($http, EventsConstants, $q)
{
    var HelperServices =
    {

        playlistPosition: undefined,

        //extracts and returns video ids from video objects returned from youtube
        extractVideoIds: function (videos)
        {
            var playlistIds = [];

            angular.forEach(videos, function (video, key)
            {
                playlistIds.push(video.id.videoId);
            });

            return playlistIds;
        },

        //get playlist wrapper absolute position, used for working out the thumbnail's position for a hovered track
        getTracklistsAbsolutePosition: function ()
        {
            return (HelperServices.playlistPosition == undefined)
                ? HelperServices.playlistPosition = document.querySelector('#ytTrackList').getBoundingClientRect()
                : HelperServices.playlistPosition;
        }
    };

    return HelperServices;
}]);