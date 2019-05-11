<?php

    $book_arr = array();
    $selected_category = $_GET['category'];
    $f = fopen("books.txt", "r");
    while($f && !feof($f)) {
        $line = fgets($f);
        $line = trim($line);
        $parts = explode("|", $line);
        $category = $parts[2];
        if($category == $selected_category) {
            $book_arr[] = $parts;
        }
    }
    fclose($f);

    echo '{"count":' . count($book_arr) . ',';
    echo '"books":[ ';
    for($i=0;$i<count($book_arr);$i++) {
        $parts = $book_arr[$i];
        $title = $parts[0];
        $author = $parts[1];
        $category = $parts[2];
        $year = $parts[3];
        $price = $parts[4];
        if($i != 0) {
            echo ', ';
        }
        echo '{';
        echo '"year":"' . $year . '",';
        echo '"price":' . $price . ',';
        echo '"title":"' . $title . '",';
        echo '"author":"' . $author . '"';


        echo '}';
    }
    echo '] }';
?>


