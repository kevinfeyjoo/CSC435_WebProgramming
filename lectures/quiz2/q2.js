function Guess(){
  console.log(x);

  //random number
  var y = Math.floor(Math.random());
  console.log(y);
  //guess
  var x = document.getElementById("number").value;

  var guesses = document.getElementById("guesses");

  guesses.appendChild(document.createTextNode(x));
  //list.appendChild(guesses);
}
