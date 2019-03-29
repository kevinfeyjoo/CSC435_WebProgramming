function tip_calc(subtotal, tip) {
  var subtotal = document.getElementById("subtotal").querySelectorAll(".subtotal").value;
  var tip = document.getElementById("tip").querySelectorAll(".tip").value;
  var result = subtotal + subtotal * (tip/100) ;

  if (subtotal != isNaN) {
    alert("NaN. heres ane example of it working");
    result = "$Moneyyyy";
  } else {
    result = "$"+result;
  }

  document.getElementById("resultArea").innerHTML = result;
}

window.onload = function() {
  document.getElementById("button").onclick = tip_calc;
}
