nodspot.controller('PlayerCtrl', ['$scope', '$window', '$rootScope', 'ReleasesServices', 'PlayerServices', 'FavouritesServices', 'EventsConstants', 'GenresServices', 'ArtistServices', 'SearchServices', 'LastfmServices', 'YoutubeServices', function ($scope, $window, $rootScope, ReleasesServices, PlayerServices, FavouritesServices, EventsConstants, GenresServices, ArtistServices, SearchServices, LastfmServices, YoutubeServices)
{

    var startFrom,
        myWindow = angular.element($window);

    $scope.playerVisibility = false;
    $scope.favouriteBtnVisibility = false;
    $scope.playerClass = '';
    $scope.playlist = [];

    //store currently playing release info
    $scope.currentlyPlaying =
    {
        state: 'unfavourited'
    };

    $scope.collapseFavouriteBtn = function ()
    {
        $scope.favouriteBtnVisibility = false;
    };


    $scope.expandFavouriteBtn = function ()
    {
        $scope.favouriteBtnVisibility = true;
    };


    //redirect user to the 3rd party website that allows them to download this video
    $scope.downloadVideo = function ($videoId, event)
    {
        event.stopPropagation();
        window.location.target = '_blank';
        window.open('http://convert2mp3.net/c-mp4.php?url=http://convert2mp3.net/share.php?url=https://www.youtube.com/watch?v=' + $videoId, '_blank');
    };


    $scope.playTopTracks = function (artistName, event)
    {
        event.stopPropagation();

        ArtistServices.getTopTracks(artistName).then(function (playlistIds) {
            PlayerServices.loadPlaylist(playlistIds, 0);
        });
    };


    $scope.playTagsTopTracks = function (tagName)
    {
        LastfmServices.getTagsTopTracksVideos(tagName).then(function (videos) {
            PlayerServices.loadPlaylist(videos, 0);
        });
    };


    //if video does not exist on youtube anymore, remove it from user's playlist
    $scope.isValidVideo = function (currentTrackIndex)
    {
        var videoId = $scope.playlist[currentTrackIndex].id.videoId;

        if (SearchServices.searchSource == SearchServices.searchSources.userPlaylist)
        {
            YoutubeServices.isValidVideo(videoId).then(function (isValid)
            {
                if (!isValid)
                {
                    FavouritesServices.removeTrackFromPlaylist(videoId, $scope.currentlyPlaying.playlistId);

                    //remove a non-existing video from scope's playlists
                    $scope.playlist.splice(currentTrackIndex, 1);

                    //increase currently playing tracks index
                    PlayerServices.currentlyPlaying.track++;
                    PlayerServices.loadPlaylist(YoutubeServices.returnedVideos, PlayerServices.currentlyPlaying.track)

                    //updates the URL hash to reflect the real tracks URL
                    PlayerServices.updateHash();
                }
            });
        }
    };


    $scope.highlightTrack = function (index)
    {
        if ($scope.playlist)
        {
            angular.forEach($scope.playlist, function (track)
            {
                track.state = undefined;
            });

            $scope.playlist[index].state = 'active';
        }
    };


    $scope.playTrack = function (index)
    {
        PlayerServices.playTrack(index);
    };


    //once "add to playlist" is clicked, capture the tracks info and retrieve playlist ids this track belongs to.
    $scope.captureTrackInfo = function (index, trackId, trackTitle, artistName, event)
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
                caption = 'Listen to ' + PlayerServices.currentlyPlaying.title + ' album ' + PlayerServices.currentlyPlaying.albumName + ' containing ' + $scope.playlistIds.length + ' tracks at nodspot.com.';
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


    //currently playing track/release metadata
    $scope.$watchCollection(PlayerServices.getCurrentlyPlaying, function (newCurrentlyPlaying, oldCurrentlyPlaying)
    {

        try {
            var currentTrackIndex = PlayerServices.currentlyPlaying.track;

            try {
                $scope.highlightTrack(currentTrackIndex);
            } catch (e) {}


            //do not request to get similar artists if the artistName does not change
            if (newCurrentlyPlaying.artistName != oldCurrentlyPlaying.artistName) {
                PlayerServices.currentlyPlaying.artistName = $scope.playlist[currentTrackIndex].artistName;
                ReleasesServices.findAlbums($scope.playlist[currentTrackIndex].artistName);
                ArtistServices.getSimilar($scope.playlist[currentTrackIndex].artistName);
            }

            $scope.isValidVideo(currentTrackIndex);

        }
        catch (e) {};
    });

    $scope.$on(EventsConstants.trackChanged, function ()
    {
        var currentTrackIndex = PlayerServices.currentlyPlaying.track;
        $scope.highlightTrack(currentTrackIndex);

        //update currentlyPlaying track's title so that it can be displayed in the UI - under the player.
        $scope.currentlyPlaying = PlayerServices.currentlyPlaying;
        $scope.currentlyPlaying.title = $scope.playlist[currentTrackIndex].snippet.title;
        $scope.currentlyPlaying.artistName = $scope.playlist[currentTrackIndex].artistName; //for top tracks btn
    });


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


    $scope.$watch(PlayerServices.getPlayerVisibility, function (newValue, oldValue)
    {
        $scope.playerVisibility = PlayerServices.getPlayerVisibility();
    });


    $scope.$watchCollection(YoutubeServices.getReturnedVideos, function (newValue, oldValue)
    {
        $scope.playlist = PlayerServices.removeEmptyItemsFromArray(YoutubeServices.getReturnedVideos());
        SearchServices.collapseProgressBar();
    });


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