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

////add jquery w/out touching html
    var jquery = document.createElement('script'); 
    jquery.src = 'http://code.jquery.com/jquery-3.4.0.min.js';
    jquery.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(jquery);
///////
  };


  

  function fetchCategories(){
    remove_hide();
    var cats = [];
    $.getJSON("triviatest.json", function(categories) {
      cats.push(categories);
      console.log(cats);
      var categories = jQuery.makeArray(Object.keys(categories));
      
      var count = categories.length;
      for (let i = 0; i < count; i++) {
        console.log(categories[i]);
        $list = document.getElementById("categories")
        $("<li> " + categories[i] + "</li>").appendTo($list);
        $list.onclick = showNext;
      }
      /* $.each(categories, function() { 
        console.log(categories);
        
        
      }); */
    });
}

  
  function showNext() {
    let nextbtn = document.getElementById('question-view');
    let card = document.getElementById('card');
    nextbtn.classList = '';
    card.classList = '';
  }




  function checkStatus(){
    
      
  
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
