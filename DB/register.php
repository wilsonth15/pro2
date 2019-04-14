<?php
include "database.php";
// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset ($postdata) && !empty($postdata) ){
    $request = json_decode($postdata);
    

if( trim($request->username) === ''||trim($request->email) === '' || trim($request->password) ==='' ){
    echo "Username or Email or Password is invaild!";
}
 else{
        $username = mysqli_real_escape_string($conn, trim($request->username));
        $email = mysqli_real_escape_string($conn, trim($request->email));
        $password = mysqli_real_escape_string($conn,trim($request->password));
        $sql = "INSERT INTO `profile`(`username`,`email`,`password`) VALUES ('{$username}','{$email}','{$password}')";
 }


if ( mysqli_query($conn,$sql)) {
    http_response_code(201);
    $regis =[
        'username' => $username,
        'email' => $email,
        'password' => $password
    ];
    echo json_encode($regis);
} else {
    echo "ERROR: Could not able to execute $sql. " .$conn->error;
}
}
$conn->close();
?>