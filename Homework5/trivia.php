<?php
/* 
*
*   Author @Kevin Feyjoo
*   
*   
*/
header("Content-Type: application/json"); 

function main()
{
  //initial scan for categ names
  $categories = scandir("./trivia/trivia/" , 1); 
  $trivia_asarray[sizeof($categories)]; //array to place categs

  for($i = 0; $i < sizeof($categories); $i++) 
  {
    //search similar files starting with $triviafiles
    $triviafiles = "./trivia/trivia/";
    $triviafiles = $triviafiles . $categories[$i] . "/*.txt"; 
    $triviafiles = glob($triviafiles);
    $Questions[sizeof($triviafiles)];
    $Answers[sizeof($triviafiles)];
    $trivia_asarray[$i]["Category"] = strtolower($categories[$i]);
    for($j = 0; $j < sizeof($triviafiles); $j++) 
    {
      $trivia = file($triviafiles[$j]);
      $Questions[$j] = array(
        "Questions" => $trivia[0]
      );
      $Answers[$j] = array(
        "Answers" => $trivia[1]
      );
    }
    //~~~Note~~~// 
    //Answer[0] belongs to Question[0]
    $trivia_asarray[$i]["Questions"] = $Questions; 
    $trivia_asarray[$i]["Answers"] = $Answers;                                       
    $Questions = array();//display the same index
    $Answers = array();
  }
  
  $JSON = json_encode($trivia_asarray, JSON_PRETTY_PRINT);
  echo $JSON;
  $myfile = fopen("trivia.json", "w+") or die("nope");
  
  fwrite($myfile, $JSON);
  fclose($myfile);

}


function remove($json, $regex)
{//in this function, remove categs with '.'

}

/* $categoryName = strtolower($_GET["e"]);

function question($categoryName){ 
  return $categoryName;
} */

//question($categoryName);
main();
?>
