nodspot.controller('ReleasesCtrl', ['$scope', 'ReleasesServices', 'EventsConstants', 'SearchServices', 'PlayerServices', function ($scope, ReleasesServices, EventsConstants, SearchServices, PlayerServices) {

    //show/hide releases sidebar
    $scope.sidebarVisibility = false;
    $scope.releasesVisibility = true;
    $scope.releases = undefined;
    $scope.searchType = undefined;
    $scope.releaseId = undefined;

    $scope.collapseReleases = function () {
        $scope.releasesVisibility = false;
    };

    $scope.expandReleases = function () {
        $scope.releasesVisibility = true;
    };

    $scope.collapseSidebar = function () {
        $scope.sidebarVisibility = false;
    };

    $scope.expandSidebar = function () {
        $scope.sidebarVisibility = true;
    };

    $scope.playRelease = function (releaseId, releaseType) {
        PlayerServices.currentlyPlaying.track = 0;

        //if coming from surprise me, the searchSource should be persisted so that correct url is constructed
        if (SearchServices.searchSource != SearchServices.searchSources.surpriseMe) {
            SearchServices.searchSource = SearchServices.searchSources.userInput;
        }

        ReleasesServices.playRelease(releaseId, releaseType);
    };

    //@@@@@@ WATCHERS

    //when releases are returned, start playing
    $scope.$on(EventsConstants.releasesReturned, function (event, releases) {
        $scope.releases = releases;

        $scope.expandSidebar();

        $scope.releases = ReleasesServices.generateThumbnails('title', releases);

        if (SearchServices.hash.releaseId != '') {
            $scope.releaseId = SearchServices.hash.releaseId;
        } else if (SearchServices.surprise.releaseId != '') {
            $scope.releaseId = SearchServices.surprise.releaseId;
        } else {
            $scope.releaseId = releases[0].id;
            $scope.searchType = releases[0].type;
        }

        $scope.searchType = ReleasesServices.getReleaseTypeById($scope.releaseId)
        ReleasesServices.playRelease($scope.releaseId, $scope.searchType);
    });

    $scope.$on(EventsConstants.similarArtistsReturned, function () {
        $scope.expandSidebar();
    });

    $scope.$watch(ReleasesServices.getReleases, function (newValue, oldValue) {
        $scope.releases = ReleasesServices.getReleases();
        if ($scope.releases.length > 0) {
            $scope.expandReleases();
        } else {
            $scope.collapseReleases();
        }
    });

}]);