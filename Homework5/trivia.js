/*
*
*
*   Author @Kevin Feyjoo
*
*
*
*
*
*   Write a trivia.js code to call the PHP code and render the content back to the browser.  You might find the following code snippets useful
*   To fetch the a question from a particular category:
*
*   function fetchCategories() {     
*      let hxr = new XMLHttpRequest()     
*      hrx.onload = displayCategories;     
*      hrx.open("GET", "trivia.php?mode=categories");     
*      hrx.send();   
*   } 
*
*
*
*   function showTrivia() {     
*    let url = "trivia.php?mode=category";    
*    if (currentCategory) {       
*      url += "&name=" + currentCategory;     
*    }     
*      fetch(url)     
*    .then(checkStatus)     
*    .then(JSON.parse)     
*    .then(displayQuestion);
*  }
*
*/
(function() {
  let currentCategory;

  window.onload = function() {
    document.getElementById("view-all").onclick = fetchCategories;
    document.getElementById("next").onclick = questionOrAnswer;
  };


  

  function fetchCategories(){
    remove_hide();

    //fetch JSON data
    let xhttp = new XMLHttpRequest(),
    method = "GET",
    url = "trivia.php";//JSON 

    
    
   
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let trivia = (this.responseText).toString;
        trivia = JSON.parse(trivia);
        let list = document.getElementById("categories");
        for (let i = 0; i < trivia.length; i++) {
          let category = document.createElement("LI"); //create a clickables li
          let res = document.createTextNode(trivia[i].CategoryName);
          category.appendChild(res);
          list.appendChild(category);
          category.classList.add("category");

      }
    }
  }
    xhttp.open(method, url, true); 
    xhttp.send()
}







  function checkStatus(){
      
  }

  function showTrivia(){  
    let url = "trivia.php?mode=category";    
    if (currentCategory) {       
      url += "&name=" + currentCategory;     
    }     
      fetch(url)     
    .then(checkStatus)     
    .then(JSON.parse)
  }

  function remove_hide(){//whenever something is shown, this function will remove hidden class
    let x; //= button pressed 
        //this removes the hidden features once clicked
    let rmvhid = document.getElementById('category-view');
    let rmvhid1 = document.getElementById('categories-heading');
    let nextbtn = document.getElementById('question-view');
    let card = document.getElementById('card');
    rmvhid1.className = '';
    rmvhid.className = '';

  }

  function questionOrAnswer() {

  }

})();
