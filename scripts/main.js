/**
 * Created by Mantvydas on 22/03/14.
 */

var nodspot = angular.module('nodspot', ['ngTouch']);

nodspot.constant('EventsConstants', {
    playlistReady: "playlistReady",
    releasesReturned: "releasesReturned",
    similarArtistsReturned: "similarArtistsReturned",
    artistBioReturned: "artistBioReturned",
    trackInfoCaptured: "trackInfoCaptured",
    releaseFavourited: "releaseFavourited",
    mainCtrlClicked: "mainCtrlClicked",
    requestStarted: "requestStarted",
    showPlayer: "showPlayer"
});

nodspot.constant('MessagesConstants', {
    deletePlaylist: "You're going to delete this playlist. This action cannot be undone."
});

nodspot.constant('LoginConstants', {
    fbLogin: "Sign in with Facebook",
    fbLogout: "Sign out from Facebook"
});

nodspot.constant('ApiConstants', {
    baseUrlNodspot: "apis/public/index.php/"
});

nodspot.controller('MainCtrl', ['$scope', 'EventsConstants', '$location', 'ReleasesServices', 'FacebookServices', 'FavouritesServices', 'PlayerServices', 'SearchServices', 'ArtistServices', 'LastfmServices',
    function ($scope, EventsConstants, $location, ReleasesServices, FacebookServices, FavouritesServices, PlayerServices, SearchServices, ArtistServices, LastfmServices) {

        //var host = $location.host(),
        //    newUrl = '';
        //
        //
        ////dirty hack: if the URL contains www, trim it out - for some reason, google won't accept API calls from www
        //if (host.indexOf('www') > -1) {
        //    newUrl = $location.absUrl().replace('www.', '');
        //    window.document.location = newUrl;
        //}

        $scope.appBackground = "mainBackground";
        $scope.progressBarVisibility = true;

        FacebookServices.isLive();

        //change background image once the playlist is ready
        $scope.$on(EventsConstants.playlistReady, function () {
            $scope.appBackground = "searchBackground";
            $scope.progressBarVisibility = false;
        });

        //show/hide the progress bar
        $scope.$watch(SearchServices.getProgressBarVisibility, function (newValue, oldValue) {
            $scope.progressBarVisibility = SearchServices.getProgressBarVisibility();
        });


        $scope.$on(EventsConstants.showPlayer, function (event) {
            $scope.appBackground = "searchBackground";
        });


        $scope.closeOverlays = function () {
            $scope.$broadcast(EventsConstants.mainCtrlClicked);
        };


        $scope.newUrlParser = function () {
            var urlParams = $location.search();

            if (urlParams.term != undefined || urlParams.term == '') {
                SearchServices.searchTerm = urlParams.term.replace(/-/g, ' ');
            }

            PlayerServices.currentlyPlaying.track = urlParams.track;

            switch (urlParams.type) {
                case 'search': {
                    try {
                        SearchServices.searchType = urlParams.searchType;
                        SearchServices.hash.releaseId = urlParams.id;
                        SearchServices.searchSource = SearchServices.searchSources.userInput;
                        ReleasesServices.getAllReleases(SearchServices.searchTerm, SearchServices.searchType);
                    } catch (e) {}
                    break;
                }
                case 'playlist': {
                    try {
                        FavouritesServices.playPlaylist(urlParams.id);
                    } catch (e) {}
                    break;
                }
                case 'surprise':{
                    try {
                        ReleasesServices.getReleasesByStyle(urlParams.style, urlParams.page, urlParams.id);
                    } catch (e) {}
                    break;
                }
                case 'youtube':{
                    try {
                        ReleasesServices.getVideosFromYoutube(SearchServices.searchTerm, 20);
                        PlayerServices.currentlyPlaying.title = SearchServices.searchTerm;
                    } catch (e) {}
                    break;
                }
                case 'topTracks':{
                    try {
                        SearchServices.searchSource = SearchServices.searchSources.topTracks;
                        PlayerServices.currentlyPlaying.title = SearchServices.searchTerm;
                        ArtistServices.getTopTracks(SearchServices.searchTerm);
                        ArtistServices.getSimilar(SearchServices.searchTerm);
                    } catch (e) {}
                    break;
                }
                case 'tag':{
                    try {
                        SearchServices.searchSource = SearchServices.searchSources.tag;
                        PlayerServices.currentlyPlaying.title = SearchServices.searchTerm;
                        LastfmServices.playTagsTopTracks(SearchServices.searchTerm);
                    } catch (e) {}
                    break;
                }
            }

            //log searches that have searchTerm
            if (SearchServices.searchTerm != '') {
                SearchServices.logSearch(SearchServices.searchTerm, urlParams.type);
            }
        };

        $scope.newUrlParser();
}]);


