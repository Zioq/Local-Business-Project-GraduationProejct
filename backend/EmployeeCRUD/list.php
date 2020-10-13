<?php
require_once 'connect.php';
require_once 'cors.php';


cors();
error_reporting(E_ERROR);

$employees =  [];
$sql = "SELECT * FROM employee";
$con = connect();


if($result = mysqli_query($con,$sql)) {
    $cr = 0;

    while($row = mysqli_fetch_assoc($result)) {
        $employees[$cr]['employeeId'] = $row['employeeId'];
        $employees[$cr]['employeeName'] = $row['employeeName'];
        $employees[$cr]['employeePosition'] = $row['employeePosition'];
        $employees[$cr]['employeePhone'] = $row['employeePhone'];
        $cr++;
    }

    echo json_encode($employees);
} else {
    http_response_code(404);
}
