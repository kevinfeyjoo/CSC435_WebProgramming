/*
*
*   author @kevin feyjoo
*   last updated June 10, 2019
*
*/
(function() {
	'use strict';
    let backgorund = document.getElementById('puzzlearea');
    var movable = false;

    window.onload = function(){
        let controls = document.getElementById('controls');
        __init__();
        shuffle();
    };

    function __init__(){
        let backgorund = document.getElementById('puzzlearea');
        backgorund.innerHTML = "";
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


                tile.onclick = function(){
                    let tiles = {
                        left: tile.style.left,
                        top: tile.style.top
                    };
                    //console.log("(Left, Top): "+"("+left +","+ top+")"+" Class Name --> "+classs);
                    console.log(tiles)

                }   
            }      
        }
    }

    function shuffle() {
        var shuffle = document.getElementById('shufflebutton');
        let tile = document.querySelectorAll('#puzzlearea span');
        let empty = document.querySelectorAll('#puzzlearea .blank');
        shuffle.onclick = function(){
            console.log(empty);
            
        }
 
    /* run 1,000 times */
    };
    
})();