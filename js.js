$(window).on('load', function () {
    constructorObj.init();
});

window.onscroll = function () {
    var scrollPos = $(document).scrollTop(),
        newBackgroudPosition = scrollPos * (-0.03);

    if ($(document).scrollTop() > 400) {
        $('#scrollToTop').addClass('expanded');
        $('#slider').fadeIn();
        $('#copyRight').fadeOut();
    } else {
        $('#scrollToTop').removeClass();
        $('#slider').fadeOut();
        $('#copyRight').fadeIn();
    }

    //background parallax
    $('.searchBackground, .mainBackground').css({
        'background-position': '0 ' + newBackgroudPosition + 'px'
    });
};

$(document).ready(function () {
//    helpersObj.isRedirectNeeded();
    eventsObj.onReleaseInfoRetrieved();
    eventsObj.onYtTokenRetrieved();
});


var LASTFM_API_KEY = "364727cc40706da6eb7d5829f7435bd0",
    EHOES_API_KEY = "XWUQOOGI1QGIHXQBY",
    searchInput = $('#searchInput'),
    artistImagesWrapper = $('#artistImagesWrapper'),
    artistInfoWrapper = $('#artistInfoWrapper'),
    artistImages = $('#artistImages'),
    releases = $('#releases'),
    releasesWrapper = $('#releasesWrapper'),
    similarArtistsWrapper = $('#similarArtitsWrapper'),
    similarArtists = $('#similarArtists'),
    mainGenresWrapper = $('#mainGenresWrapper'),
    playerTitle = $('#artistName'),
    artistBio = $('#artistBio'),
    notFound = $('#notFound'),
    surpriseMe = $('#surpriseMe'),
    genres = $('#genres'),
    genres2 = $('#genres2'),
    playerWrapper = $('#playerWrapper'),
    tipWrapper = $('#tipWrapper'),
    embeddedPlayer = $('#embeddedPlayer'),
    shareFacebook = $('#shareFacebook'),
    backgroundImage = $('#background'),
    releaseNameP = $('#releaseName'),
    userName = $('#userName'),
    favouriteAlbumBtn = $('#favouriteAlbum'),
    favouritesWrapper = $('#favouritesWrapper'),
    favouritesPanel = $('#favourites'),
    ytTrackList = $('#ytTrackList'),
    scTrackList = $('#scTrackList'),
    progressRing = $('#progressRing'),
    addToPlaylistWrapper = $('#addToPlaylistWrapper');

var messagesObj = {
    deletePlaylist: "You're going to delete this playlist. This action cannot be undone.",
    noReleasesFound: [
        "I'm really sorry, but I just could not find any albums despite all my effort. \n",
        "'Sorry, no albums found' must be the hardest thing, but I have to.. \n"],
    videosFromYoutube: 'Below are videos directly from youtube search, have a good day! :)',
    somethingWrong: 'Sorry, something went wrong..',
    playlistDeleted: 'Playlist deleted!',
};


searchInput.keypress(function (event) {

});



var eventsObj = {
    NotifyReleaseInfoRetrieved: new Event('onReleaseInfoRetrieved'),
    onReleaseInfoRetrieved: function () {
        document.addEventListener('onReleaseInfoRetrieved', function (e) {
            releaseObj.getAllVideos();
            playerObj.showWrapper();
        }, false);
    },

    ytTokenRetrieved: new Event('ytTokenRetrieved'),
    onYtTokenRetrieved: function () {
        document.addEventListener('ytTokenRetrieved', function (e) {

            //check if we retrieved the token successfully.
            if (ytObj.token.indexOf('#error' == -1)) {
                console.log(ytObj.token);
                ytObj.getMyPlaylists();
            }

        }, false);
    }
};

