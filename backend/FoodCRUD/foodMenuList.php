<?php

require_once 'connect.php';
require_once 'cors.php';

cors();
error_reporting(E_ERROR);

$FoodMenus = [];
$sql = "SELECT * FROM food";
$con = connect();


if($result = mysqli_query($con,$sql)) {
    $cr = 0;

    while($row = mysqli_fetch_assoc($result)) {
        $FoodMenus[$cr]['foodId'] = $row['foodId'];
        $FoodMenus[$cr]['foodName'] = $row['foodName'];
        $FoodMenus[$cr]['foodSize'] =$row['foodSize'];
        $FoodMenus[$cr]['foodPrice'] =$row['foodPrice'];
        $FoodMenus[$cr]['foodDescription'] =$row['foodDescription'];
        $cr++;
    
    }
    echo json_encode($FoodMenus);
}  else {
    http_response_code(404);
}