<?php
include ("database.php");


$sql = "SELECT `id`,`type`,`place`,`comment` FROM `islands`";
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

          print json_encode($memb); //to json formal
        }
    else
        {
            http_response_code(404);
        }
        
$conn->close();
?>