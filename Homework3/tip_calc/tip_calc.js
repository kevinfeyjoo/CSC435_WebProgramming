function tip_calc() {
  let subtotal = parseInt(document.getElementById("subtotal").value);
  let tip = parseInt(document.getElementById("tip").value);
  tip /= 100;
  tip *= subtotal; 
  let result = subtotal + tip;

  console.log(subtotal);
  console.log(tip);
  console.log(result);
  
  

  document.getElementById("resultArea").innerHTML = "Your total is: $"+result;
}

window.onload = function() {
  document.getElementById("button").onclick = tip_calc;
}
