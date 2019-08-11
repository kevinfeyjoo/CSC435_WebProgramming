<?php
/* 
*
*   Author @Kevin Feyjoo
*
*
*/
header("Content-Type: application/json"); 

function main(){
  //initial scan for categ names
  $categories = scandir("./trivia/trivia/" , 1); 
  $trivia_asarray[sizeof($categories)]; //array to place categs

  for($i = 0; $i < sizeof($categories); $i++) {
    //search similar files starting with $triviafiles, use global version
    $triviafiles = $triviafiles . $categories[$i] . "/*.txt"; 
    $triviafiles_glob = glob($triviafiles);
  
    $Questions[sizeof($triviafiles_glob)];
    $Answers[sizeof($triviafiles_glob)];
  
    //push categs into array
    $trivia_asarray[$i]["Category"] = strtolower($categories[$i]);
  
    //place questions and answers in corresponding index
    for($j = 0; $j < sizeof($triviafiles_glob); $j++) {
      $trivia = file($triviafiles_glob[$j]);

      if ($trivia[0] || $trivia[1] === NULL) {
        $trivia[0] = "";
        $trivia[1] = "";
      }
      $Questions[$j] = array(
        "Questions" => $trivia[0]
      );
      $Answers[$j] = array(
        "Answers" => $trivia[1]
      );
    }
  
    //Answer[0] belongs to Question[0] and so on....
    $trivia_asarray[$i]["Question"] = $Questions; // You now made an array
    $trivia_asarray[$i]["Answer"] = $Answers; //  for all questions
                                            // and corresponding answers
                                            
    $Questions = array();
    $Answers = array();
  
    $triviafiles = "./trivia/trivia/";
  }
  
  $JSON = json_encode($trivia_asarray, JSON_PRETTY_PRINT);
  return $JSON;
  $myfile = fopen("trivia.json", "w+") or die("nope");
  
  fwrite($myfile, $JSON);
  fclose($myfile);

}


function remove($json, $regex){//in this function, remove categs with '.'

}


/* $categoryName = strtolower($_GET["e"]);

function question($categoryName){//requires the clicked LI 
  return "$categoryName is the shit";
} */

//question($categoryName);
main();
?>
