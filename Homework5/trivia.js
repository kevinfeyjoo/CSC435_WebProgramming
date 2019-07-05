/*
*
*
*   Author @Kevin Feyjoo
*
*
*
*
*
*Write a trivia.js code to call the PHP code and render the content back to the browser.  You might find the following code snippets useful
*To fetch the a question from a particular category:
*
*function fetchCategories() {     
*    let hxr = new XMLHttpRequest()     
*    hrx.onload = displayCategories;     
*    hrx.open("GET", "trivia.php?mode=categories");     
*    hrx.send();   
*} 
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
    //this removes the hidden features once clicked
    let rmvhid = document.getElementById('category-view');
    let rmvhid1 = document.getElementById('categories-heading');
    rmvhid1.className = '';
    rmvhid.className = '';



    //fetch variables
    let xhttp = new XMLHttpRequest(),
    method = "GET",
    url = "trivia.php";//JSON 

    let trivia;
    
   
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("demo").innerHTML = this.responseText;
        trivia = JSON.parse(this.responseText);
        var list = document.getElementById("categories");
        for (var i = 0; i < trivia.length; i++) {
          var category = document.createElement("LI");
          var res = document.createTextNode(trivia[i].CategoryName);
          category.appendChild(res);
          list.appendChild(category);
          category.classList.add("category");

      }
    }
  }
    xhttp.open(method, url, true); 
    xhttp.send()
}

  function questionOrAnswer() {



  }

})();
