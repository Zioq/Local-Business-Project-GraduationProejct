<?php
require_once 'connect.php';
require_once 'cors.php';

cors();
$con = connect();

$id = $_GET['id'];
$sql = "DELETE FROM food WHERE foodId = {$id}";

if(mysqli_query($con,$sql)) {
    http_response_code(204);
} else {
    http_response_code(422);
}