var releaseObj = {
    releaseCounter: 0,
    searchAttempt: 0,      //three attemps to search. the first one for "master", second "release", the third one being the loose one - "simple".
    areCoversDownloaded: false,
    searchTerm: '',    //used for storing last search term. Needed when the user deletes artist name from the search input, but still wants to play an album. To search for videos we need both artist name and tracklist.
    searchType: '',
    searchSources: { //0 - hash, 1 - user input from searchinput box, releases or favourites, 2 - surprise me
        hash: 0,
        userInput: 1,
        surpriseMe: 2,
        userPlaylist: 3,
        directYoutube: 4
    },
    searchSource: 0, //
    hash: {    //used for extracting search term, search type, release id, track index
        releaseID: '',
        searchType: '',
        startFrom: ''
    },
    surprise: {
        releaseID: undefined,
        style: undefined,
        pageNumber: undefined
    },
    playlistTrackCounter: 0,


    //push the more/less' releases button according to the number of releases printed out
    isShowMoreNeeded: function () {
        if (releaseObj.releaseCounter > 10) {
            $('#moreReleases').show();
        }
        else {
            $('#moreReleases').hide();
        }
    },

    //Retrieve releases by a specified style with a random page number specified, so that the user gets new releases suggested every time.
    getAllByStyle: function (style, tmpPageNumber, tempReleaseID) {

    },

    //Retrieve a tracklist for the specified master or release.
    getPlaylistTracks: function (mid, type) {

    },

    //attach data to the "favourite/unfavourite album" button required for updating the DB
    updateFavouriteBtnMetadata: function (data) {

    }

};

var ytObj = {
    isConnected: false,
    authUrl: 'https://accounts.google.com/o/oauth2/auth?',
    redirectUrl: 'http://www.nodspot.com/ytCallback.html',
    scope: 'https://www.googleapis.com/auth/youtube.readonly',
    API: 'AIzaSyCqb509HUMemkHf0fEHMiE3abVWdN-aKK0',
    clientID: '944591291174.apps.googleusercontent.com',
    token: '',
    feedBaseUrl: '',

    auth: function () {
        if(!this.isConnected) {
            window.open(
                this.authUrl + 'client_id=' +
                this.clientID + '&redirect_uri=' +
                this.redirectUrl + '&scope=' +
                this.scope + '&response_type=token', 'Google Sign in', 'height=500,width=500');
            this.isConnected = true;
        }
    },

    validateToken: function (callback) {
        $.ajax({
            url: 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + ytObj.token,
            success: function (res) {
                if (!res.error) {
                    console.log(res);
                    callback(res.expires_in);
                }
            },
            error: function (request, status, error) {
                helpersObj.showNotification(messagesObj.somethingWrong);
            }
        });
    },

    getMySubscriptions: function () {
        ytObj.validateToken(function (res) {
            if(res) {
                $.ajax({
                    url: 'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=50&mine=true&key=' + ytObj.API + '&access_token=' + ytObj.token,
                    success: function (res) {
                        console.log(res);
                    }
                });
            }
        });
    },

    getAllVideosByUser: function (userName) {
        $.ajax({
            url: "http://gdata.youtube.com/feeds/api/users/" + userName + "/uploads?alt=json",
            success: function (videos) {
                console.log(videos);
            },
            error: function (request, status, error) {
                helpersObj.showNotification(messagesObj.somethingWrong);
            }
        });
    },

    getMyPlaylists: function () {
        ytObj.validateToken(function (res) {
            if(res) {
                $.ajax({
                    url: 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&key=' + ytObj.API + '&access_token=' + ytObj.token
                }).success(function (playlists) {
                        var source = $('#playlistItemForPlaying').html(),
                            template = Handlebars.compile(source);
                            console.log(playlists);

                        $('#playlistsForPlaying').append(template({returnedVideos: playlists.items}));
                });
            }
        });
    },

    getVideoDataByID: function (id) {
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=' + ytObj.API,
            success: function (res) {

            }
        });
    },

    getVideosFromPlaylist: function (playlistID) {
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + playlistID + "&key=" + ytObj.API
        }).success(function (res) {
            console.log(res);
                playerObj.clearPlaylist();
                playerObj.findVideos(res);
        });
    },

    findVideos: function (i, maxResults) {

    }
};

var constructorObj = {
    init: function () {
        //retrieve youtube, soundcloud resources
        constructorObj.loadServices();
        helpersObj.isIE();
        helpersObj.initialisePlayCounter();
        playerObj.initiateSlider();
    },

    //Parse hash and see if there are any search terms and album ids encoded. Also, retrieve soundcloud stream if the user is signed in.
    //if there is nothing useful in the hash, load "surprise me" genres overlay.
    loadServices: function () {

    }
};

