window.onload = function () {
    document.getElementById('start').onmouseover = startClick;
    document.getElementById('end').onmouseover = overEnd;

    // define boundaries
    var boundaries = document.querySelectorAll('div#maze div.boundary');
    for (i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
        
    }
    document.body.onmousemove = overBody;
};

var started = -1;

function startClick() {

    started = started*-1;

    var boundaries = document.querySelectorAll('div#maze div.boundary');
    for (i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");   
    }
    document.getElementById('boundary1').style.backgroundColor = 'EEEEEE';
    document.getElementById('status').innerHTML = 'Move your mouse over the "S" to begin.';
};


function overEnd() {
    var boundaries = document.querySelectorAll('div#maze div.boundary');
    var status = document.getElementById('status').innerHTML;
    var lives = document.getElementById('lives').innerHTML;

    console.log(status);//test
    console.log(parseInt(lives)); 

    //decrement the number in the lives div.
    if (started == -1) {
        alert('no cheating');
        document.getElementById('lives').innerHTML = lives-1;
    }

    //this will let someone win only if started == 1 and if the you lose dive is active
    if(status != "you lose, click S to try again" && started == 1){
        alert("you win!!");
        document.getElementById('status').innerHTML = 'You Won!!!! Move your mouse over the "S" to begin.';

    } else {
        alert("restart before trying to win");
        document.getElementById('lives').innerHTML = lives-1;
    }//if boundaries status == you lose, dont allaw you win message
};


//add you lose class 
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



