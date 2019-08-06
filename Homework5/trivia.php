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


/* 



//wrap json in []
fwrite($json_file, "[");
foreach (scandir($triviafiles, 1) as $category){

  $newJson = array(//lets try to make this json friendly
    
    'Category' =>  $category,
    'Question' =>  $question,
    'Answer' =>  $answer
    
  ); 
  $myJSON = json_encode($newJson, JSON_PRETTY_PRINT);//why wont json work
  
  fwrite($json_file, $myJSON); //write in correct json format
  fwrite($json_file, ", ");
}
fwrite($json_file, "]");
//wrap json in []


 */



function categories()//
{
  $cat_file = fopen("categories.json", "w+") or die("Error!");
  fwrite($cat_file, "[");
  $triviafiles = "./trivia/trivia/";
  foreach (scandir($triviafiles, 1) as $category){
    $categories = [
      "Category" => $category
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

  $fp = fopen('categories.json', 'w'); 
  fwrite($fp, implode('', $lines)); 
  fwrite($fp, ']');
  fclose($fp);
}





categories();
fixJson();

/* 




/////~//currently being printed to json file
$json_filee = "trivia.json";
$filesize = filesize($json_filee);
$fileo = fopen($json_filee, "r");
$filetext = fread($fileo, $filesize );
echo ( "\n$filetext" );
/////




fclose($json_file);//end */
?>