var helpersObj = {
    isIE: function () {
        var appVersion = navigator.appVersion;
        if (appVersion.indexOf("MSIE") != -1) { appVersion = parseFloat(appVersion.split("MSIE")[1]); }
        if (appVersion < 12) {
            $('#ieBlockerWrapper').fadeIn('slow');
        }
    },

    //remove empty items from the playlistIds array and return a new and clean array
    removeEmptyItemsFromArray: function (list) {
        var cleanArray = [];

        for (var i = 0; i < list.length; i++) {
            if (list[i] != undefined && list[i] != '') {
                cleanArray.push(list[i]);
            }
        }
        return cleanArray;
    },


    showNotification: function (messageText) {
        $('#errorMessageWrapper').text(messageText).addClass('expanded');
        setTimeout(function () {
            helpersObj.collapseErrorMessage();
        }, 4000);
    },

    collapseErrorMessage: function () {
        $('#errorMessageWrapper').removeClass('expanded');
    },

    //log a search
    submitSearch: function (searchTerm) {
        var url = favouritesObj.baseUrl + 'submitSearch&search_term=' + searchTerm;
        $.ajax(url);
    },

    isRedirectNeeded: function () {
        var hash, newURL;

        //this will redirect from nodspot.com to www.nodspot.com
        hash = window.location.href;

        if (hash.indexOf("www") == -1 && hash.indexOf('localhost') == -1) {
            newURL = hash.split("nodspot");
            newURL = newURL[0] + "www.nodspot" + newURL[1];
            window.location.replace(newURL);
        }
    },

    toTitleCase: function (string) {
        return string.replace(/(?:^|\s)\w/g, function(match) {
            return match.toUpperCase();
        });
    },

    initialisePlayCounter: function () {
        if (typeof(Storage) !== "undefined" && localStorage["playCounter"] === undefined) {
            localStorage["playCounter"] = 0;

            //show player related hints
            localStorage["playerTips"] = 1;

        } else if (localStorage["playCounter"] === NaN || localStorage["playerTips"] === NaN) {
            localStorage["playCounter"] = 0;

            //show player related hints
            localStorage["playerTips"] = 1;
        }
    },

    changeBackground: {
        toSearch: function () {
            $('html').removeClass("mainBackground").addClass('searchBackground');
        },

        toMain: function () {
            $('html').removeClass("searchBackground").addClass('mainBackground');
        }
    },

    scrollPageToTop: function () { $("html, body").animate({ scrollTop: 0 }, "250"); },

    updateHash: function (artistName, type, mid) {

    },

    writeToLocalStorage: function (key, value) {
        if (typeof(Storage) !== "undefined") {
            localStorage[key] = value;
        }
    },

    readFromLocalStorage: function (key) {
        if (typeof(Storage) !== "undefined") {
            return localStorage[key];
        }
    },

    writeToSessionStorage: function (key, value) {
        if (typeof(Storage) !== "undefined") {
            sessionStorage[key] = value;
            fbObj.userIDnodspot = value;
        }
    },

    readFromSessionStorage: function (key) {
        if (typeof(Storage) !== "undefined") {
            return sessionStorage[key];
        }
    },

    deleteFromLocalStorage: function (key) {
        if (typeof(Storage) !== "undefined") {
            localStorage.removeItem(key);
        }
    },

    unselectTabs: function () {
        $('#tabs').find('.active').removeClass('active');
    },

    activateNodspotTab: function () {
        if (releases.children().length < 0) {
            genresObj.load();
        }

        helpersObj.unselectTabs();
        $('#nodspotBtn').addClass('active');
        $('#panoramaWrapper').removeClass('sc');
        scPlayer.pause();

        if (playerObj.retrievedTracklist.length > 0) {
            ytPlayer.playVideo();
        }
        else {
            genresObj.load();
        }
    },

    activateSoundcloudTab: function () {

    },

    expandSigninDropdown: function () { $('#signinDropdown').removeClass('collapsed'); },

    collapseSigninDropdown: function () { $('#signinDropdown').addClass('collapsed'); },

    showMainProgressRing: function () {
        $(progressRingb).fadeIn();
    },

    hideMainProgressRing: function () {
        $(progressRingb).fadeOut();
    },

    //removes "([0-9])" from the artist name
    trimParenthesis: function (string) {

    }
};

