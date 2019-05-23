var y_pos = 0;
var speed = 0;

window.onload = function ballBounce() {
  var ball = document.getElementById("ball");
  ball.style.top = y_pos + "px"; //starts at top
  ball.style.left = 300 - 20 + "px"; //600 by 40 area. This puts it in the middle.
  setInterval(update, 15);
  setTimeout(ballStop, 500);
};

function update() {
  var ball = document.getElementById("ball");
  ball.style.top = y_pos + "px";
  y_pos = Math.min(y_pos + speed, 365); //365 is the bottom of the box
  speed += 1;
  let x = 4; //this will increase to slow the ball down
  x += .1;

  if (y_pos >= 360) {
    speed *= -2.5 / x; //the ball will slow down
  };
};

function ballStop(){
  clearInterval(update);
};