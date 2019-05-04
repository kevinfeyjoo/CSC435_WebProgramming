<?php
/* 

Author @Kevin Feyjoo

Helped by @Eduardo Gonzales




Write a trivia.php code to read the .txt files 
(from particular category specified by the fetch()) 
and output as JSON.  You can use $_GET[“mode”], scandir 
and json_encode(). 
 
$triviafiles = "../trivia/";
$categoryName = strtolower($_GET["name"]);
$trivia = glob($triviafiles . $categoryName . "/*.txt");

To print the question and answer, you can:

print(json_encode(array("question" => $question, "answer" => $answer)));


*/


// Define variables
// directory name and scan
$directory = "/trivia/trivia/";
$categories = scandir($directory);
$count = sizeof($categories);
$trivia[$count];

for($i =0; $i < $count; $i++) {
  $directory = $directory.$categories[$i]."/*.txt";
  $q_count = glob($directory); 
  $q_count_size = sizeof($q_count);
  //The glob() function searches for all the pathnames matching 
//pattern /trivia/trivia 

  $qestions[$q_count_size];
  $answers[$q_count_size];
  $trivia[$i]["CategoryName"] = $category[$i];

  for($j = 0; $j < $q_count_size; $j++) {

    $info = file($q_count[$j]);

    $qestions[$j] = array(
      "Question" => $info[0],
    );

    $answers[$j] = array(
      "Answer" => $info[1],
    );
  }

  $trivia[$i]["Question"] = $qestions;
  $trivia[$i]["Answer"] = $answers;

  $qestions = array();
  $answers = array();

  $directory = "trivia/trivia/";
}

$JSON = json_encode($trivia, JSON_PRETTY_PRINT);
echo $JSON;
$files = fopen("trivia.json", "w") or die("nope");

fwrite($files, $JSON);
?>