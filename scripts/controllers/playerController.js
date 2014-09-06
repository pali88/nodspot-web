nodspot.controller('PlayerCtrl', ['$scope', '$window', '$rootScope', 'ReleasesServices', 'PlayerServices', 'FavouritesServices', 'EventsConstants', 'GenresServices', 'ArtistServices', 'SearchServices', 'LastfmServices', 'YoutubeServices', function ($scope, $window, $rootScope, ReleasesServices, PlayerServices, FavouritesServices, EventsConstants, GenresServices, ArtistServices, SearchServices, LastfmServices, YoutubeServices) {

    var startFrom,
        myWindow = angular.element($window);

    $scope.playerVisibility = false;
    $scope.favouriteBtnVisibility = false;
    $scope.playerClass = '';

    //store currently playing release info
    $scope.currentlyPlaying = {
        state: 'unfavourited'
    };

    $scope.playlist = undefined;
    $scope.playlistIds = undefined;

    //build a playlist ids array from youtube's returned videos and load them to yt player
    $scope.$on(EventsConstants.playlistReady, function (event, returnedVideos) {
        $scope.playlist = PlayerServices.removeEmptyItemsFromArray(returnedVideos);
        $scope.playerVisibility = true;
        $scope.playlistIds = [];
        GenresServices.stylesVisibility = false;

        angular.forEach($scope.playlist, function (track, index) {
            $scope.playlistIds.push(track.id.videoId);
        });

        $scope.playPlaylist();
        $scope.highlightTrack($scope.getStartFrom());
        $scope.isReleaseFavourite($scope.currentlyPlaying.releaseId);
        SearchServices.collapseProgressBar();
    });

    $scope.collapseFavouriteBtn = function () {
        $scope.favouriteBtnVisibility = false;
    };

    $scope.expandFavouriteBtn = function () {
        $scope.favouriteBtnVisibility = true;
    };

    //get the track where we have to start playing the playlist from
    $scope.getStartFrom = function () {
        if ($scope.playlist.length >= PlayerServices.currentlyPlaying.track) {
            startFrom = PlayerServices.currentlyPlaying.track;
        } else {
            startFrom = 0;
        }

        return startFrom;
    };

    $scope.playPlaylist = function () {
        var interval = setInterval(function () {
            try {
                if (ytPlayer.loadPlaylist != undefined) {
                    ytPlayer.loadPlaylist($scope.playlistIds, $scope.getStartFrom());
                    clearInterval(interval);
                }
            } catch (e) { }
        }, 120);
    };

    $scope.playTopTracks = function () {
        ArtistServices.getTopTracks($scope.currentlyPlaying.artistName);
    };

    $scope.playTagsTopTracks = function (tagName) {
        var playlist = [];
        LastfmServices.getTagsTopTracks(tagName).then(function (topTracks) {
            playlist = LastfmServices.lastfmPlaylistToNodspot(undefined, topTracks, 'tag');
            YoutubeServices.findVideos(playlist);
        });
    };

    //currently playing track/release metadata
    $scope.$watchCollection(PlayerServices.getCurrentlyPlaying, function () {
        $scope.currentlyPlaying = PlayerServices.getCurrentlyPlaying();
        $scope.highlightTrack($scope.currentlyPlaying.track);
    });

    //favourite Services > favouriting an album when not logged in
    $scope.$on(EventsConstants.releaseFavourited, function () {
        $scope.currentlyPlaying.state = 'favourited';
    });

    //listen for the search source change - if there is nothing to favourite, the favourite btn is collapsed
    $scope.$watch(SearchServices.getSearchSource, function () {
        var searchSource = SearchServices.getSearchSource();

        if (searchSource == SearchServices.searchSources.directYoutube || searchSource == SearchServices.searchSources.tag ||
            searchSource == SearchServices.searchSources.topTracks || searchSource == SearchServices.searchSources.userPlaylist) {
            $scope.collapseFavouriteBtn();
        } else {
            $scope.expandFavouriteBtn();
        }
    });

    //show player wrapper once the tag or suprise me has been clicked on the home page
    $scope.$on(EventsConstants.showPlayer, function (event) {
        $scope.playerVisibility = true;
    });

    $scope.highlightTrack = function (index) {
        if ($scope.playlist) {
            angular.forEach($scope.playlist, function (track) {
                track.state = undefined;
            });
            $scope.playlist[index].state = 'active';

            //update currentlyPlaying track's title so that it can be displayed in the UI - under the player.
            PlayerServices.currentlyPlaying.title = $scope.playlist[index].snippet.title;
        }
    };

    $scope.playTrack = function (index) {
        PlayerServices.playTrack(index);
        $scope.highlightTrack(index);
    };

    //once "add to playlist" is clicked, capture the tracks info and retrieve playlist ids this track belongs to.
    $scope.captureTrackInfo = function (index, trackId, trackTitle) {
        FavouritesServices.fetchTracksPlaylists(trackId);
        FavouritesServices.trackId = trackId;
        FavouritesServices.trackIndex = index;
        FavouritesServices.trackTitle = encodeURIComponent(trackTitle);
        $rootScope.$broadcast(EventsConstants.trackInfoCaptured);
    };

    $scope.addReleaseToFavourites = function (releaseTitle, artistName, releaseId, releaseYear, searchType) {
        if ($scope.currentlyPlaying.state == 'unfavourited') {
            FavouritesServices.addReleaseToFavourites(releaseTitle, artistName, releaseId, releaseYear, searchType, SearchServices.searchTerm).then(function () {
                $scope.isReleaseFavourite(releaseId);
//                $scope.currentlyPlaying.state = "favourited";
            });
        } else {
            $scope.removeReleaseFromFavourites(releaseId);
        }
    };

    $scope.removeReleaseFromFavourites = function (releaseId) {
        FavouritesServices.removeReleaseFromFavourites(releaseId).success(function () {
//            $scope.currentlyPlaying.state = "unfavourited";
            $scope.isReleaseFavourite(releaseId);
        });
    };

    //share currently played release/playlist/favourite on FB
    $scope.share = function () {
        var imgUrl = '',
            nodspotLogo = 'http://nodspot.com/images/logo75x75.png',
            caption = '';

        if (ArtistServices.artistImages.length > 0) {
            imgUrl = ArtistServices.artistImages[0].url;
        } else {
            imgUrl = nodspotLogo;
        }

        switch (SearchServices.searchSource) {
            case SearchServices.searchSources.surpriseMe:
            case SearchServices.searchSources.userInput:
            default: {
                caption = 'Listen to ' + PlayerServices.currentlyPlaying.title + ' album ' + PlayerServices.currentlyPlaying.releaseTitle + ' containing ' + $scope.playlistIds.length + ' tracks at nodspot.com.';
                break;
            }
            case SearchServices.searchSources.directYoutube: {
                caption = PlayerServices.currentlyPlaying.title + 'all tracks from youtube here at nodspot.com!';
                imgUrl = nodspotLogo;
                break;
            }
            case SearchServices.searchSources.topTracks: {
                caption = 'Listen to top tracks from ' + PlayerServices.currentlyPlaying.title + ' at nodspot.com!';

                break;
            }
            case SearchServices.searchSources.tag: {
                imgUrl = 'http://www.nodspot.com/' + GenresServices.imagesPath + PlayerServices.currentlyPlaying.title.replace(/ /g, '-') + '1.jpg';
                caption = 'Listen to ' + PlayerServices.currentlyPlaying.title + ' playlist, containing ' + $scope.playlistIds.length + ' tracks at nodspot.com.'
                break
            }
        }

        FB.ui({
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

    $scope.isReleaseFavourite = function (releaseId) {
        FavouritesServices.isReleaseFavourite(releaseId).success(function (state) {
            if (state == 1) {
                $scope.currentlyPlaying.state = "favourited";
                $scope.currentlyPlaying.favouriteBtnTitle = "Unfavourite release";
            } else {
                $scope.currentlyPlaying.state = "unfavourited";
                $scope.currentlyPlaying.favouriteBtnTitle = "Favourite release";
            }
        });
    };

    //react to keypresses
    myWindow.on('keypress', function (e) {
        if (e.target.localName != 'input') {
            if (e.which == 120) { //x
                ytPlayer.nextVideo();
            } else if (e.which == 122) { //z
                ytPlayer.previousVideo();
            } else if (e.which == 97) { //a
                ytPlayer.seekTo(ytPlayer.getCurrentTime() + 40);
            }
        }
    });

    //change player's class on scroll
    myWindow.on('scroll', function () {
//       if ($window.scrollY > 500) {
//           $scope.playerClass = 'dockedplayer';
//       } else {
//           $scope.playerClass = 'not';
//       }
    });

}]);