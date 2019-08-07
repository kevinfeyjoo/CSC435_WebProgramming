<?php
/* 
*
*   Author @Kevin Feyjoo
*
*   Write a trivia.php code to read the .txt files 
*   (from particular category specified by the fetch()) 
*   and output as JSON.  You can use $_GET[“mode”], scandir 
*   and json_encode(). 
* 
*   $triviafiles = "../trivia/";
*   $categoryName = strtolower($_GET["name"]);
*   $trivia = glob($triviafiles . $categoryName . "/*.txt");
*
*   To print the question and answer, you can:
*
*   print(json_encode(array("question" => $question, "answer" => $answer)));
*
*
*/


// Define variables
header("Content-Type: application/json"); 
$triviafiles = "./trivia/trivia/"; //root directory of trivia.
// note ** use javascript DOM elem to create these variables
$json_file = fopen("trivia.json", "w+") or die("Error!");
$trivia = glob($triviafiles . $categoryName . "/*.txt");




// Almost there! get these to read in the right lines
$question; //scandir $triviafile + "CategoryName";
$answer;  //
$categoryName = strtolower($_GET["name"]); //gets category name from html file


function categories()//
{
  $cat_file = fopen("categories.json", "w+") or die("Error!");
  fwrite($cat_file, "[");
  $triviafiles = "./trivia/trivia/";
  foreach (scandir($triviafiles, 1) as $category){
    $categories = [
      "blajbceu" => [
        "Category" => $category,
        "Question" => $question,
        "Answer" => $answer
      ]
    ];
    $json = json_encode($categories, JSON_PRETTY_PRINT)."\n";
    fwrite($cat_file, $json);
    fwrite($cat_file, ", ");
    echo $json . "\n";
    //fwrite($cat_file, "\n");
  };
  
  //print_r($categories = file("categories.json"));//
  fwrite($cat_file, "]");
  fclose($cat_file);
}







function fixJson(){
  $lines = file('categories.json'); 
  $last = sizeof($lines) - 1 ; 
  unset($lines[$last]);

  $delet = fopen('categories.json', 'w'); 
  fwrite($delet, implode('', $lines)); //remove last line
  fwrite($delet, ']');                 //and add ] for 
  fclose($delet);                      //correct JSON format
}





categories();
fixJson();
?>
