<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hk";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$data = mysqli_query($conn,"SELECT * FROM `memberdata`");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysql_error());
}


   

?>