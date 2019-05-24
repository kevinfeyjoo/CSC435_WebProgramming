
/* 
double For loop (column and rows) to split the background picture into 15 pieces 

backgorund position

Put backgreound image in background into css in JS

 */



window.onload = function(){
    let backgorund = document.getElementById("puzzlearea");
    backgorund.style.backgroundImage = "URL('background.jpg')";
    __init__();
};

function __init__(){
    let backgorund = document.getElementById("puzzlearea");
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {
            let tile = document.createElement("span");
            tile.id = "tile-" + i + "-" + j;
            //tile.style.backgroundPosition = 
            tile.style.top = (i*130+1*i+1)+'px';
            tile.style.left = (j*1+110*j+1)+'px';
            tile.style.border = "thick solid #black";
            backgorund.appendChild(tile);

            if (i == 4 && j ==4) {
                tile.classList.add("blank"); 
                document.getElementsByClassName("blank").style.width = "90px";
                document.getElementsByClassName("blank").style.height = "90px";
                document.getElementsByClassName("blank").style.border = "thick solid #black";
                   
            }




        }
        
    }
}

function moveable(){
    let backgorund = document.getElementById("puzzlearea");
    let movable = false;
    
    let neighbors = "neighbor of" ;
/* 
find neighbors of blank tile. return a list of 4 elements (or 2 if in a corner). return a boolean value to move function. 
 */

}


function move(){
    let backgorund = document.getElementById("puzzlearea");
/* 

   */  
}



 
function shuffle() {
    var shuffle = document.getElementById('shufflebutton');
    shuffle.onclick = console.log(positions);
/* run 1,000 times */
};


var positions = [
    '0px 0px',	
    '-100px 0px',	
    '-200px 0px',	
    '-300px 0px',
    '0px -100px',
    '-100px -100px',	
    '-200px -100px',	
    '-300px -100px',
    '0px -200px',	
    '-100px -200px',	
    '-200px -200px',	
    '-300px -200px',
    '0px -300px',	
    '-100px -300px',	
    '-200px -300px'	
];




window.addEventListener('load', shuffle, false)