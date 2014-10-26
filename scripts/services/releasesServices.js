nodspot.factory('ReleasesServices',
    [
        '$http',
        '$rootScope',
        'YoutubeServices',
        'EventsConstants',
        'GenresServices',
        'ArtistServices',
        'SearchServices',
        'PlayerServices',
        '$q',
        'SpotifyServices',
        function (
            $http,
            $rootScope,
            YoutubeServices,
            EventsConstants,
            GenresServices,
            ArtistServices,
            SearchServices,
            PlayerServices,
            $q,
            SpotifyServices)
{

    var baseUrl = 'releases.php?action=',

        ReleasesServices =
        {
            returnedReleases: [] //returned releases are stored here
        }


    ReleasesServices.getReleases = function ()
    {
        return ReleasesServices.returnedReleases;
    };


    ReleasesServices.getSuggestions = function (searchTerm)
    {
        return $http.get(baseUrl + 'yt&term=' + searchTerm);
    };


    ReleasesServices.findAlbums = function (searchTerm)
    {
        SearchServices.expandProgressBar();
        GenresServices.stylesVisibility = false;
        return SpotifyServices.findAlbums(searchTerm).then(function (albums) {
            ReleasesServices.returnedReleases = albums.albums.items;
        });
    };


    //fetch album tracklist videos from youtube
    ReleasesServices.findVideos = function (tracklist)
    {
        return YoutubeServices.findVideos(tracklist);
    }


    //fetch videos that match the searchTerm straight from youtube
    ReleasesServices.getVideosFromYoutube = function (searchTerm, maxResults)
    {
        var d = $q.defer();

        SearchServices.expandProgressBar();

        YoutubeServices.findVideos(searchTerm, maxResults).then(function (videos)
        {
            d.resolve(videos);
        });

        SearchServices.searchSource = SearchServices.searchSources.directYoutube;
        SearchServices.searchTerm = searchTerm;

        PlayerServices.currentlyPlaying.title = SearchServices.searchTerm;
        PlayerServices.currentlyPlaying.artistName = searchTerm;
        PlayerServices.currentlyPlaying.albumName = 'Tracks straight from youtube';

        return d.promise;
    };


    ReleasesServices.getAlbumTracklist = function (albumId)
    {
        SearchServices.expandProgressBar();

        return SpotifyServices.getAlbumTracks(albumId).then(function (tracklist) {
            return ReleasesServices.convertSpotifyTracklistToNodspot(tracklist.items);
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


    //make the tracklist nodspot friendly
    ReleasesServices.convertSpotifyTracklistToNodspot = function (releaseObj)
    {
        var originalTracklist = [],
            artistName = '',
            trackName = '',
            release = releaseObj;

        if (release.artists)
        {
            PlayerServices.currentlyPlaying.artistName = release.artists[0].name;
        }

        ArtistServices.fetchImages(PlayerServices.currentlyPlaying.artistName);
        ArtistServices.getSimilar(PlayerServices.currentlyPlaying.artistName);

        PlayerServices.currentlyPlaying.albumName = release.title;
        PlayerServices.currentlyPlaying.releaseYear = release.year;


        //build up a playlist, including artistNames that will be used for topTracksBtn
        angular.forEach(release, function (track, i)
        {
            if (track.artists != undefined)
            {
                artistName = track.artists[0].name;
            }
            else {
                artistName = release.artists[0].name;
            }

            artistName = artistName.split(" (")[0];
            trackName = track.name;

            originalTracklist[i] = {
                'track_title': artistName + ' ' + trackName,
                'artist_name': artistName
            };
        });

        return originalTracklist;
    };

    return ReleasesServices;
}]);
