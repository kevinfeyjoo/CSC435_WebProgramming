window.onload = function() {
  document.getElementById("demo").onclick = function() {
    alert("hello world")
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function myFunction() {
  document.getElementById('demo1').innerHTML = getRndInteger(1,10);
}
