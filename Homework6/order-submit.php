<?php
    $order_type = $_POST['foods'];
    $order_qty = $_POST['quantity'];
    $filled = false;
    $f = fopen("inventory.txt", "r");
    while($f && !feof($f)) {
        $line = fgets($f);
        $line = trim($line);
        $parts = explode("\t", $line);
        if($parts[0] == $order_type) {
            if($parts[1] >= $order_qty) {
                $filled = true;
                echo "Order successful! $";
                echo $parts[2]*$order_qty;
                echo " is your total price. Here is what you ordered: ";
                for($i=0;$i<$order_qty;$i++) {
                    echo '<img src="' . $order_type . '.jpg" width="32">';
                }
            }
        }
    }
    if($filled == false) {
        echo "Error, insufficient quantity.";
    }


?>