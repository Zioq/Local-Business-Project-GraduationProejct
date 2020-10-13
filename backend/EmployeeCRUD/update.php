<?php
require_once 'connect.php';
require_once 'cors.php';

cors();
$con = connect();

// Get the poseted data
$postdata  = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    //convert json data to PHP object
    $request = json_decode($postdata);

    print_r($request);

    //Sanitize
    $id = $_GET['id'];
    $name = $request->name;
    $position = $request->position;
    $phone = $request->phone;
    $passcode = $request->passcode;

    // Update
    $sql = "UPDATE employee SET employeeName = '{$name}',employeePosition = '{$position}', employeePhone = '{$phone}', employeePasscode = '{$passcode}' WHERE employeeId = '{$id}' LIMIT 1";
    var_dump($sql);
    if (mysqli_query($con, $sql)) {
        http_response_code(204);
    } else {
        http_response_code(422);
    }
}
