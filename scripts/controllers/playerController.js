nodspot.controller('PlayerCtrl', ['$scope', '$window', '$rootScope', 'ReleasesServices', 'PlayerServices', 'FavouritesServices', 'EventsConstants', 'GenresServices', 'ArtistServices', 'SearchServices', 'LastfmServices', 'YoutubeServices', function ($scope, $window, $rootScope, ReleasesServices, PlayerServices, FavouritesServices, EventsConstants, GenresServices, ArtistServices, SearchServices, LastfmServices, YoutubeServices)
{

    var startFrom,
        myWindow = angular.element($window);

    $scope.playerVisibility = false;
    $scope.favouriteBtnVisibility = false;
    $scope.playerClass = '';

    //store currently playing release info
    $scope.currentlyPlaying =
    {
        state: 'unfavourited'
    };


    $scope.playlist = [];
    $scope.playlistIds = [];


    //build a playlist ids array from youtube's returned videos and load them to yt player
    $scope.$on(EventsConstants.playlistReady, function (event, returnedVideos)
    {
        $scope.playlist = PlayerServices.removeEmptyItemsFromArray(returnedVideos);
        $scope.playerVisibility = true;
        $scope.playlistIds = []; //clear playlist ids
        GenresServices.stylesVisibility = false;

        angular.forEach($scope.playlist, function (track, index)
        {
            $scope.playlistIds.push(track.id.videoId);
        });

        $scope.playPlaylist();
        $scope.highlightTrack($scope.getStartFrom());
        $scope.isReleaseFavourite($scope.currentlyPlaying.releaseId);
        SearchServices.collapseProgressBar();
    });


    $scope.collapseFavouriteBtn = function ()
    {
        $scope.favouriteBtnVisibility = false;
    };


    $scope.expandFavouriteBtn = function ()
    {
        $scope.favouriteBtnVisibility = true;
    };


    //get the track where we have to start playing the playlist from
    $scope.getStartFrom = function ()
    {
        if ($scope.playlist.length >= PlayerServices.currentlyPlaying.track) {
            startFrom = PlayerServices.currentlyPlaying.track;
        }
        else {
            startFrom = 0;
        }

        return startFrom;
    };


    //redirect user to the 3rd party website that allows them to download this video
    $scope.downloadVideo = function ($videoId)
    {
        event.stopPropagation();
        window.location.target = '_blank';
        window.open('http://convert2mp3.net/c-mp4.php?url=http://convert2mp3.net/share.php?url=https://www.youtube.com/watch?v=' + $videoId, '_blank');
    };


    $scope.playPlaylist = function ()
    {
        var interval = setInterval(function ()
        {
            try
            {
                if (ytPlayer.loadPlaylist != undefined)
                {
                    ytPlayer.loadPlaylist($scope.playlistIds, $scope.getStartFrom());
                    clearInterval(interval);
                }
            }
            catch (e) { }
        }, 120);
    };


    $scope.playTopTracks = function (artistName)
    {
        event.stopPropagation();
        ArtistServices.getTopTracks(artistName);
    };


    $scope.playTagsTopTracks = function (tagName)
    {
        LastfmServices.playTagsTopTracks(tagName);
    };


    //currently playing track/release metadata
    $scope.$watchCollection(PlayerServices.getCurrentlyPlaying, function (newCurrentlyPlaying, oldCurrentlyPlaying)
    {
        try
        {
            var currentTrackIndex = $scope.currentlyPlaying.track;
            $scope.currentlyPlaying = newCurrentlyPlaying;
            $scope.currentlyPlaying.artistName = $scope.playlist[currentTrackIndex].artistName; //for top tracks btn
            $scope.isValidVideo(currentTrackIndex);
            $scope.highlightTrack(currentTrackIndex);

            //do not request to get similar artists if the artistName does not change
            if (newCurrentlyPlaying.artistName != oldCurrentlyPlaying.artistName)
            {
                ArtistServices.getSimilar(newCurrentlyPlaying.artistName);
            }

        }
        catch (e) {};
    });


    //if video is not valid, remove it from user's playlist
    $scope.isValidVideo = function (currentTrackIndex)
    {
        if (SearchServices.searchSource == SearchServices.searchSources.userPlaylist)
        {
            YoutubeServices.isValidVideo($scope.playlistIds[currentTrackIndex]).then(function (isValid)
            {
                if (!isValid)
                {
                    FavouritesServices.removeTrackFromPlaylist($scope.playlistIds[currentTrackIndex], $scope.currentlyPlaying.playlistId);

                    //remove a non-existing video from scope's playlists
                    $scope.playlist.splice(currentTrackIndex, 1);
                    $scope.playlistIds.splice(currentTrackIndex, 1);

                    //increase currently playing tracks index
                    PlayerServices.currentlyPlaying.track++;
                    $scope.playPlaylist();

                    //updates the URL hash to reflect the real tracks URL
                    PlayerServices.updateHash();
                }
            });
        }
    };


    //favourite Services > favouriting an album when not logged in
    $scope.$on(EventsConstants.releaseFavourited, function ()
    {
        $scope.currentlyPlaying.state = 'favourited';
    });


    //listen for the search source change - if there is nothing to favourite, the favourite btn is collapsed
    $scope.$watch(SearchServices.getSearchSource, function ()
    {
        var searchSource = SearchServices.getSearchSource();

        if (searchSource == SearchServices.searchSources.tag || searchSource == SearchServices.searchSources.topTracks || searchSource == SearchServices.searchSources.directYoutube || searchSource == SearchServices.searchSources.userPlaylist)
        {
            $scope.collapseFavouriteBtn();
        }
        else {
            $scope.expandFavouriteBtn();
        }

        //hide toptracks btn for youtube searches
        $scope.topTracksBtnVisibility = (searchSource == SearchServices.searchSources.directYoutube) ? false : true;

    });


    //show player wrapper once the tag or suprise me has been clicked on the home page
    $scope.$on(EventsConstants.showPlayer, function (event)
    {
        $scope.playerVisibility = true;
    });


    $scope.highlightTrack = function (index)
    {
        if ($scope.playlist)
        {
            angular.forEach($scope.playlist, function (track)
            {
                track.state = undefined;
            });

            $scope.playlist[index].state = 'active';

            //update currentlyPlaying track's title so that it can be displayed in the UI - under the player.
            PlayerServices.currentlyPlaying.title = $scope.playlist[index].snippet.title;
        }
    };


    $scope.playTrack = function (index)
    {
        PlayerServices.playTrack(index);
        $scope.highlightTrack(index);
    };


    //once "add to playlist" is clicked, capture the tracks info and retrieve playlist ids this track belongs to.
    $scope.captureTrackInfo = function (index, trackId, trackTitle, artistName)
    {
        event.stopPropagation();
        FavouritesServices.fetchTracksPlaylists(trackId);
        FavouritesServices.trackId = trackId;
        FavouritesServices.trackIndex = index;
        FavouritesServices.trackTitle = encodeURIComponent(trackTitle);
        FavouritesServices.artistName = encodeURIComponent(artistName);
        $rootScope.$broadcast(EventsConstants.trackInfoCaptured);
    };


    $scope.addReleaseToFavourites = function (releaseTitle, artistName, releaseId, releaseYear, releaseType)
    {
        if ($scope.currentlyPlaying.state == 'unfavourited')
        {
            FavouritesServices.addReleaseToFavourites(releaseTitle, artistName, releaseId, releaseYear, releaseType, SearchServices.searchTerm).then(function () {
                $scope.isReleaseFavourite(releaseId);
            });
        }
        else {
            $scope.removeReleaseFromFavourites(releaseId);
        }
    };


    $scope.removeReleaseFromFavourites = function (releaseId)
    {
        FavouritesServices.removeReleaseFromFavourites(releaseId).then(function ()
        {
            $scope.isReleaseFavourite(releaseId);
        });
    };


    //share currently played release/playlist/favourite on FB
    $scope.share = function ()
    {
        var imgUrl = '',
            nodspotLogo = 'http://nodspot.com/images/logo75x75.png',
            caption = '';

        if (ArtistServices.artistImages.length > 0) {
            imgUrl = ArtistServices.artistImages[0].url;
        }
        else {
            imgUrl = nodspotLogo;
        }

        switch (SearchServices.searchSource)
        {
            case SearchServices.searchSources.surpriseMe:
            case SearchServices.searchSources.userInput:

            default:
            {
                caption = 'Listen to ' + PlayerServices.currentlyPlaying.title + ' album ' + PlayerServices.currentlyPlaying.releaseTitle + ' containing ' + $scope.playlistIds.length + ' tracks at nodspot.com.';
                break;
            }

            case SearchServices.searchSources.directYoutube:
            {
                caption = PlayerServices.currentlyPlaying.title + ' all tracks from youtube here at nodspot.com!';
                imgUrl = nodspotLogo;
                break;
            }

            case SearchServices.searchSources.topTracks:
            {
                caption = 'Listen to top tracks from ' + PlayerServices.currentlyPlaying.title + ' at nodspot.com!';
                imgUrl = nodspotLogo;
                break;
            }

            case SearchServices.searchSources.tag:
            {
                imgUrl = 'http://www.nodspot.com/' + GenresServices.imagesPath + PlayerServices.currentlyPlaying.title.replace(/ /g, '-') + '1.jpg';
                caption = 'Listen to ' + PlayerServices.currentlyPlaying.title + ' playlist, containing ' + $scope.playlistIds.length + ' tracks at nodspot.com.';
                break
            }
        }

        FB.ui(
            {
                method: 'feed',
                name: $scope.playlist[$scope.currentlyPlaying.track].snippet.title,
                caption: caption,
                link: location.href,
                picture: imgUrl,
                type: 'video'
            },
            function (response) { }
        );
    };


    $scope.isReleaseFavourite = function (releaseId)
    {
        if (releaseId)
        {
            FavouritesServices.isReleaseFavourite(releaseId).success(function (state)
            {
                if (state.length > 0)
                {
                    $scope.currentlyPlaying.state = "favourited";
                    $scope.currentlyPlaying.favouriteBtnTitle = "Unfavourite release";
                }
                else {
                    $scope.currentlyPlaying.state = "unfavourited";
                    $scope.currentlyPlaying.favouriteBtnTitle = "Favourite release";
                }
            });
        }
    };


    //react to keypresses
    myWindow.on('keypress', function (e)
    {
        if (e.target.localName != 'input')
        {
            if (e.which == 120)
            {               //x
                ytPlayer.nextVideo();
            }
            else if (e.which == 122)
            {        //z
                ytPlayer.previousVideo();
            }
            else if (e.which == 97)
            {         //a
                ytPlayer.seekTo(ytPlayer.getCurrentTime() + 40);
            }
        }
    });


    myWindow.on('scroll', function ()
    {
        PlayerServices.scrollY = $window.scrollY;
    });

}]);