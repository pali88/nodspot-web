<?php


class FavouritesController extends BaseController {

	public function add($user_id, $release_id, $release_type, $search_term, $release_title, $release_year, $artist_name) {
        DB::insert('INSERT INTO ns_saved_albums (user_id, id, type, search_term, title, year, artist_name)
        VALUES (?, ?, ?, ?, ?, ?, ?)', [$user_id, $release_id, $release_type, $search_term, $release_title, $release_year, $artist_name]);
        return DB::getPDO()->lastInsertId();
	}

}

//
//    case "unfavouriteAlbum" : {
//    $query = $con->prepare("DELETE FROM ns_saved_albums WHERE (user_id = $user_id_nodspot AND id = :album_id)");
//    $query->bindParam(':album_id', $album_id, PDO::PARAM_INT);
//    $query->execute();
//    $rowsAffected = $query->rowCount();
//    echo $rowsAffected;
//    break;
//
//    case "getAlbumState" : {
//    $query = $con->prepare("SELECT id FROM ns_saved_albums WHERE user_id = $user_id_nodspot AND id = :album_id");
//    $query->bindParam(':album_id', $album_id, PDO::PARAM_INT);
//    $query->execute();
//    $results = $query->fetchAll();
//    if ($results) {
//        echo 1; //album exists
//    }
//    break;
//}