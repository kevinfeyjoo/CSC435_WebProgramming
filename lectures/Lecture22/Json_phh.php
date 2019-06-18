<?php
/*
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";
*/

$myObj = array(
    array(
        "person" => "John",
        "age" => 30,
        "city"=> "New York"
    ),
    array(
        "person" => "Grace",
        "age" => 32,
        "city"=> "DC"
    ),
    array(
        "person" => "Elis",
        "age" => 23,
        "city"=> "San Francisco"
 
    )
);

$myJSON = json_encode($myObj);
/* echo $myJSON; */

$myfile = fopen("people.json", "w") or die ("unable to open file!");
fwrite($myfile, $myJSON);

File_put_contents($myfile, $myJSON, FILE_APPEND | LOCK_EX);

fclose($myfile);
?>