var playerObj = {
    artist: [],
    originalTracklist: [],
    retrievedTracklist: [],
    playlistIds: [],
    playlistLength: 0,
    trackToRepeat: '', //index number for the track to be repeated
    lastPlayedTrackIndex: '',
    lastPlayedReleaseName: '',
    loopRelease: false, //true loops through the release, false will play another release from the list

    //Show player wrapper (contains player itself, release metadata, playlist)
    showWrapper: function () {
        if (playerWrapper.is(':hidden')) {
            playerWrapper.addClass('expanded');
        }
    },

    //Reset "repeat" button to the original state
    clearRepeat: function () { ytTrackList.find('button').removeClass("active"); },

    //Turn the repeat off
    repeatOff: function () {
        playerObj.trackToRepeat = '';
        playerObj.clearRepeat();
    },

    toggleRepeat: function (index) {
        if (playerObj.trackToRepeat != index) {
            playerObj.trackToRepeat = index;
            playerObj.clearRepeat();
            ytTrackList.find('.repeat').eq(index).addClass("active");
        } else {
            playerObj.repeatOff();
        }
    },

    playSong: function (index) {
//        if (playerObj.trackToRepeat != '') {
//            playerObj.trackToRepeat = index;
//        }
//        playerObj.repeatOff();
//        ytPlayer.loadPlaylist(playerObj.playlistIds, index);
//        ytPlayer.setLoop(playerObj.loopRelease);
    },

    loadYtPlaylist: function (playlistID) {
        ytPlayer.loadPlaylist({
            listType: 'playlist',
            list: playlistID
        });
        ytObj.getVideosFromPlaylist(playlistID);
    },

    findVideos: function (videos, index) {

    },

    //initiate slider widget
    initiateSlider: function () {
//        $(function() {
//            $("#slider").slider({
//                slide: function(event, ui) {
//                    var fullTime = ytPlayer.getDuration(),
//                        seekPlayerTo = fullTime * ui.value / 100;
//                    ytPlayer.seekTo(seekPlayerTo);
//                }
//            });
//        });
//        setInterval(playerObj.updateSliderPosition, 2000);
    },

    //reflect tracks current position on the slider in the footer
    updateSliderPosition: function () {
//        var currentTime, fullTime, percentage;
//
//        if (ytPlayer) {
//            currentTime = ytPlayer.getCurrentTime();
//            fullTime = ytPlayer.getDuration();
//            percentage = currentTime/fullTime * 100;
//            if (currentTime > 0) {
//                $('#slider').slider("value", percentage);
//            }
//        }
    },

    //can be used for user saved playlists, also for generating playlists from tracklists. Cannot be used for youtube playlists.
    isPlaylistReady: function () {

    },

    decreasePlaylistLength: function () {
        playerObj.playlistLength--;
        playerObj.isPlaylistReady();
    },

    clearPlaylist: function () {

    },

    printOutPlaylist: function () {

    },


    increasePlayCounter: function () {

    },

    //Publish "Album listened"
    publishAlbumStory: function () {

    },

    playerStateChanged: function (newState) {

    },

    onReady: function () {

    },

    //make the currently playing track in the tracklist unselected
    unselect: {
        nodspot: function () {
            ytTrackList.find('li.active').removeClass('active');
        },
        soundcloud: function () {
            scTrackList.find('li.active').removeClass('active');
        }
    }

};

var artistObj = {
    lastArtistName: '',

    getTwitterName: function (artistName) {

    },

    getImages: function (artistName) {

    },

    setProfileImageSC: function (url) {

    },

    getBiography: function (artistName) {

    },

    getBiographySC: function (userID) {

    },

    getSimilarArtists: function (artistName) {

    },

    getArtistInfo: function (artistName) {

    }

};

var releasesObj = {
    toggleMoreLessReleases: function () {
        if (releases.hasClass("collapsed")) {
            $('#moreReleases').text("Less");
        } else {
            $('#moreReleases').text("More");
        }
        releases.toggleClass("collapsed", "");
    }
};

