<?php
require "database.php";
// Get the posted data.
$postdata = file_get_contents("php://input");




if(isset ($postdata) && !empty($postdata) ){
    $request = json_decode($postdata);


if( trim($request->email) === '' || trim($request->password) ==='' ){
    echo "Email or password is invaild!";
}
 else{
        $email = mysqli_real_escape_string($conn, $postdata->email);
        $password = mysqli_real_escape_string($conn,$postdata->password);
        print("$email"&"$password");
        $sql = "SELECT FROM `profile` WHERE `email` ='$email' and `password`='$password'";
        $result = mysqli_query($conn,$sql);
 }


if ( mysqli_num_rows($result) == 1) {
    echo"login success!";
    
} else {
    echo "ERROR: Could not able to execute $sql. " .$conn->error;
}
}
$conn->close();
?>