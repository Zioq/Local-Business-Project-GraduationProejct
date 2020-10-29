<?php

require_once 'connect.php';
require_once 'cors.php';

cors();
error_reporting(E_ERROR);

$menus = [];
$sql = "SELECT * FROM food";
$con = connect();


if($result = mysqli_query($con,$sql)) {
    $cr = 0;

    while($row = mysqli_fetch_assoc($result)) {
        $menus[$cr]['foodId'] = $row['foodId'];
        $menus[$cr]['foodName'] = $row['foodName'];
        $menus[$cr]['foodSize'] =$row['foodSize'];
        $menus[$cr]['foodPrice'] =$row['foodPrice'];
        $menus[$cr]['foodDescription'] =$row['foodDescription'];
        $cr++;
    
    }
    echo json_encode($menus);
}  else {
    http_response_code(404);
}