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


header("Content-Type: application/json"); 
$categories = scandir("./trivia/trivia/" , 1); //initial scan for categ names
$trivia_asarray[sizeof($categories)];         //array to place categs



///place each category in array
for($i = 0; $i < sizeof($categories; $i++) { 
  //search similar files starting with $triviafiles, use global version
  $triviafiles = $triviafiles . $categories[$i] . "/*.txt"; 
  $triviafiles_glob = glob($triviafiles);

  $Questions[sizeof($triviafiles_glob)];
  $Answers[sizeof($triviafiles_glob)];

  //push categs into array
  $trivia_asarray[$i]["Category"] = $categories[$i];

  //place questions and answers in corresponding index
  for($j = 0; $j < sizeof($triviafiles_glob); $j++) {

    $info = file($triviafiles_glob[$j]);

    $Questions[$j] = array(
      "Questions" => $info[0]
    );

    $Answers[$j] = array(
      "Answers" => $info[1]
    );
  }

  $trivia_asarray[$i]["Question"] = $Questions;
  $trivia_asarray[$i]["Answer"] = $Answers;

  $Questions = array();
  $Answers = array();

  $triviafiles = "./trivia/trivia/";
}

$JSON = json_encode($trivia_asarray, JSON_PRETTY_PRINT);
echo $JSON;
$myfile = fopen("trivia.json", "w+") or die("nope");

fwrite($myfile, $JSON);
fclose($myfile);















/* 








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
      "$categories" => [
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


for ($i=0; $i < $count; $i++) { 
  # code...
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
fixJson(); */
?>
