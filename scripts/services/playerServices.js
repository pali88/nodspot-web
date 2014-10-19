nodspot.factory('PlayerServices',  ['$window', 'SearchServices', '$location', '$rootScope', function ($window, SearchServices, $location, $rootScope) {

    var PlayerServices =
    {
        scrollY: 0
    };

    PlayerServices.currentlyPlaying =
    { //used when favouriting an album
        artistName: '',
        releaseTitle: '',
        releaseId: '',
        releaseType: '',
        releaseYear: '',
        searchType: '',
        searchTerm: '',
        source: '',
        track: 0,
        playlistId: undefined
    };


    $window.ytPlayer = undefined;
    $window.onYouTubeIframeAPIReady = function ()
    {
        $window.ytPlayer = new YT.Player('embeddedPlayer',
            {
                height: '100%',
                width: '100%',
                events:
                {
                    'onReady': PlayerServices.onReady,
                    'onStateChange': PlayerServices.onPlayerStateChanged
                }
            });
    };


    PlayerServices.onReady = function ()
    {
        ytPlayer.addEventListener('onStateChange', function (e) {});
        ytPlayer.setOption('cc', 'cc_load_policy', 0);
    };


    PlayerServices.resetCurrentlyPlaying = function ()
    {
        SearchServices.hash.releaseId = '';
        SearchServices.hash.startFrom = 0;
        SearchServices.surprise.releaseId = '';
        PlayerServices.currentlyPlaying.track = 0;
    };


    PlayerServices.getCurrentlyPlaying = function ()
    {
        return PlayerServices.currentlyPlaying;
    };


    PlayerServices.onPlayerStateChanged = function (newState)
    {
        if (newState.data == 1 || newState.data == 3 || newState.data == 5)
        {
            PlayerServices.currentlyPlaying.track = ytPlayer.getPlaylistIndex();
            PlayerServices.updateHash();
        } else if (newState.data == 0 || newState.data == -1) {

        }

        return newState;
    };


    PlayerServices.removeEmptyItemsFromArray = function (list)
    {
        var cleanArray = [];

        for (var i = 0; i < list.length; i++) {
            if (list[i] != undefined && list[i] != '')
            {
                cleanArray.push(list[i]);
            }
        }

        return cleanArray;
    };


    PlayerServices.updateHash = function ()
    {
        var hash = '',
            type = '?type=',
            separator = '&';

        switch (SearchServices.searchSource)
        {
            case SearchServices.searchSources.userInput:
            {
                hash = type + 'search'
                    + separator + 'searchType=' + SearchServices.searchType
                    + separator + 'term=' + SearchServices.searchTerm
                    + separator + 'id=' + PlayerServices.currentlyPlaying.releaseId
                    + separator + 'track=' + PlayerServices.currentlyPlaying.track;
                break;
            }

            case SearchServices.searchSources.userPlaylist:
            {
                hash = type + 'playlist'
                    + separator + 'id=' + PlayerServices.currentlyPlaying.playlistId
                    + separator + 'track=' + PlayerServices.currentlyPlaying.track;
                break;
            }

            case SearchServices.searchSources.surpriseMe:
            {
                hash = type + 'surprise'
                    + separator + 'style=' + SearchServices.surprise.style
                    + separator + 'page=' + SearchServices.surprise.page
                    + separator + 'id=' + PlayerServices.currentlyPlaying.releaseId
                    + separator + 'track=' + PlayerServices.currentlyPlaying.track;
                break;
            }

            case SearchServices.searchSources.directYoutube:
            {
                hash = type + 'youtube'
                    + separator + 'term=' + SearchServices.searchTerm
                    + separator + 'track=' + PlayerServices.currentlyPlaying.track;
                break;
            }

            case SearchServices.searchSources.topTracks:
            {
                hash = type + 'topTracks'
                    + separator + 'term=' + SearchServices.searchTerm
                    + separator + 'track=' + PlayerServices.currentlyPlaying.track;
                break;
            }

            case SearchServices.searchSources.tag:
            {
                hash = type + 'tag'
                    + separator + 'term=' + SearchServices.searchTerm
                    + separator + 'track=' + PlayerServices.currentlyPlaying.track;
                break;
            }
        }

        hash = hash.replace(/ /g, '-');
        $location.url(hash, $location.path());
        $rootScope.$digest();
    };


    PlayerServices.playTrack = function (index)
    {
          ytPlayer.setLoop(true);
          ytPlayer.playVideoAt(index);
    };


    PlayerServices.getScrollY = function (index)
    {
        return PlayerServices.scrollY;
    };

    return PlayerServices;
}]);
