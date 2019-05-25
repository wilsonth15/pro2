<?php
include ("database.php");

$postdata = file_get_contents("php://input");

if (!$conn) {
    die("Connection failed: " . mysql_error());

}
if(isset ($postdata) && !empty($postdata) ){
    $request = json_decode($postdata);
    print json_encode($request);
    

if(  trim($request->id) === '' & trim($request->type) === '' & trim($request->place) ==='' & trim($request->comment) ===''){
    echo "Comment is invaild!";
}
 else{ 
        $memb=[];  
        $place = mysqli_real_escape_string($conn,trim($request->place));
        $sql = "SELECT `id`,`type`,`place`,`comment` FROM `{$place}`";
        $result= $conn->query($sql);
 
    if ($result->num_rows> 0)
        {
        $i= 0 ;
            while($row = mysqli_fetch_assoc($result))
            {
                //rows data->memb array
                $memb[$i]['id'] = $row['id'];
                $memb[$i]['place'] = $row['place'];
                $memb[$i]['type'] = $row['type'];
                $memb[$i]['comment'] = $row['comment'];
                $i++;
            }

          print json_encode(['data'=>$memb]); //to json formal
        }
    else
        {
            http_response_code(404);
        }
    

if ( mysqli_query($conn,$sql)) {
    http_response_code(201);
    $CreCom =[
        'id' => $id,
        'comment' => $comment,
        'place' => $place,
        'type' =>$type
    ];
    echo json_encode($CreCom);
} else {
    echo "ERROR: Could not able to execute $sql. " .$conn->error;
}
}
} 
$conn->close();
?>