<?php

error_reporting(0);
$life_time = 99999999999; //seconds
ini_set('session.gc_maxlifetime', $life_time);
ini_set('session.gc_probability', 1);
ini_set('session.cookie_secure', true);
ini_set('session.use_only_cookies', true);
session_start();
setcookie(session_name(), session_id(), time() + $life_time);
session_set_cookie_params($life_time);

//$dsn = 'mysql:dbname=nodspot_db;host=localhost';
//$user = 'nodspot_pienas';
//$password = 'Spotless13';

$dsn = 'mysql:dbname=nodspot_db;host=localhost';
$user = 'root';
$password = '';


try {
   global $con;
    $con = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    die( 'Connection failed: ' . $e->getMessage() );
}


//$user_id_nodspot =  1;
$user_id_nodspot =  $_SESSION['userID'];
$action =           $_GET['action'];
$user_id =          $_GET['user_id'];
$search_id =        $_GET['search_id'];
$search_name =      $_GET['search_name'];
$album_id =         $_GET['album_id'];
$album_name =       $_GET['album_name'];
$artist_name =      $_GET['artist_name'];
$album_thumb =      $_GET['album_thumb'];
$album_year =       $_GET['album_year'];
$search_term =      $_GET['search_term'];
$search_type =      $_GET['search_type'];
$url =              $_GET['url'];
$playlist_name =    ucfirst($_GET['playlist_name']);
$playlist_id =      $_GET['playlist_id'];
$track_id =         $_GET['track_id'];
$track_title =      $_GET['track_title'];
$email =            $_GET['email'];

//class FavouritesServices {
//
//    public $con;
//
//    //initiate PDO connection
//    function __construct() {
//        $dsn = 'mysql:dbname=marso_pienas;host=localhost';
//        $user = 'root';
//        $password = '';
//        $this->con = new PDO($dsn, $user, $password);
//    }
//
//    public function getAllPlaylists($user_id_nodspot) {
//        $sql = "SELECT playlist_id, playlist_name FROM ns_playlists WHERE user_id = $user_id_nodspot ORDER BY playlist_name ASC";
//        $query = $this->con->prepare($sql);
//        $query->execute();
//        $results = $query->fetchAll();
//        echo json_encode($results);
//    }
//};
//
//$FavouritesServices = new FavouritesServices();

