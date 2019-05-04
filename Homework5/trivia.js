/*

Author @Kevin Feyjoo



Write a trivia.js code to call the PHP code and render the content back to the browser.  You might find the following code snippets useful
To fetch the a question from a particular category:

  function fetchCategories() {     
    let hxr = new XMLHttpRequest()     
    hrx.onload = displayCategories;     
    hrx.open("GET", "trivia.php?mode=categories");     
    hrx.send();   
} 

   function showTrivia() {     
    let url = "trivia.php?mode=category";    
    if (currentCategory) {       
      url += "&name=" + currentCategory;     
    }     
      fetch(url)     
    .then(checkStatus)     
    .then(JSON.parse)     
    .then(displayQuestion);
  }

*/
"use strict";
(function() {
  let currentCategory;

  window.onload = function() {
    document.getElementById("view-all").onclick = fetchCategories;
    document.getElementById("next").onclick = questionOrAnswer;
    

  };

  function fetchCategories(){
    //fetch variables
    let new_request = new XMLHttpRequest(),
    method = "GET",
    url = "trivia.php";//JSON 

    var trivia;
    new_request.open(method, url, true); 
    new_request.send()
  }
  
  function questionOrAnswer() {

  }




  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || 
        response.status == 0) {
      return response.text();
    } else { 
      return Promise.reject(
        new Error(response.status + ": " + response.statusText));
    }
  }
})();
