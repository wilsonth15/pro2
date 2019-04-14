<?php
header("Access-Control-Allow-Origin: ");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include "database.php";
// Get the posted data.
$postdata = file_get_contents("php://input");
if (!$conn) {
    die("Connection failed: " . mysql_error());


}
if(isset ($postdata) && !empty($postdata) ){
    $request = json_decode($postdata);
    

if( trim($request->region) === ''|| trim($request->type) === '' || trim($request->place) ==='' || trim($request->comment) ==='' ){
    echo "Comment is invaild!";
}
 else{ 
        $region = mysqli_real_escape_string($conn, trim($request->region));
        $type = mysqli_real_escape_string($conn, trim($request->type));
        $place = mysqli_real_escape_string($conn,trim($request->place));
        $comment = mysqli_real_escape_string($conn,trim($request->comment));
        
        $cresql = "INSERT INTO `{$region}`(`place`,`type`,`comment`) VALUES ('{$place}','{$type}','{$comment}')";
 }


if ( mysqli_query($conn,$cresql)) {
    http_response_code(201);
    $CreCom =[
        'type' => $type,
        'comment' => $comment,
        'place' => $place
    ];
    echo json_encode($CreCom);
} else {
    echo "ERROR: Could not able to execute $cresql. " .$conn->error;
}
} 


$conn->close();
?>