if ($con) {
    switch ($action) {
        case "getUserID" : {
            $sql = "SELECT id FROM ns_users WHERE user_id = :user_id AND email = :email";
            $query = $con->prepare($sql);

            $query->execute(array(
            ':user_id' => $user_id,
            ':email' => $email
            ));

            $results = $query->fetchAll();

            //if user exists, retrieve his ID from nodspot db and save it to the session
            if ($results[0]['id'] != 0 && $results[0]['id'] != null) {
                $temp_user_id = $results[0]['id'];
            } else { //if not, create a new user and save user ID to session
                $sql = "INSERT INTO ns_users (user_id, email) VALUES (:user_id, :email)";
                $query = $con->prepare($sql);
                $query->execute(
                    array(
                    ':user_id' => $user_id,
                    ':email' => $email)
                );
                $last_id = $con->lastInsertId('id');
                $temp_user_id = $last_id;
            }
            $_SESSION['userID'] = $temp_user_id;
//            setcookie('nsusrid', $_SESSION['userID']);

//            $results = DB::select('SELECT track_id, track_title FROM ns_playlist_tracks WHERE playlist_id = 221');
//            echo $results;
            echo $temp_user_id;
            break;
        }

        case "favouriteAlbum" : {
            $query = $con->prepare(
                "INSERT INTO ns_saved_albums (title, artist_name, user_id, id, year, search_term, type)
                VALUES (:album_title, :artist_name, $user_id_nodspot, :album_id, :album_year, :search_term, :search_type)");
            $query->bindParam(':album_title', urldecode($album_name), PDO::PARAM_STR);
            $query->bindParam(':album_id', $album_id, PDO::PARAM_INT);
            $query->bindParam(':artist_name', $artist_name, PDO::PARAM_STR);
            $query->bindParam(':album_year', $album_year, PDO::PARAM_STR);
            $query->bindParam(':search_term', $search_term, PDO::PARAM_STR);
            $query->bindParam(':search_type', $search_type, PDO::PARAM_STR);
            $query->execute();
            $rowsAffected = $query->rowCount();
            echo $rowsAffected;
            break;
        }

        case "unfavouriteAlbum" : {
            $query = $con->prepare("DELETE FROM ns_saved_albums WHERE (user_id = $user_id_nodspot AND id = :album_id)");
            $query->bindParam(':album_id', $album_id, PDO::PARAM_INT);
            $query->execute();
            $rowsAffected = $query->rowCount();
            echo $rowsAffected;
            break;
        }

        case "getFavouritedAlbums" : {
            $query = $con->prepare("SELECT title, artist_name, id, year, search_term, type
            FROM ns_saved_albums WHERE user_id = $user_id_nodspot ORDER BY title ASC");
            $query->execute();
            $results = $query->fetchAll();
            echo json_encode($results);
            break;
        }

        case "getAlbumState" : {
            $query = $con->prepare("SELECT id FROM ns_saved_albums WHERE user_id = $user_id_nodspot AND id = :album_id");
            $query->bindParam(':album_id', $album_id, PDO::PARAM_INT);
            $query->execute();
            $results = $query->fetchAll();
            if ($results) {
                echo 1; //album exists
            }
            break;
        }

        case "getAllPlaylists" : {
//            $sql = "SELECT playlist_id, playlist_name FROM ns_playlists WHERE user_id = $user_id_nodspot ORDER BY playlist_name ASC";
//            $query = $con->prepare($sql);
//            $query->execute();
//            $results = $query->fetchAll();
//            echo json_encode($results);
//            break;
        }

        case "getTracksFromPlaylist" : {
            $sql = "SELECT track_id, track_title, artist_name FROM ns_playlist_tracks WHERE playlist_id = ?";
            $query = $con->prepare($sql);
            $query->execute(array($playlist_id));
            $results = $query->fetchAll();
            echo json_encode($results);
            break;
        }

        case "playlistExists" : {
            $sql = "SELECT playlist_id FROM ns_playlists WHERE playlist_name = :playlist_name AND user_id = $user_id_nodspot";
            $query = $con->prepare($sql);
            $query->execute(array(':playlist_name' => $playlist_name));
            $results = $query->fetchAll();
            echo json_encode($results);
            break;
        }

        case "updatePlaylist" : {
            $sql = "UPDATE ns_playlists SET playlist_name = ? WHERE playlist_id = ? AND user_id = $user_id_nodspot";
            $query = $con->prepare($sql);
            $query->execute(array($playlist_name, $playlist_id));
            $rowsAffected = $query->rowCount();
            echo $rowsAffected;
            break;
        }

        case "deletePlaylist" : {
            $sql = "DELETE FROM ns_playlists WHERE (playlist_id = :playlist_id AND user_id = $user_id_nodspot)";
            $query = $con->prepare($sql);
            $query->execute(array(':playlist_id'=> $playlist_id));
            $sql = "DELETE FROM ns_playlist_tracks WHERE playlist_id = :playlist_id";
            $query = $con->prepare($sql);
            $query->execute(array(':playlist_id'=> $playlist_id));
            $rowsAffected = $query->rowCount();
            echo $rowsAffected;
            break;
        }

        case "addTrackToPlaylist" : {
            if ($playlist_id != null) { //delete duplicate
                $sql = "DELETE FROM ns_playlist_tracks WHERE (playlist_id = :playlist_id AND track_id = :track_id)";
                $query = $con->prepare($sql);
                $query->bindParam(':playlist_id', $playlist_id, PDO::PARAM_INT);
                $query->bindParam(':track_id', $track_id, PDO::PARAM_STR);
                $query->execute();

                //add track to playlist
                $sql = "INSERT INTO ns_playlist_tracks (playlist_id, track_id, track_title, artist_name) VALUES (:playlist_id, :track_id, :track_title, :artist_name)";
                $query = $con->prepare($sql);
                $query->bindParam(':playlist_id', $playlist_id, PDO::PARAM_INT);
                $query->bindParam(':track_id', $track_id, PDO::PARAM_STR);
                $query->bindParam(':track_title', $track_title, PDO::PARAM_STR);
                $query->bindParam(':artist_name', $artist_name, PDO::PARAM_STR);
                $query->execute();

                //return list of playlists this track belongs to
                $sql = "SELECT ns_playlist_tracks.playlist_id FROM ns_playlist_tracks
                        INNER JOIN ns_playlists ON ns_playlist_tracks.playlist_id = ns_playlists.playlist_id
                        WHERE ns_playlists.user_id = $user_id_nodspot AND track_id = :track_id";
                $query = $con->prepare($sql);
                $query->bindParam(':track_id', $track_id, PDO::PARAM_STR);
                $results = $query->execute();
                $results = $query->fetchAll();
            } else {
                //check if the playlist exists
                $sql = "SELECT playlist_id FROM ns_playlists WHERE user_id = :user_id AND playlist_name = :playlist_name";
                $query = $con->prepare($sql);
                $query->bindParam(':playlist_name', $playlist_name, PDO::PARAM_STR);
                $query->bindParam(':user_id', $user_id_nodspot, PDO::PARAM_INT);
                $results = $query->execute();
                $results = $query->fetchAll();
                $temp_playlist_id = $results[0]['playlist_id'];
//                echo ('playlist id');
//                var_dump($temp_playlist_id);

                if ($temp_playlist_id == null) {
                    //create new playlist
                    $sql = "INSERT INTO ns_playlists (playlist_name, user_id)
                        SELECT :playlist_name, $user_id_nodspot
                        FROM DUAL
                        WHERE NOT EXISTS
                          (SELECT 1 FROM ns_playlists WHERE playlist_name = :playlist_name AND user_id = $user_id_nodspot)";

                    $query = $con->prepare($sql);
                    $query->execute(array(':playlist_name' => $playlist_name));
                    $last_id = intval($con->lastInsertId('playlist_id'));
                    $temp_playlist_id = $last_id;
                }

                //add track to playlist
                $sql = "INSERT INTO ns_playlist_tracks (playlist_id, track_id, track_title) VALUES (:playlist_id, :track_id, :track_title)";

                $query = $con->prepare($sql);
                $query->bindParam(':playlist_id', $temp_playlist_id, PDO::PARAM_INT);
                $query->bindParam(':track_id', $track_id, PDO::PARAM_STR);
                $query->bindParam(':track_title', $track_title, PDO::PARAM_STR);
                $query->execute();

                //return list of playlists this track belongs to
                $sql = "SELECT ns_playlist_tracks.playlist_id FROM ns_playlist_tracks
                        INNER JOIN ns_playlists ON ns_playlist_tracks.playlist_id = ns_playlists.playlist_id
                        WHERE ns_playlists.user_id = $user_id_nodspot AND track_id = :track_id";
                $query = $con->prepare($sql);
                $query->bindParam(':track_id', $track_id, PDO::PARAM_STR);
                $results = $query->execute();
                $results = $query->fetchAll();
            }
            echo json_encode($results);
            break;
        }

        case "removeTrackFromPlaylist" : {
            $sql = "DELETE ns_playlist_tracks FROM ns_playlist_tracks
                    INNER JOIN ns_playlists ON ns_playlist_tracks.playlist_id = ns_playlists.playlist_id
                    WHERE track_id = :track_id AND ns_playlist_tracks.playlist_id = :playlist_id AND ns_playlists.user_id = $user_id_nodspot";
            $query = $con->prepare($sql);
            $query->bindParam(':playlist_id', $playlist_id, PDO::PARAM_INT);
            $query->bindParam(':track_id', $track_id, PDO::PARAM_STR);
            $results = $query->execute();
            $rowsAffected = $query->rowCount();
            echo $rowsAffected;
            break;
        }

        case "getTracksPlaylists" : {
            $sql = "SELECT ns_playlist_tracks.playlist_id FROM ns_playlist_tracks
                    INNER JOIN ns_playlists ON ns_playlist_tracks.playlist_id = ns_playlists.playlist_id
                    WHERE ns_playlists.user_id = $user_id_nodspot AND track_id = :track_id";
            $query = $con->prepare($sql);
            $query->bindParam(':track_id', $track_id, PDO::PARAM_STR);
            $results = $query->execute();
            $results = $query->fetchAll();
            echo json_encode($results);
            break;
        }

        case "logSearch" : {
            if (isset($user_id_nodspot)) {
                $user_id = $user_id_nodspot;
            } else {
                $user_id = 0;
            }

            $sql = "INSERT INTO ns_searches (user_id, search_term, type) VALUES ($user_id, :search_term, :type)";
            $query = $con->prepare($sql);
            $query->execute(
                array(
                    ":search_term" => $search_term,
                    ":type" => $search_type
                )
            );
            break;
        }
    }
}

?>