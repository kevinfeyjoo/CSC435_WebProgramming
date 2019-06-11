/*
*
*   author @kevin feyjoo
*   last updated June 10, 2019
*
*/
(function() {
	'use strict';
    let backgorund = document.getElementById('puzzlearea');

    window.onload = function(){
        let controls = document.getElementById('controls');
        __init__();

    };

    function __init__(){
        let backgorund = document.getElementById('puzzlearea');
        backgorund.style.backgroundImage = 'URL("grinch4.png")';

        var number = 1;
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                let tile = document.createElement('span');
                tile.id = 'tile-' + i + '-' + j;
                tile.style.top = (i*100)+'px';
                tile.style.left = (j*1+99*j)+'px';
                
                
                
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














    function moveable(tile){
        let backgorund = document.getElementById('puzzlearea');
        let movable = false;
        
        let neighbors = 'neighbor of' ;
    /* 
    find neighbors of blank tile. return a list of 4 elements (or 2 if in a corner).
    return a boolean value to move function. 
    */
        if(tile.clasName != 'blank'){
            // Tries to get empty adjacent tile
            let empty = querySelectorAll('#puzzlearea .blank');
            console.log(empty);
			
			if(empty){
                // Temporary data
				var tmp = {style: tile.style.cssText, id: tile.id};
				
				// Exchanges id and style values
				tile.style.cssText = emptytile.style.cssText;
				tile.id = emptytile.id;
				emptytile.style.cssText = tmp.style;
				emptytile.id = tmp.id;
				
			}

        }
        


    function adjacentTiles(tile){
/* 
        this function will take each row and find where blank
        is in relation to others
         */

        
    }















}


    function animation(tile, tile1){
        let backgorund = document.getElementById('puzzlearea');
    /* 

    */  
        
    }



    
    function shuffle() {
        var shuffle = document.getElementById('shufflebutton');
        let tile = document.querySelectorAll('#puzzlearea span');
        let empty = document.querySelectorAll('#puzzlearea .blank');
        console.log(empty);
 
    /* run 1,000 times */
    };
    window.addEventListener('load', shuffle, false)//this allows shufft to run without pressing 

})();