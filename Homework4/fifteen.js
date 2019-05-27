/*

author @kevin feyjoo
last updated May 25, 2019

*/
(function() {
	"use strict";


window.onload = function(){
    __init__();

};

function __init__(){
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
    let backgorund = document.getElementById("puzzlearea");
    //backgorund.style.backgroundImage = "URL('background.jpg')";

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let tile = document.createElement("div");
            tile.id = "tile-" + i + "-" + j;
            tile.style.top = (i*102+122)+'px';
            tile.style.left = (j*1+100*j+1)+'px';
            //tile.style.backgroundPosition = positions[i];

            
            backgorund.appendChild(tile);





            

            
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
    let test = document.querySelectorAll("#puzzlearea div");
    console.log(test);
    //shuffle.onclick = console.log(positions);
/* run 1,000 times */
};
window.addEventListener('load', shuffle, false)


})();