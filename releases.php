<?php
error_reporting(0);
$baseSearchURL = 'http://api.discogs.com/database/search?';
$baseReleaseURL = 'http://api.discogs.com/';
$baseiTunesURL = 'https://itunes.apple.com/search?limit=1&term=';

$action =           $_GET['action'];
$artist =           $_GET['artist'];
$type =             $_GET['type']; //search type
$release_type =     $_GET['release_type']; //release type
$release_id =       $_GET['release_id'];
$release_name =     $_GET['release_name'];
$per_page =         $_GET['per_page'];
$query =            $_GET['q'];
$style =            $_GET['style'];
$page =             $_GET['page'];
$term =             $_GET['term'];

$opts = array( 'http'=>array('header'=> "User-agent: nodspot.comPlayer/0.1 +http://www.nodspot.com"));
$context = stream_context_create($opts);
$ReleasesObj = new ReleasesServices();

switch ($action) {
    case "getAllReleases" : {
//        $ReleasesObj->getAllReleases($type, $artist, $per_page, $query);

        $releases = '';

        if ($type != 'simple') {
            $url = $baseSearchURL . 'type=' . $type . '&artist=' . urlencode($artist) . '&per_page=' . $per_page;
            var_dump($url);
        } else {
            $url = $baseSearchURL . 'q=' . urlencode($query) . '&per_page=' . $per_page;
        }

        $releases = file_get_contents($url, false, $context);
        echo $releases;
        break;
    }

    case "getReleaseById" : {
//        $ReleasesObj->getReleaseById($release_id, $release_type, $context);
        $url = $baseReleaseURL . '/' . $release_type . '/' . $release_id;
        $release = file_get_contents($url, false, $context);
        echo $release;
        break;
    }

    case "getAllReleasesByStyle" : {
        if ($page != '') {
            $url = $baseSearchURL . 'style=' . urlencode($style) . '&page=' . $page;
        } else { $url = $baseSearchURL . 'style=' . $style; }

        $releases = file_get_contents($url, false, $context);
        echo $releases;
        break;
    }

    case "getAlbumCover" : {
        $xboxService = new Xboxmusic();
        $token = $xboxService->auth();
        $response = $xboxService->getAlbums($query, $token);
        echo $response;
        break;
    }

    case "getSuggestedArtists" : {
        $xboxService = new Xboxmusic();
        $token = $xboxService->auth();
        $response = $xboxService->getSuggestedArtists($query, $token);
        echo $response;
        break;
    }

    case "yt" : {
        $url = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' . urlencode($term);
        $release = file_get_contents($url, true, $context);
        echo $release;
        break;
    }

    case "suggest": {
        $url = 'http://www.discogs.com/search/ac?q=' . urlencode($term) . '&type=a_m_r_13';
        $suggestions = file_get_contents($url, true, $context);
        echo $suggestions;
        break;
    }
}

class ReleasesServices {

    public $baseReleaseURL = "http://api.discogs.com/";
    public $baseiTunesURL = "https://itunes.apple.com/search?limit=1&term=";
    public $baseSearchURL = "http://api.discogs.com/database/search?";
    public $releases = '';
    public $context = '';

    function __construct() {
        $opts = array('http'=>array('header'=> "User-agent: nodspot.comPlayer/0.1 +http://www.nodspot.com"));
        $this->context = stream_context_create($opts);
    }

    function getAllReleases($type, $artist, $per_page, $query) {
        if ($type != 'simple') {
            $url = $this->baseSearchURL . 'type=' . $type . '&artist=' . urlencode($artist) . '&per_page=' . $per_page;
        } else {
            $url = $this->baseSearchURL . 'q=' . urlencode($query) . '&per_page=' . $per_page;
        }

        $this->releases = file_get_contents($url, false, $this->context);
        echo $this->releases;
    }

    function getReleaseById($release_id, $release_type, $context) {
        $url = $this->baseReleaseURL . '/' . $release_type . '/' . $release_id;
        $release = file_get_contents($url, false, $context);
        echo $release;
    }

}


class Xboxmusic {
    var $serviceauth = "https://datamarket.accesscontrol.windows.net/v2/OAuth2-13";
    var $serviceapi = "https://music.xboxlive.com/1/content";
    var $clientId = "a1b41111-0dca-4eea-92d2-6a0a89566635";
    var $clientSecret = "AvGQJTd/rxBdyNPYYE7gesNLsog8lr1cmwjKc1+Rk/8=";
    var $scope = "http://music.xboxlive.com";
    var $grantType = "client_credentials";
    var $retrievedToken = '';

    public function auth() {
        $requestData = array("client_id" => $this->clientId, "client_secret" => $this->clientSecret, "scope" => $this->scope, "grant_type" => $this->grantType);
        $options = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($requestData),
            ),
        );
        $context  = stream_context_create($options);
        $response = json_decode(@file_get_contents($this->serviceauth, false, $context), true);
        $token = $response['access_token'];
        return $token;
    }

    public function getAlbums($string, $token) {
        $url = $this->serviceapi . '/music/search?q=' . urlencode($string) . '&filters=Albums' . '&maxItems=1' . '&accessToken=Bearer+' . urlencode($token);
        $response = @file_get_contents($url);
        return $response;
    }

    public function getSuggestedArtists($string,$token) {
        $url = $this->serviceapi . '/music/search?q=' . urlencode($string) . '&filters=artists' . '&maxItems=5' . '&accessToken=Bearer+' . urlencode($token);
        $response = @file_get_contents($url);
        return $response;
    }

    public function lookup($ids_array, $token, $extras = '') {
        $string = '';
        foreach($ids_array as $value) {
            $string .= $value.'+';
        }
        $string = rtrim($string, '+');
        if(!empty($extras)) $url = $this->serviceapi.'/'.$string.'/lookup?accessToken=Bearer+'.urlencode($token).'&extras='.$extras;
        else $url = $this->serviceapi.'/'.$string.'/lookup?accessToken=Bearer+'.urlencode($token);
        $response = @file_get_contents($url,true);
        return $response;
    }
}
?>