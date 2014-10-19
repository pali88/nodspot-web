nodspot.factory('SearchServices', ['$http', 'ApiConstants', function ($http, ApiConstants) {

    var baseUrl = ApiConstants.baseUrlNodspot;;

    var SearchServices =
    {
        searchTerm: '',
        searchType: '',
        searchAttempt: 0,
        searchSources:
        {
            hash: 0,
            userInput: 1,
            surpriseMe: 2,
            userPlaylist: 3,
            directYoutube: 4,
            topTracks: 5,
            tag: 6
        },
        searchSource: 0,

        //used for extracting search term, search type, release id, track index
        hash:
        {
            releaseId: '',
            startFrom: 0
        },
        surprise:
        {
            releaseId: undefined,
            style: undefined,
            page: undefined
        },
        progressBarVisibility: false,


        collapseProgressBar: function ()
        {
            SearchServices.progressBarVisibility = false;
        },


        expandProgressBar: function ()
        {
            SearchServices.progressBarVisibility = true;
        },


        getProgressBarVisibility: function ()
        {
            return SearchServices.progressBarVisibility;
        }
    };


    SearchServices.getSearchSource = function ()
    {
        return SearchServices.searchSource;
    };


    //log/{search_term}/{search_type}
    SearchServices.logSearch = function (searchTerm, searchType)
    {
        $http.get(
            baseUrl
            + 'log'
            + '/'
            + searchTerm
            + '/'
            + searchType
        );
    };

    return SearchServices;
}]);