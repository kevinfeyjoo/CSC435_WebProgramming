<form action="order-submit.php", method="post">
    Food item: <select name="foods">
        <?php
            $images = glob("*.jpg");
            for($i=0;$i<count($images);$i++) {
                $option = $images[$i];
                $parts = explode(".", $option);
                echo '<option value="'.$parts[0].'">'.$parts[0].'</option>';
            }
        ?>
    </select>
    <br>
    Quantity: <input type="number" name="quantity">
    <br>
    <input type="submit" value="Order">
</form>