var soundcloudObj = {
    clientID: '472065090997096b17e97942f6090c6b',
    redirectUrl: 'http://www.nodspot.com/callback.html',
    connectURI: 'https://soundcloud.com/connect',
    token: 'https://api.soundcloud.com/oauth2/token',
    isActive: false,

    connect: function () {

    },

    disconnect: function () {

    },

    connState: {
        connected: function () {
            $('#scLogin').text(messagesObj.soundcloudSignOut);
        },
        disconnected: function () {
            $('#scLogin').text(messagesObj.soundcloudSignIn);
        }
    },

    isConnected: function () {
        if(SC.isConnected()) {
            soundcloudObj.connState.connected();
        }
        else {
            soundcloudObj.connState.disconnected();
        }
    },

    getAccessToken: function () { return localStorage['scAccessToken']; },

    getMyFavourites: function () {

    },

    //Start playing another track once the current one finishes
    bindFinishedPlaying: function () {

    },

    getMyActivities: function () {

    },

    playTrackByID: function (trackID, autoPlay) {

    },

    updateTrackMetaData: function (artistName, trackTitle) {
        $('#scArtistName').html(artistName);
        $('#scTrackName').html(trackTitle);
    }
};

var favouritesObj = {
    baseUrl: 'favourites.php?action=',

    getMyPlaylists: function () {

    },

    //favourite button click handler
    favouriteBtnClicked: function (state, artistName, albumName, albumID, albumYear, albumThumb, searchTerm, searchType) {


        //rewrite this area to make it more readable
        //depending on the current state, we either favourite or unfavourite the album.
        function toggleFavouriteState() {

        }
    },


    //Create a playlist of specified name. When successful, returns a playlist ID.
    createPlaylist: function (playlistName, callback) {
        if (fbObj.isConnectedBool) {
            var url = favouritesObj.baseUrl + 'createPlaylist' +
                '&playlist_name=' + playlistName;

            $.ajax({
                url: encodeURI(url),
                success: function (playlistID) {
                    favouritesObj.getMyPlaylists();

                    if (typeof callback == "function") {
                        //possibly will be used for adding a track to this playlistID
                        callback(playlistID);
                    }
                }
            });
        } else {
            fbObj.login(function (res){
                var trackData;

                //check if this playlist already exists in the database. If yes, we will need its ID.
                favouritesObj.playlistExists(playlistName, function (playlistID) {
                    if (playlistID.length > 0 && typeof playlistID == 'object') {
                        trackData = favouritesObj.getTrackIDandTitle();
                        favouritesObj.addTrackToPlaylist(trackData.trackID, playlistID[0].playlist_id, trackData.trackTitle);
                    } else {
                        favouritesObj.createPlaylist(playlistName, function (playlistID) {
                            if (typeof callback == "function") {
                                callback(playlistID);
                            }
                        });
                    }
                });
            });
        }
    },

    //check if this playlist already exists in the database
    playlistExists: function (playlistName, callback) {
        var url = favouritesObj.baseUrl + 'playlistExists' +
            '&playlist_name=' + playlistName;

        $.ajax({
            url: encodeURI(url),
            success: function (playlistID) {
                playlistID = JSON.parse(playlistID);
                callback(playlistID);
            }
        });
    },

    //update playlist name.
    updatePlaylist: function (playlistName, playlistID) {
        var url = favouritesObj.baseUrl + 'updatePlaylist' +
            '&playlist_name=' + playlistName +
            '&playlist_id=' + playlistID,
            playlistItem = addToPlaylistWrapper.find('[data-playlistid="' + playlistID + '"]')[0];

        $.ajax({
            url: encodeURI(url),
            success: function (res) {
                if (res == 1) {

                    //update the playlist name in the playlistsForSave list.
                    playlistItem.childNodes[0].data = playlistName;

                    //collapse the update playlist input box.
                    playlistItem.childNodes[1].className = 'collapsed';
                } else {
                    playlistItem.childNodes[1].className = 'collapsed';
                }
            }
        });
    },

    //delete playlist and all tracks from it.
    deletePlaylist: function (playlistID) {
        var url = favouritesObj.baseUrl + 'deletePlaylist' +
            '&playlist_id=' + playlistID,
            playlists = $('[data-playlistid="' + playlistID + '"]');

        $.ajax({
            url: encodeURI(url),
            success: function (deleted) {
                if (deleted) {

                    //remove playlists from the UI
                    playlists.remove();
                    helpersObj.showNotification(messagesObj.playlistDeleted);
                }
            }
        });
    },

    addTrackToPlaylist: function (trackID, playlistID, trackTitle) {

    },

    removeTrackFromPlaylist: function (trackID, playlistID) {
        if (fbObj.isConnectedBool) {
            var url = favouritesObj.baseUrl + 'removeTrackFromPlaylist' +
                '&track_id=' + trackID +
                '&playlist_id=' + playlistID;

            $.ajax({
                url: encodeURI(url),
                success: function (response) {
                    if (response == 1) { //if removed from the playlist successfully
                        addToPlaylistWrapper.find('[data-playlistid=' + playlistID + ']').attr('class', 'notSaved');
                    }
                }
            });
        } else {
            fbObj.login(function (){
                favouritesObj.removeTrackFromPlaylist(trackID, playlistID);
            });
        }
    },

    isTrackInPlaylist: function (trackID) {

    },

    getTrackIDandTitle: function () {

    },


    //favourite button states changer
    favouriteBtnState: {
        favourite: function () {
            favouriteAlbumBtn.attr({
                "data-favouriteState": "favourited",
                "class": "favourited",
                "title": "Unfavourite"
            });
        },

        unfavourite: function () {
            favouriteAlbumBtn.attr({
                "data-favouriteState": "unfavourited",
                "class": "unfavourited",
                "title": "Favourite"
            });
        }
    },

    addToPlaylistPaneExpand: function () {
        addToPlaylistWrapper.attr('class', 'expanded');
    },

    addToPlaylistPaneCollapse: function () {
        addToPlaylistWrapper.attr('class', 'collapsed');
    }
};

