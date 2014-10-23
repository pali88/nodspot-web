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

$dsn = 'mysql:dbname=nodspot_db;host=localhost';
$user = 'nodspot_pienas';
$password = 'Spotless13';

//$dsn = 'mysql:dbname=marso_pienas;host=localhost';
//$user = 'root';
//$password = '';


try {
   global $con;
    $con = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    die( 'Connection failed: ' . $e->getMessage() );
}


//$user_id_nodspot =  1;
$user_id_nodspot =  $_SESSION['userID'];
$user_id =          $_GET['user_id'];
$email =            $_GET['email'];


if ($con)
{
    switch ($action)
    {
        case "getUserID" :
        {
            $sql = "SELECT id FROM ns_users WHERE user_id = :user_id AND email = :email";
            $query = $con->prepare($sql);

            $query->execute(array(
            ':user_id' => $user_id,
            ':email' => $email
            ));

            $results = $query->fetchAll();

            //if user exists, retrieve his ID from nodspot db and save it to the session
            if ($results[0]['id'] != 0 && $results[0]['id'] != null)
            {
                $temp_user_id = $results[0]['id'];
            }
            else
            { //if not, create a new user and save user ID to session
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

            echo $temp_user_id;
            break;
        }
    }
}

function pienas() {
    echo 'shudukai';
}

?>