window.onload = function() {
    let balls = document.querySelectorAll(".ball");

    let top_balls = [balls[0], balls[1], balls[2]];
    let bottom_balls = [balls[3], balls[4], balls[5]];

    var x = 700;

    top_balls[2].style.position = "absolute";
    top_balls[2].style.top = 0 +"px";
    top_balls[2].style.left = x +"px";
    console.log(bottom_balls);


}