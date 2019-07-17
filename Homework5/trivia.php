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

$triviafiles = "./trivia/trivia/"; // directory name

$json_file = fopen("trivia.json", "w") or die("Error!");


// Almost there! get these to read in the right lines
$question; //
$answer;  //



$question_s = array();
$answer_s = array();



foreach (scandir($triviafiles, 1) as $category){

  $CategoryNAME_test -> CategoryName = $category;
  $CategoryNAME_test -> Question = $question;
  $CategoryNAME_test -> Answer = $answer;

  //$myJSON = json_encode(array($CategoryNAME_test, JSON_PRETTY_PRINT));
  $myJSON = json_encode($CategoryNAME_test, JSON_PRETTY_PRINT);

  fwrite($json_file, $myJSON); 
}


fclose($json_file)
?>
