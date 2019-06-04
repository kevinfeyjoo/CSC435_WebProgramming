/*
*
*   author @kevin feyjoo
*   last updated May 30, 2019
*
*/
(function() {
	'use strict';


window.onload = function(){
    let controls = document.getElementById('controls');
    controls.innerHTML = '<button id="shufflebutton">Shuffle</button>' + '<button id="chosedif">Shuffle IMG</button>';

    chooseimg();
    __init__();

};

function chooseimg(){
    
    let chosedif = document.getElementById('chosedif');
    let background = document.getElementById('puzzlearea');
    chosedif.onclick = function(){
        //create background list

        for(let i = 0; i < 5; i++){
            //choose a random img
            var imgs = ['grinch4.png','grinch5.png', 'grinch6.png', 'grinch7.png'];
        }
    }
}

function __init__(){
    let backgorund = document.getElementById('puzzlearea');
    backgorund.style.backgroundImage = 'URL("grinch5.png")';

    var number = 1;
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let tile = document.createElement('span');
            tile.id = 'tile-' + i + '-' + j;
            tile.style.top = (i*102)+'px';
            tile.style.left = (j*1+100*j)+'px';
            
            
            
            /* ¬ßeføre s†¥le iπ js. s†¥le iπ css … ®*/
            
            tile.style.position = 'absolute';
            tile.style.display = 'block';
            tile.style.width = '100px';
            tile.style.height = '100px';
            tile.style.border = '2px solid black';
            if (number <= 15) {
                tile.classList.add('number');
				tile.innerHTML = (number++).toString();
            } else {
                tile.className = 'blank';
            }
            
            
            backgorund.appendChild(tile);   
        }      
    }
}

function moveable(){
    let backgorund = document.getElementById('puzzlearea');
    let movable = false;
    
    let neighbors = 'neighbor of' ;
/* 
find neighbors of blank tile. return a list of 4 elements (or 2 if in a corner). return a boolean value to move function. 
 */

}


function move(){
    let backgorund = document.getElementById('puzzlearea');
/* 

   */  
}



 
function shuffle() {
    var shuffle = document.getElementById('shufflebutton');
    let test = document.querySelectorAll('#puzzlearea span');



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

    

    /* for (let x = 0; x < 15; x++) {
        //for i in tiles, positions[i]
        console.log();
        test[x].innerHTML = "<h1>"+parseInt(x+1)+"</h1>";
        
        
    } */
    shuffle.onclick = console.log(test[1]);
/* run 1,000 times */
};
window.addEventListener('load', shuffle, false)//this allows shufft to run without pressing 


})();