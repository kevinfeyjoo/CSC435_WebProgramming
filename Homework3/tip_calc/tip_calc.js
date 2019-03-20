let subtotal = document.getElementById("subtotal").querySelectorAll(".subtotal").value;
let tip = document.getElementById("tip").querySelectorAll(".tip").value;


function tip_calc() {
  var result = subtotal + subtotal * (tip/100) ;
  document.getElementById('resultArea').innerHTML = result;
}

window.onload = function() {
  document.getElementById('button').onclick = tip_calc;
}
