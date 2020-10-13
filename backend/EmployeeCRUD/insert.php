<?php
require_once 'connect.php';
require_once 'cors.php';

cors();
$con = connect();

//print_r($_POST);

$postdata  = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    //convert json data to PHP object
    $request = json_decode($postdata);

    print_r($request);

    // Sanitize
    $name = $request->name;
    $position = $request->position;
    $phone = $request->phone;
    $passcode = $request->passcode;

    // SQL process
    $sql = "INSERT INTO employee (employeeName, employeePosition, employeePhone, employeePasscode) VALUES ('{$name}', '{$position}', '{$phone}', '{$passcode}' )";
    var_dump($sql);
    if (mysqli_query($con, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}



//cors($con);