var artistImagesObj = {
    expand: function () {
        if (artistImages.children().length > 0) {
            artistImagesWrapper.className = 'expanded';
        }
    },

    collapse: function () {
        artistImagesWrapper.className = 'collapsed';
    }
};

var fbObj = {
    firstName: '',
    userID: '',
    userIDnodspot: '',
    userEmail: '',
    isConnectedBool: false,

    login: function (callback) {

    },

    logout: function () {

    },

    isConnected: function () {

    },

    //take users fb user_id and find its equivalent in nodspot db. If the user does not exist, it gets created from the backend and it's user ID is returned.
    getUserID: function () {

    },

    connState: {
        connected: function () {
            fbObj.isConnectedBool = true;
        },

        disconnected: function () {

        }
    },

    //get currently logged in user info
    getUserInfo: function (callback) {

    },

    displayFirstName: function (){
        userName.html("Hello, " + fbObj.firstName).attr("Title", messagesObj.signOut);
    },

    shareAlbum: function () {
        var picture = '',
            rand = 0,
            releaseTitle = releases.find('li.active').find('.title').text(),
            year = releases.find('li.active').find('.year').text(),
            tracksCount = ytTrackList.find('li').length,
            imagesCount = artistImages.children().length;

        if (imagesCount > 0) {
            rand = Math.floor((Math.random() * imagesCount));
            picture = artistImages.children().eq(rand).attr("href");
        } else {
            picture = 'http://www.nodspot.com/images/logo75x75.png'
        }

        FB.ui({
                method: 'feed',
                name: ytTrackList.find('li.active div').eq(0).text(),
                caption: releaseTitle + " (" + year + "). Hear this beautiful complete release (" + tracksCount + " tracks)" + " at nodspot.com. Hop in! :)",
                description: artistBio.text(),
                link: location.href,
                picture: picture,
                type: 'video',
                actions: {
                    name: "Played",
                    link: location.href
                }
            },
            function (response) { }
        );
    }
};


//Allows a user to choose a song from the playlist to be played.
ytTrackList.on('click', '[data-source="yt"]', function (e) {
    var index = $(this).attr("vid");
    playerObj.playSong(index);
});


//Play selected track from SC stream.
scTrackList.on('click', 'li', function () {
    var trackID = $(this).children().eq(0).attr("data-track-id");
    soundcloudObj.playTrackByID(trackID, 'true');
});


//Repeat a track from the playlist.
ytTrackList.on('click', '.repeat', function () {
    var index = $(this).attr("repeatVideo");
    playerObj.toggleRepeat(index);
});


//Buy a track on juno.
ytTrackList.on('click', 'button.juno', function () {
    var url = $(this).attr("url");
    window.open(url, "Buy this track on Juno");
});


