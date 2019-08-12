/*
*
*
*   Author @Kevin Feyjoo
*  
*
*/
(function() {
  let currentQuestion;
  let currentAnswer;

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
        });
      });
  });
}

  function questionOrAnswer(e) { 
    let card = document.getElementById('card');
    card.innerHTML = "";

    $.getJSON("trivia.json", function(categories) {
      $card = document.getElementById('card');
      $("<ul id = questions>").appendTo($card);
      $cardlist = document.getElementById("questions");
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].Category === e) {
          for (let j = 0; j < (categories[i].Questions).length; j++) {
            $regex = '/[{}]/g, ""';//doesn't work in jQuery
            $x = JSON.stringify(categories[i].Questions[j]).replace($regex);
            $("<li id = " + i + "-"+ j + ">" + $x + "</li>").appendTo($cardlist);
            $("<br> </br>").appendTo($cardlist);
            //console.log(categories[i].Answers[j]);
          }
        }
      }
      $("</ul>").appendTo($card);
      $(document).ready(function () {
        $("ul[id*=questions] li").click(function (event) {
          //console.log($(this).text());
          showAnswer(e, event.target.id); //add indices 
        });
      }); 
    });

    let x = 0;
    while (x == 0) {
      showNext();
      x++;
    }
  }

  function showAnswer(e, f){
    var card = document.getElementById('card');
    card.innerHTML = "";
    var [a, b] = f.split('-');
    //console.log(a+" - "+b);//a doesnt matter here
    $.getJSON("trivia.json", function(categories) {
      $card = document.getElementById('card');
      $("<ul id = questions>").appendTo($card);
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].Category === e) {
          a-1;
          $in = JSON.stringify(categories[i].Answers[b]);
          //console.log(categories[i].Category + ", \n" + $in + ", \n" + $in);
          $("<li>" + $in + "</li>").appendTo($card);
          //***Theres a bug not choosing clicked answer****//
        }
      }$("</ul>").appendTo($card);
  });
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
