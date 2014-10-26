nodspot.factory('ArtistServices', ['$http', '$rootScope', 'LastfmServices', 'YoutubeServices', 'PlayerServices', 'SearchServices', 'EventsConstants', '$q', function ($http, $rootScope, LastfmServices, YoutubeServices, PlayerServices, SearchServices, EventsConstants, $q)
{

    var ArtistServices =
        {
            artistImages: ''
        },
        EHOES_API_KEY = "XWUQOOGI1QGIHXQBY";


    ArtistServices.fetchImages = function (artistName)
    {
        $http.get("http://developer.echonest.com/api/v4/artist/images?api_key=" + EHOES_API_KEY + "&name="
            + artistName + "&format=json&results=20&start=0&license=unknown")
            .success(function (images)
            {
                ArtistServices.artistImages = images.response.images;
            });
    };

    ArtistServices.getImages = function ()
    {
        return ArtistServices.artistImages;
    };


    ArtistServices.getBio = function (artistName)
    {
        $http.get(LastfmServices.baseUrl
        + 'artist.getInfo&artist='
        + artistName
        + "&api_key="
        + LastfmServices.api
        + "&format=json")
            .success(function (artistBio)
            {
                $rootScope.$broadcast('artistBioReturned', artistBio);
            });
    };


    ArtistServices.getTopTracks = function (searchTerm)
    {
        var d = $q.defer();

        SearchServices.expandProgressBar();
        PlayerServices.currentlyPlaying.title = searchTerm;
        PlayerServices.currentlyPlaying.albumName = 'Top tracks';
        PlayerServices.currentlyPlaying.releaseYear = 'all good :)';
        SearchServices.searchTerm = searchTerm;
        SearchServices.searchSource = SearchServices.searchSources.topTracks;

        $http.get(LastfmServices.baseUrl
        + 'artist.gettoptracks&artist='
        + searchTerm
        + "&api_key="
        + LastfmServices.api
        + "&format=json&limit=20")
            .success(function (topTracks)
            {
                var playlist = LastfmServices.lastfmPlaylistToNodspot(searchTerm, topTracks, 'artist');

                YoutubeServices.findVideos(playlist).then(function (playlistIds) {
                    d.resolve(playlistIds);
                });
            });

        SearchServices.logSearch(searchTerm, 'topTracks');

        return d.promise;
    };


    ArtistServices.getSimilar = function (artistName)
    {
        $http.get(LastfmServices.baseUrl
        + 'artist.getSimilar&artist='
        + artistName
        + "&api_key="
        + LastfmServices.api
        + "&limit=15&format=json")
            .success(function (similarArtists)
            {
                $rootScope.$broadcast(EventsConstants.similarArtistsReturned, similarArtists);
            });
    };

    return ArtistServices;
}]);