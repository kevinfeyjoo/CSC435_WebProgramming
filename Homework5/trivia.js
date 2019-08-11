/*
*
*
*   Author @Kevin Feyjoo
*  
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
    $.getJSON("trivia.json", function(categories) {
      //console.log(categories[0].Category);
      for (let i = 0; i < categories.length; i++) {
        $list = document.getElementById("categories")
        $("<li>" + categories[i].Category + "</li>").appendTo($list);
      }
      $(document).ready(function () {
        $("ul[id*=categories] li").click(function () {
            //console.log($(this).text());
            questionOrAnswer($(this).text()); 
            // request for questions from category[i or e]
            //  
        });
    });
  });
}

  function questionOrAnswer(e) { 
    let card = document.getElementById('card');
    card.innerHTML = "";

    $.getJSON("trivia.json", function(categories) {
      $card = document.getElementById('card');
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].Category === e) {
          for (let j = 0; j < (categories[i].Question).length; j++) {
            $("<ul>").appendTo($card);
            $("<li>" + JSON.stringify(categories[i].Question[j]) + "</li>").appendTo($card);
            $("</ul>").appendTo($card);
          }  
        } else {
        }
      }
    
    });

    let x = 0;
    while (x == 0) {
      showNext();
      x++;
    }
  }

  function showNext() {
    let nextbtn = document.getElementById('question-view');
    let card = document.getElementById('card');
    nextbtn.classList = '';
    card.classList = '';
  }

  function remove_hide(){ 
        //this function will remove hidden class
        //from categories
    let rmvhid = document.getElementById('category-view');
    let rmvhid1 = document.getElementById('categories-heading');
    rmvhid1.className = '';
    rmvhid.className = '';

  }
})();