//Add track to playlist panel [expand/collapse].
ytTrackList.on('click', '[data-action=addToPlaylist]', function () {
    var trackID = $(this).attr("data-trackID"),
        position = $(this).parents().eq(1); //we will be appending the "add to favourites" panel after this element

    //check if the playlists for saving panel should be expanded or collapsed
    if (addToPlaylistWrapper.attr('class') == 'collapsed' || addToPlaylistWrapper.attr('data-trackID') != trackID) {
        favouritesObj.addToPlaylistPaneExpand();
        position.after(addToPlaylistWrapper);

        //attach track id as a metadata so that we know which track is going to be added to the playlist.
        addToPlaylistWrapper.attr('data-trackID', trackID);
        favouritesObj.isTrackInPlaylist(trackID);
    } else {
        favouritesObj.addToPlaylistPaneCollapse();
    }
});


//Select a playlist to which the track will be saved to.
ytTrackList.on('click', '[data-playlistid]', function (e) {
    var thisItem = $(this),
        playlistID = thisItem.attr("data-playlistid"),
        state = thisItem.attr('class'),
        trackData;

    addToPlaylistWrapper.attr('data-playlistName', thisItem.text());
    trackData = favouritesObj.getTrackIDandTitle();

    //check if the list item is clicked rather than the input box for changing the playlist name
    if (e.target == this) {
        if (state == 'notSaved') {
            favouritesObj.addTrackToPlaylist(trackData.trackID, playlistID, trackData.trackTitle);
        } else {
            favouritesObj.removeTrackFromPlaylist(trackData.trackID, playlistID);
        }
    }
});


//show/hide the input box for changing the playlists name
ytTrackList.on('click', '[role=showPlaylistInputBox]', function () {
    var showPlaylistButton = $(this),
        inputBox = showPlaylistButton.parent().prev(),
        inputBoxState = inputBox.attr('class');

    if (inputBoxState == 'collapsed') {
        inputBox.attr('class', 'expanded');
        inputBox.focus();
    } else {
        inputBox.attr('class', 'collapsed');
    }
});


//delete a playlist
ytTrackList.on('click', '[data-action=deletePlaylist]', function () {
    var deletePlaylistButton = $(this),
        playlistID = deletePlaylistButton.parent().parent().attr('data-playlistid'),
        prompt = confirm(messagesObj.deletePlaylist);

    if (prompt == true) {
        favouritesObj.deletePlaylist(playlistID);
    }
});


//update the playlistname
ytTrackList.on('keydown', '[data-editplaylistid]', function (e) {
    var playlistItemEditBox = $(this),
        playlistID = playlistItemEditBox.attr('data-editplaylistid'),
        playlistName = playlistItemEditBox.val();

    if (e.keyCode == 13) {
        favouritesObj.updatePlaylist(playlistName, playlistID);
    } else if (e.keyCode == 27) {
        playlistItemEditBox.attr('class', 'collapsed');
    }
});


//Save a track to "My first playlist"
ytTrackList.on('click', '#myFirstPlaylist', function () {
    var trackData,
        playlistName = $(this).text();

    addToPlaylistWrapper.attr('data-playlistName', playlistName);
    trackData = favouritesObj.getTrackIDandTitle();

    //create a playlist, get its id and then add the track to that playlist
    favouritesObj.createPlaylist(playlistName, function (playlistID) {
        favouritesObj.addTrackToPlaylist(trackData.trackID, playlistID, trackData.trackTitle);
    });
});


//Create a new playlist and add the track to this list.
$('#newPlaylistName').on('keydown', function (event){
    if (event.keyCode == 13 && playlistName != '') {
        var thisItem = $(this),
            playlistName = thisItem.val(),
            trackData,
            playlistID;

        trackData = favouritesObj.getTrackIDandTitle();
        addToPlaylistWrapper.attr('data-playlistName', playlistName);

        favouritesObj.createPlaylist(playlistName, function (tempPlaylistID){
            //if such playlist already exists, function will return 0
            if (tempPlaylistID != 0 && tempPlaylistID != undefined) {
                playlistID = tempPlaylistID;
                favouritesObj.addTrackToPlaylist(trackData.trackID, playlistID, trackData.trackTitle);
            } else {
                //apparently, the playlist exists, we need to retrieve its id. We will add the track to that playlist.
                favouritesObj.playlistExists(playlistName, function (tmpPlaylistID2) {
                    playlistID = tmpPlaylistID2[0].playlist_id;
                    favouritesObj.addTrackToPlaylist(trackData.trackID, playlistID, trackData.trackTitle);
                });
            }
        });
    }
});


