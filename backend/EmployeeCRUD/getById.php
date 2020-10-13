<?php
require_once 'connect.php';
require_once 'cors.php';

cors();
$con = connect();
$id = $_GET['id'];

// Get by id
$sql = "SELECT * FROM employee WHERE employeeId = {$id} LIMIT 1";

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);
echo $json = json_encode($row);

exit;