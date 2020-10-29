<?php

require_once 'connect.php';
require_once 'cors.php';

cors();
error_reporting(E_ERROR);

$drinkMenus = [];
$sql = "SELECT * FROM drink";
$con = connect();


if($result = mysqli_query($con,$sql)) {
    $cr = 0;

    while($row = mysqli_fetch_assoc($result)) {
        $drinkMenus[$cr]['drinkId'] = $row['drinkId'];
        $drinkMenus[$cr]['drinkName'] = $row['drinkName'];
        $drinkMenus[$cr]['drinkSize'] =$row['drinkSize'];
        $drinkMenus[$cr]['drinkPrice'] =$row['drinkPrice'];
        $drinkMenus[$cr]['drinkDescription'] =$row['drinkDescription'];
        $cr++;
    
    }
    echo json_encode($drinkMenus);
}  else {
    http_response_code(404);
}