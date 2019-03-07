<?php
    header('Access-Control-Allow-Origin: *');
    require('database.php');
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $passwordconfirm = $_POST["passwordconfirm"];
 
    // $message = "";
    // $firstnameErr = "";
    // $lastnameErr = "";
    // $usernameErr = "";
    if(isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['username'])  && isset($_POST['password']) && isset($_POST['passwordconfirm'])){
        // $username_verify_req = "SELECT COUNT(*) FROM users WHERE username = :username LIMIT 1";
        // if( $res = $db->query($username_verify_req) ){
        //     if($res->fetchColumn() > 0){
        //         // $message = "Votre pseudo est déjà utilisé.";
        //         echo 'pseudo déjà utilisé';
        //     }else{
                $req = $db->prepare("INSERT INTO users (firstname, lastname, username, password, passwordconfirm) VALUES (:firstname, :lastname, :username, :password, :passwordconfirm)");
                
                try{
                    $req->execute(array(
                        "firstname" => $_POST["firstname"],
                        "lastname" => $_POST["lastname"],
                        "username" => $_POST["username"],
                        "password" => $_POST["password"],
                        "passwordconfirm" => $_POST["passwordconfirm"]
                    ));
                    
                    $return_arr[] = array(
                        "username" => $username,
                        "password" => $password);
                    echo json_encode($return_arr);
                }catch (Exception $e){
                    echo "error";
                }
            
        
    }
?>