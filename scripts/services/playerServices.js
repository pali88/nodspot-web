nodspot.factory('PlayerServices',  ['$window', 'SearchServices', '$location', '$rootScope', 'HelperServices', 'GenresServices', 'EventsConstants', function ($window, SearchServices, $location, $rootScope, HelperServices, GenresServices, EventsConstants)
{

    var PlayerServices =
    {
        scrollY: 0,
        playerVisibility: false,
        firstTimePlay: false
    };


    PlayerServices.currentlyPlaying =
    { //used when favouriting an album
        artistName: '',
        albumName: '',
        albumId: '',
        releaseYear: '',
        searchType: '',
        searchTerm: '',
        source: '',
        track: 0,
        playlistId: undefined
    };


    PlayerServices.getFirstTimePlay = function () {
        return PlayerServices.firstTimePlay;
    }

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


    PlayerServices.getPlayerVisibility = function ()
    {
       return PlayerServices.playerVisibility;
    };


    PlayerServices.onReady = function ()
    {
        ytPlayer.addEventListener('onStateChange', function (e) {});
        ytPlayer.setOption('cc', 'cc_load_policy', 0);
    };


    PlayerServices.resetCurrentlyPlaying = function ()
    {
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
            $rootScope.$broadcast(EventsConstants.trackChanged); //for changing the main website background from image to grey
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
                    //+ separator + 'searchType=' + SearchServices.searchType
                    + separator + 'term=' + SearchServices.searchTerm
                    + separator + 'id=' + PlayerServices.currentlyPlaying.albumId
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
                    + separator + 'id=' + PlayerServices.currentlyPlaying.albumId
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

            case SearchServices.searchSources.youtubePlaylist:
            {
                hash = type + 'youtubePlaylist'
                    + separator + 'id=' + PlayerServices.currentlyPlaying.playlistId
                    + separator + 'track=' + PlayerServices.currentlyPlaying.track;
                break;
            }
        }

        hash = hash.replace(/ /g, '-');
        $location.url(hash, $location.path());
        $rootScope.$digest();
    };


    //load nodspot playlist
    PlayerServices.loadPlaylist = function (videos, startFrom)
    {
        var playlistIds = HelperServices.extractVideoIds(videos);

        GenresServices.stylesVisibility = false;
        PlayerServices.playerVisibility = true;

        var interval = setInterval(function ()
        {
            try
            {
                if (ytPlayer.loadPlaylist != undefined)
                {
                    ytPlayer.loadPlaylist(playlistIds, startFrom);
                    clearInterval(interval);
                }
            }
            catch (e) { }
        }, 120);
    };


    PlayerServices.playTrack = function (index) {
        ytPlayer.setLoop(true);
        ytPlayer.playVideoAt(index);
        PlayerServices.isFirstTimePlay();
    };


    //check if this is the first play.
    // True if yes, false otherwise.
    PlayerServices.isFirstTimePlay = function () {
        var playsCounterLS = "playsCounter",
            showTips = "showTips";

        if (localStorage != undefined) {

            //increase counter with every play
            if (localStorage[playsCounterLS] == undefined && localStorage[showTips] == undefined) {
                localStorage[playsCounterLS] = 1;
                localStorage[showTips] = 1;
                return PlayerServices.firstTimePlay = false;
            }
            else if (localStorage[showTips] == 1 && localStorage[playsCounterLS] == 2) {
                localStorage[playsCounterLS]++;
                return PlayerServices.firstTimePlay = true;
            }
            else if (localStorage[showTips] == 0) {
                localStorage[playsCounterLS]++;
                return PlayerServices.firstTimePlay = false;
            }
            else {
                localStorage[playsCounterLS]++;
                return PlayerServices.firstTimePlay = true;
            }
        }
    };


    PlayerServices.getScrollY = function (index) {
        return PlayerServices.scrollY;
    };

    return PlayerServices;
}]);
