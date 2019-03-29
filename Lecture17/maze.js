window.onload = function () {
    document.getElementById('start').onclick = startClick;
    document.getElementById('end').onclick = overEnd;

    // define boundaries
    var boundaries = document.querySelectorAll('div#maze div.boundary');
    for (i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
        
    }
    document.body.onmousemove = overBody;
};


function startClick() {
    var boundaries = document.querySelectorAll('div#maze div.boundary');
    for (i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");   
    }
    document.getElementById('boundary1').style.backgroundColor = 'EEEEEE';
    document.getElementById('status').innerHTML = 'Move your mouse over the "S" to begin.';
};


function overEnd() {
    /*var boundaries = document.querySelectorAll('div#maze div.boundary');
    for (i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");   
    }*/
    alert("you win!!");

};


function overBoundary(){
    var boundaries = document.querySelectorAll('div#maze div.boundary');
    for (i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");   
    }
    document.getElementById("status").innerHTML = "you lose, click S to try again";
    alert("you lose. try again...");
};


function overBody(){
    document.getElementById('boundary1').style.backgroundColor = 'EEEEEE';
};



