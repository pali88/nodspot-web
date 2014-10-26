nodspot.controller('SearchCtrl',
    [
        '$scope',
        'ReleasesServices',
        'ArtistServices',
        'GenresServices',
        'SearchServices',
        'PlayerServices',
        'LastfmServices',
        '$window',
        '$http',
        'SpotifyServices',
        function (
            $scope,
            ReleasesServices,
            ArtistServices,
            GenresServices,
            SearchServices,
            PlayerServices,
            LastfmServices,
            $window,
            $http,
            SpotifyServices)
{

    //visibility
    $scope.surpriseMeVisibility = false;
    $scope.suggestionsVisibility = false;
    $scope.tagBtnVisibility = true;
    $scope.stylesDropdownVisibility = false;

    $scope.searchTerm = '';
    $scope.styles = GenresServices.getStyles();
    $scope.searchInputClass = '';
    $scope.suggestions = [];
    $scope.highlightedSuggestion = -1;

    $scope.handleKeypress = function (searchTerm, searchType, event)
    {
        $scope.searchSubmitted = false;

        if (event.which === 13 && searchTerm != '')
        {
            $scope.search(searchTerm, searchType, event);
            $scope.searchSubmitted = true;
        }
        else {
            //start retrieving suggestions only after the second character
            if (searchTerm.length > 1)
            {
                ReleasesServices.getSuggestions(searchTerm).success(function (suggestions)
                {
                    $scope.suggestions = suggestions[1];

                    angular.forEach($scope.suggestions, function (suggestion, i)
                    {
                        $scope.suggestions[i] =
                        {
                            searchTerm: suggestion,
                            state: undefined
                        }
                    });

                    try
                    {
                        if ($scope.suggestions.length > 0 && $scope.searchSubmitted == false)
                        {
                            $scope.expandSuggestions();
                        }
                    }
                    catch (e) {}
                });
            }
        }
    };


    $scope.getSearchTerm = function ()
    {
        return $scope.searchTerm;
    };


    //listen for the searchTerm changes and do something about it
    $scope.$watch($scope.getSearchTerm, function (newValue, oldValue)
    {
        $scope.processSearchTerm();
    });


    //check if the searchTerm is empty and if yes, hide topTrack, topTag, etc buttons in the suggestions dropdown.
    $scope.processSearchTerm = function ()
    {
        var words = $scope.searchTerm.split(' ').length; //find all gaps

        //if empty, hide suggestion buttons
        if ($scope.searchTerm == '')
        {
            $scope.suggestionButtonsVisibility = false;
        }
        else {
            $scope.suggestionButtonsVisibility = true;
        }

        //$scope.tagBtnVisibility = ($scope.tagBtnVisibility > 5) ? false : true;
    };


    $scope.playTagsTopTracks = function (tagName)
    {
        LastfmServices.getTagsTopTracksVideos(tagName).then(function (videos)
        {
            PlayerServices.loadPlaylist(videos, 0);
        });
        $scope.searchSubmitted = true;
    };


    $scope.playTopTracks = function (searchTerm)
    {
        ArtistServices.getTopTracks(searchTerm).then(function (videos) {
            PlayerServices.loadPlaylist(videos, 0);
        });
        $scope.searchSubmitted = true;
    };


    $scope.getVideosFromYoutube = function (searchTerm)
    {
        ReleasesServices.getVideosFromYoutube(searchTerm, 40).then(function (videos) {
            PlayerServices.loadPlaylist(videos, 0);
        });

        SearchServices.logSearch(searchTerm, 'youtube');
        $scope.searchSubmitted = true;
    };


    $scope.search = function (searchTerm, searchType, event)
    {
        $scope.searchSubmitted = true;
        $scope.collapseSuggestions();

        SearchServices.searchSource = SearchServices.searchSources.userInput;

        ReleasesServices.getVideosFromYoutube(searchTerm, 40).then(function (videos) {
            PlayerServices.loadPlaylist(videos, 0);
        });


        //ReleasesServices.getAllReleases(searchTerm, searchType);
        ReleasesServices.findAlbums(searchTerm).then(function (res)
        {
            ReleasesServices.returnedReleases = res.albums.items;
            ReleasesServices.returnedReleases.searchTerm = searchTerm;
            console.log(res);
        });

        SearchServices.logSearch(searchTerm, 'search');
        PlayerServices.resetCurrentlyPlaying();
    };


    $scope.expandSuggestions = function ()
    {
        $scope.suggestionsVisibility = ($scope.suggestions.length > 0) ? true : false;
    };


    $scope.collapseSuggestions = function ()
    {
        $scope.suggestionsVisibility = false;
    };


    $scope.toggleStylesDropdown = function ()
    {
        if ($scope.stylesDropdownVisibility == false)
        {
            $scope.stylesDropdownVisibility = true;
        }
        else {
            $scope.collapseSurpriseDropdown();
        }
    };


    $scope.collapseSurpriseDropdown = function ()
    {
        $scope.stylesDropdownVisibility = false;
    };


    $scope.getReleasesByStyle = function (style)
    {
        $scope.collapseSurpriseDropdown();
        ReleasesServices.getReleasesByStyle(style);
    };


    //only make changes if the new value is different from the oldvalue
    $scope.$watch(GenresServices.isVisible, function ()
    {
        if (GenresServices.isVisible() == true)
        {
            $scope.surpriseMeVisibility = false;
            $scope.searchInputClass = 'docked';
        }
        else {
            $scope.surpriseMeVisibility = true;
            $scope.searchInputClass = '';
        }
    });

}]);