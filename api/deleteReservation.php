<?php
    header('Access-Control-Allow-Origin: *');
    require('database.php');
    global $db;
    $now = new DateTime();
    echo $now->format('Y-m-d-');
        $q = $db->prepare("DELETE FROM reservations WHERE date_reservation <= now() - INTERVAL 20 MINUTE ");
        $q->execute();
        echo 'Delete OK';