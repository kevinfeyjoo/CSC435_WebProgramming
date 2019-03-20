var y_pos = 0;
var speed = 0;

window.onload = function ballBounce() {
  var ball = document.getElementById("ball");
  ball.style.top = y_pos + "px"; //starts at top
  ball.style.left = 300 - 20 + "px"; //600 by 40 area. This puts it in the middle.
  setInterval(update, 15);
};

function update() {
  var ball = document.getElementById("ball");
  ball.style.top = y_pos + "px";
  y_pos = Math.min(y_pos + speed, 365); //ball will come to complete stop
  speed += 1;

  if (y_pos >= 360) {
    speed = -2.5 * speed / 4;//the ball will slow down
  }else if (y_pos == 365){
    speed = 0; // does not work at stopping the pall try something else
  }
}
