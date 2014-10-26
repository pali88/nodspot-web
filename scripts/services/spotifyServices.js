nodspot.factory('SpotifyServices', ['$http', '$q', function ($http, $q)
{
    var spotifyApi = new SpotifyWebApi();

    console.log(spotifyApi);

    var SpotifyServices =
    {
        clientId: 'd965e43a5858459c8e4f18cd9ced6c4d',

        findAlbums: function (searchTerm)
        {
            return spotifyApi.searchAlbums(searchTerm);
        },

        getAlbumTracks: function (albumId)
        {
            return spotifyApi.getAlbumTracks(albumId);
        }

    };

    return SpotifyServices;
}]);