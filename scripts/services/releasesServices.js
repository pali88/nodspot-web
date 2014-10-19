nodspot.factory('ReleasesServices', ['$http', '$rootScope', 'YoutubeServices', 'EventsConstants', 'GenresServices', 'ArtistServices', 'SearchServices', 'PlayerServices', function ($http, $rootScope, YoutubeServices, EventsConstants, GenresServices, ArtistServices, SearchServices, PlayerServices)
{

    var baseUrl = 'releases.php?action=',

        ReleasesServices =
        {
            returnedReleases: [] //returned releases are stored here
        },
        returnedReleasesCounter = 0;

    ReleasesServices.getReleases = function ()
    {
        return ReleasesServices.returnedReleases;
    };

    ReleasesServices.getSuggestions = function (searchTerm)
    {
        return $http.get(baseUrl + 'yt&term=' + searchTerm);
    };

    //generate initials and colour for the release thumbnail
    ReleasesServices.generateThumbnails = function (propertyForInitials, obj)
    {
        var colour = 0,
            colours =
            {
                0: 'acc1',
                1: 'acc2',
                2: 'acc3'
            },
            initials = '',
            tempObj = obj;

        //workout release colour and initials
        angular.forEach(tempObj, function (item, i)
        {
            colour = Math.floor(Math.random() * 3);
            item.colour = colours[colour];
            initials = item[propertyForInitials].split(' ');
            item.initials = initials[0].substr(0,1);
        });

        return tempObj;
    };

    ReleasesServices.getAllReleases = function (searchTerm, searchType)
    {
        var url,
            newSearchType;

        SearchServices.expandProgressBar();
        GenresServices.stylesVisibility = false;
        newSearchType = ReleasesServices.workoutSearchType(searchType);
        url = ReleasesServices.constructUrl(searchTerm, newSearchType);

        PlayerServices.currentlyPlaying.searchType = newSearchType;

        if (PlayerServices.currentlyPlaying.searchTerm == '')
        {
            PlayerServices.currentlyPlaying.searchTerm = searchTerm;
        }

        if (SearchServices.searchAttempt < 3)
        {
            $http.get(baseUrl + 'getAllReleases&' + url)
                .success(function (releases)
                {
                    ReleasesServices.returnedReleases = ReleasesServices.cleanUpReleases(releases.results);
                    returnedReleasesCounter = ReleasesServices.returnedReleases.length;

                    //if more than 5 releases returned, broadcast them. ReleasesCtrl will be waiting.
                    if (returnedReleasesCounter > 5)
                    {
                        ReleasesServices.broadcast(EventsConstants.releasesReturned, ReleasesServices.returnedReleases);
                        SearchServices.searchTerm = searchTerm;
                        SearchServices.searchType = newSearchType;
                        SearchServices.searchAttempt = 0;
                    }

                    //if we did not get 5 masters, ask for all releases.
                    else {
                        ReleasesServices.getAllReleases(searchTerm, "");
                    }
                });
            SearchServices.searchAttempt++;
        }
        //if nothing is found on the 5th attempt, grab videos from youtube.
        else if (SearchServices.searchAttempt >= 3)
        {
            ReleasesServices.getVideosFromYoutube(searchTerm, 40);
        }
    };

    //construct url for retrieving releases
    ReleasesServices.constructUrl = function (searchTerm, newSearchType)
    {
        var perPage = 50, url = '';

        switch (newSearchType)
        {
            case "masters":
                url = 'type=' + newSearchType + '&artist=' + searchTerm + "&per_page=" + perPage;
                break;

            case "releases":
                url = 'type=' + newSearchType + '&artist=' + searchTerm + "&per_page=" + perPage;
                break;

            case "simple":
                url = 'type=' + newSearchType + "&q=" + searchTerm + "&per_page=" + perPage;
                break;
        }

        return url;
    };

    //update ns_saved_albums set type = 'releases' where type = 'release'


    //work out what should the search type be for the next search.
    ReleasesServices.workoutSearchType = function (searchType)
    {
        var newSearchType = '';

            if (SearchServices.searchAttempt <= 3 && SearchServices.searchAttempt < 5)
            {
                switch (SearchServices.searchAttempt)
                {
                    case 0 :
                        newSearchType = "masters";
                        break;

                    case 1 :
                        newSearchType = "releases";
                        break;

                    case 2 :
                        newSearchType = "simple";
                        break;
                }
            }

        return newSearchType;
    };


    //filters out labels, also removes ([0-9]) from the artist name
    ReleasesServices.cleanUpReleases = function (releases)
    {
        var cleanReleases = [];

        angular.forEach(releases, function (release, i) {
            if (release.type == 'master' || release.type == 'release')
            {
            //\([0-9]+\)
                release.title = release.title.replace(/\([0-9]+\)/g, '').replace('  ', ' ');
                cleanReleases.push(release);
            }
        });
        return cleanReleases;
    };


    ReleasesServices.getReleaseTypeById = function (releaseId)
    {
        var searchType;

        SearchServices.expandProgressBar();

        for (var i = 0; i < ReleasesServices.returnedReleases.length; i++)
        {
            if (ReleasesServices.returnedReleases[i].id == releaseId)
            {
                searchType = ReleasesServices.returnedReleases[i].type;
                break;
            }
        }

        //if release was removed from the interwebs, just use the searchType that came with the url.
        if (searchType == undefined)
        {
            searchType = SearchServices.searchType;
        }

        return searchType;
    };


    ReleasesServices.getVideosFromYoutube = function (searchTerm, maxResults)
    {
        SearchServices.expandProgressBar();
        YoutubeServices.findVideos(searchTerm, maxResults);

        SearchServices.searchSource = SearchServices.searchSources.directYoutube;
        SearchServices.searchTerm = searchTerm;
        SearchServices.searchAttempt = 0;

        PlayerServices.currentlyPlaying.artistName = searchTerm;
        PlayerServices.currentlyPlaying.releaseTitle = 'Tracks straight from youtube';
        PlayerServices.currentlyPlaying.releaseYear = 'all good :)';

    };


    ReleasesServices.getReleasesByStyle = function (style, pageNumber, releaseId)
    {
        var tmpPageNumber = 0,
            randomReleaseIndex = 0;

        SearchServices.expandProgressBar();
        SearchServices.logSearch(style, 'surprise');
        PlayerServices.resetCurrentlyPlaying();
        SearchServices.searchSource = SearchServices.searchSources.surpriseMe;

        $http.get(
            baseUrl
            + 'getAllReleasesByStyle&style='
            + encodeURIComponent(style))
            .success(function (releases)
            {
                if (pageNumber == 0 || pageNumber == undefined)
                {
                    //generate random page number - we will retrieve releases from that page for that selected genre
                    tmpPageNumber = Math.floor((Math.random() * releases.pagination.pages) + 1);
                } else {
                    tmpPageNumber = pageNumber;
                }

                SearchServices.surprise.page = tmpPageNumber;

                $http.get(
                    baseUrl
                    + 'getAllReleasesByStyle&style='
                    + encodeURIComponent(style)
                    + '&page=' + tmpPageNumber)
                    .then(function (returnedReleases)
                    {
                        randomReleaseIndex = Math.floor((Math.random() * returnedReleases.data.results.length) + 1);
                        SearchServices.surprise.style = style;

                        if (releaseId != undefined)
                        {
                            SearchServices.surprise.releaseId = releaseId;
                        } else {
                            SearchServices.surprise.releaseId = returnedReleases.data.results[randomReleaseIndex].id;
                            SearchServices.searchType = returnedReleases.data.results[randomReleaseIndex].type;
                        }

                        ReleasesServices.returnedReleases = returnedReleases.data.results;
                        ReleasesServices.broadcast(EventsConstants.releasesReturned, ReleasesServices.returnedReleases);
                        SearchServices.searchAttempt = 0;
                    });
            });
    };


    ReleasesServices.broadcast = function (eventName, object)
    {
        $rootScope.$broadcast(eventName, object);
    };


    ReleasesServices.getReleaseTracklist = function (releaseId, releaseType)
    {
        SearchServices.expandProgressBar();

        return $http.get(baseUrl
        + 'getReleaseById'
        + '&release_id='
        + releaseId
        + '&release_type='
        + releaseType + 's'
        );
    };


    ReleasesServices.playRelease = function (releaseId, releaseType)
    {
        SearchServices.expandProgressBar();

        ReleasesServices.getReleaseTracklist(releaseId, releaseType)
            .success(function (tracklist)
            {
                var friendlyTracklist = ReleasesServices.makeTracklistNodspotFriendly(tracklist);
                PlayerServices.currentlyPlaying.releaseId = releaseId;
                PlayerServices.currentlyPlaying.releaseType = releaseType;
                YoutubeServices.findVideos(friendlyTracklist);
                ReleasesServices.highlightRelease(releaseId);
            });
    };


    ReleasesServices.highlightRelease = function (releaseId)
    {
        angular.forEach(ReleasesServices.returnedReleases, function (release)
        {
            if (releaseId == release.id)
            {
                release.state = 'active';
            }
            else {
                release.state = '';
            }
        });
    };


    ReleasesServices.makeTracklistNodspotFriendly = function (releaseObj)
    {
        var originalTracklist = [],
            artistName = '',
            trackName = '',
            release = releaseObj;

        if (release.artists)
        {
            PlayerServices.currentlyPlaying.artistName = release.artists[0].name.split(" (")[0];
        }

        ArtistServices.fetchImages(PlayerServices.currentlyPlaying.artistName);
        ArtistServices.getSimilar(PlayerServices.currentlyPlaying.artistName);
        PlayerServices.currentlyPlaying.releaseTitle = release.title;
        PlayerServices.currentlyPlaying.releaseYear = release.year;


        //build up a playlist, including artistNames that will be used for topTracksBtn
        angular.forEach(release.tracklist, function (track, i)
        {
            if (track.artists != undefined)
            {
                artistName = track.artists[0].name;
            }
            else {
                artistName = release.artists[0].name;
            }

            artistName = artistName.split(" (")[0];
            trackName = track.title;
            originalTracklist[i] = {
                'track_title': artistName + ' ' + trackName,
                'artist_name': artistName
            };
        });

        return originalTracklist;
    };

    return ReleasesServices;
}]);
