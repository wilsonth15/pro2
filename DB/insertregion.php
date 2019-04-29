<?php
    include ("database.php");
    
    if (!$conn) {
    die("Connection failed: " . mysql_error());
    }

    $postdata = file_get_contents("php://input");
    if (isset ($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    if( ($request) === '')
    {
        echo "Error!";
    }
    else{
    echo $request;
}
}
?>  