//Click on an album to play it.
releases.on('click', 'li', function () {

});


//Click on a user saved playlist to play it.
favouritesWrapper.on('click', '#playlistsForPlaying li', function () {
//    var thisItem = $(this),
//        playlistID = thisItem.attr("data-playlistid"),
//        playlistSource = thisItem.attr("data-source");
//
//    playerTitle.text(thisItem.text());
//    playerObj.loopRelease = true;
//
////    releaseObj.makeSelected(playlistID, 'playlist');
//    releaseObj.searchSource = releaseObj.searchSources.userPlaylist;
//
//    if (playlistSource != 'youtube#playlist') {
//        favouritesObj.getTracksFromPlaylist(playlistID, function () {
//            playerObj.playSong(0);
//            playerObj.printOutPlaylist();
//        });
//    } else {
//        playerObj.loadYtPlaylist(playlistID);
//    }

});


//Click on a similar artist to retrieve his songs
similarArtists.on('click', 'li', function () {
    releaseObj.search($(this).children().children().eq(1).html());
});



favouriteAlbumBtn.click(function () {
    var searchTerm = releaseObj.searchTerm;

    //if the album we're trying to write to DB does not have the searchTerm metadata attached to it, let's grab albums name.
    if (searchTerm == "") {
        searchTerm = releases.find("li.active").children().children().eq(2).text();
    }

    favouritesObj.favouriteBtnClicked(
        $(this).attr("data-favouriteState"),
        $(this).attr("data-artistName"),
        $(this).attr("data-albumName"),
        $(this).attr("data-albumID"),
        $(this).attr("data-albumYear"),
        $(this).attr("data-albumThumbnail"),
        searchTerm,
        $(this).attr("data-searchType")
    );

});

$('#genres, #genres2').on('click', 'li', function () {
    releaseObj.getAllByStyle($(this).html(), 0, "");
});

artistImagesWrapper.mouseenter(function () {this.className = "expanded";});
artistImagesWrapper.mouseleave(function () {this.className = "collapsed";});
artistImagesWrapper.blur(function () {this.className = "collapsed";});
artistImagesWrapper.focus(function () {this.className = "expanded";});
favouritesWrapper.mouseenter(function () {this.className = "expanded";});
favouritesWrapper.mouseleave(function () {this.className = "collapsed";});
$('#signinDropdown').mouseleave(function () {helpersObj.collapseSigninDropdown();});

playerTitle.click(function () {

});

artistInfoWrapper.click(function () {artistInfoWrapper.fadeOut('fast');});

tipWrapper.click(function () {
    $(this).removeClass("popupAnimateIn");

    //do not show player related hints
    localStorage["playerTips"] = 0;
});

$('#scrollToTop').click(function () {helpersObj.scrollPageToTop();});

playerWrapper.mouseover(function () {
    shareFacebook.addClass("fadeIn").removeClass("fadeOut");
    favouriteAlbumBtn.addClass("fadeIn").removeClass("fadeOut");
    helpersObj.collapseSigninDropdown();
});

playerWrapper.mouseout(function () {
    shareFacebook.addClass("fadeOut").removeClass("fadeIn");
    favouriteAlbumBtn.addClass("fadeOut").removeClass("fadeIn");
});

shareFacebook.click(function () {fbObj.shareAlbum();});

$('#moreReleases').click(function (){
    releasesObj.toggleMoreLessReleases();
});

$('#nodspotBtn').click(function () {
    helpersObj.activateNodspotTab();
});

$('#scBtn').click(function () {
    helpersObj.activateSoundcloudTab();
});

//control the player with keyboard
$(window).on('keydown', function (e) {
    if (e.target.localName != 'input') {
        if (e.keyCode == 88) { //x
            ytPlayer.nextVideo();
        } else if (e.keyCode == 90) { //z
            ytPlayer.previousVideo();
        } else if (e.keyCode == 37) { //right arrow
            ytPlayer.seekTo(ytPlayer.getCurrentTime() - 5);
        } else if (e.keyCode == 39) { //left arrow
            ytPlayer.seekTo(ytPlayer.getCurrentTime() + 15);
        }
    }
});