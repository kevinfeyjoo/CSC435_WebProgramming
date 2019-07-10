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

$triviafiles = "/Applications/AMPPS/www/CSC435_WebProgramming/Homework5/trivia/trivia/"; // directory name
$categories = scandir($triviafiles, 1); //scan directory
$count = sizeof($categories); //length of categories
foreach (scandir($triviafiles) as $categories)
echo $categories."<br>";
$trivia[$count]; //empty array the size of categories 

for($i = 0; $i < $count; $i++) {
  $triviafiles = $triviafiles.$categories[$i]."/*.txt";
  $q_count = glob($triviafiles); 
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

  $triviafiles = "/Applications/AMPPS/www/CSC435_WebProgramming/Homework5/trivia/trivia/";
}

$JSON = json_encode($trivia, JSON_PRETTY_PRINT);
echo $JSON;
$files = fopen("trivia.json", "w") or die("Error!");

fwrite($files, $JSON); 
?>
