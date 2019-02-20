<?php
header('Access-Control-Allow-Origin:*');

$user = [];

if($_POST["username"] == "admin" && $_POST["password"] == "admin"){
    $user = [
        "username" => "admin"
    ];
}
    echo json_encode($user);
