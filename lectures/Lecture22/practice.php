<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<!-- 

This is how you start php code
 -->
<?php
echo "<h1> hello </h1>";


$base = (int) $_GET["base"];
$exp = (int) $_GET["exponent"]; 
$result = pow($base, $exp);
print $result;

?>


</body>
</html>