nodspot.factory('LastfmServices', ['$http', 'YoutubeServices', 'PlayerServices', 'SearchServices', '$q', function ($http, YoutubeServices, PlayerServices, SearchServices, $q) {

    var LastfmServices =
    {
        api: '364727cc40706da6eb7d5829f7435bd0',
        baseUrl: 'http://ws.audioscrobbler.com/2.0/?method=',
        tagsTopTracks: []
    };

    LastfmServices.getTagsTopTracks = function (tagName)
    {
        SearchServices.expandProgressBar();
        PlayerServices.currentlyPlaying.title = tagName;
        PlayerServices.currentlyPlaying.albumName = 'top tracks';
        PlayerServices.currentlyPlaying.releaseYear = 'all good';
        SearchServices.searchSource = SearchServices.searchSources.tag;
        SearchServices.searchTerm = tagName;

        return $http.get(
            LastfmServices.baseUrl
            + 'tag.gettoptracks&tag='
            + tagName
            + "&api_key="
            + LastfmServices.api
            + "&format=json"
        );
    };


    LastfmServices.getTagsTopTracksVideos = function (tagName)
    {
        var d = $q.defer();

        LastfmServices.getTagsTopTracks(tagName)
            .then(function (topTracks)
            {
                YoutubeServices.findVideos(LastfmServices.lastfmPlaylistToNodspot(undefined, topTracks, 'tag')).then(function (videos) {
                    d.resolve(videos);
                });
            });

        SearchServices.logSearch(tagName, 'tag');
        PlayerServices.currentlyPlaying.albumName = tagName;
        PlayerServices.currentlyPlaying.title = tagName;
        PlayerServices.currentlyPlaying.releaseYear = 'Top tracks, all good :)';
        SearchServices.searchSource = SearchServices.searchSources.tag;

        return d.promise;
    };

    LastfmServices.lastfmPlaylistToNodspot = function (artistName, topTracks, type)
    {
        var newPlaylist = [];

        switch (type)
        {
            case 'artist':
            {
                angular.forEach(topTracks.toptracks.track, function (track, i)
                {
                    newPlaylist[i] =
                    {
                        track_title: artistName + ' ' + track.name,
                        artist_name: artistName
                    };
                });
                break
            }
            case 'tag':
            {
                angular.forEach(topTracks.data.toptracks.track, function (track, i)
                {
                    newPlaylist[i] =
                    {
                        track_title: track.artist.name + ' ' + track.name,
                        artist_name: track.artist.name
                    };
                });
                break
            }
        }

        return newPlaylist;
    };

    return LastfmServices;
}]);