<?php
    header('Access-Control-Allow-Origin: *');
    require('database.php');
    global $db;
    // $nbVelo = $_POST['nb_bikes']
    if(isset($_POST['stationId']) && isset($_POST['userId']) && isset($_POST['nb_bikes']) ){
        $id_station = $_POST['stationId'];
        $id_user = $_POST['userId'];
        $nb_bikes = $_POST['nb_bikes'];
        $data = [
            'id_station' => $id_station,
            'id_user' => $id_user,
            'nb_bikes' => $nb_bikes
        ];
        //SELECT ALL RESERVATIONS
        //$q = $db->prepare("SELECT * FROM `reservations` WHERE `id_station` = '".$id_station."' AND `user_id` = '".$id_user."' "); 
       // DELETE ALL RESERVATIONS > 20 MINUTES
        // $q = $db->prepare("DELETE FROM reservations WHERE date_reservation <= now() - INTERVAL 20 MINUTE ");
        // $q->execute();
        // $count = $q->rowCount();
       // SI RESERVATION DU MEME USER SUR LA MEME STATION ===>UPDATE SQL
       // SI PAS DE RESERVATION ===> INSERT
       
       $sql = "INSERT INTO reservations (id_station, id_user, nb_bikes) VALUES (:id_station, :id_user, :nb_bikes)";
        if( $db->prepare($sql)->execute($data)){
            echo 'OK';
        }
     
    }