/*
*
*   author @kevin feyjoo
*   last updated June 17, 2019
*
*/
(function () {
    'use strict';
    let background = document.getElementById('puzzlearea');
    var movable = false;
    let tile = document.querySelectorAll('#puzzlearea span');
    
    window.onload = function () {
        let controls = document.getElementById('controls');
        __init__();
        shuffle();
    };

    function __init__() {
        let background = document.getElementById('puzzlearea');
        background.innerHTML = "";

        var number = 1;
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {

                /* _______create tiles___________ */
                let blankL, blankT;
                let tile = document.createElement('span');
                tile.id = 'tile-' + i + '-' + j;
                tile.style.top = (i * 98) + 'px';
                tile.style.left = (j + 96 * j) + 'px';
                tile.style.backgroundImage = 'URL("background1.jpeg")';

                /*______________S†¥le______________*/

                tile.style.position = 'absolute';
                tile.style.display = 'block';
                tile.style.width = '90px';
                tile.style.height = '90px';
                tile.style.border = '4px solid black';

                /* ____________Add Number___________ */
                if (i*j == 9) {
                    tile.style.backgroundImage = 'none';
                    tile.style.border = 'none';
                }

                if (number <= 15) {
                    tile.classList.add('number');
                    tile.style.backgroundPositionX = (-1*j*100) + 'px';
                    tile.style.backgroundPositionY = (-1*i*100) + 'px';
                    tile.innerHTML = (number++).toString();
                } else {
                    tile.innerHTML = '';
                    tile.className = 'blank';
                    blankL= tile.style.left;
                    blankT = tile.style.top;

                }

                /* _________Add tiles to screen________ */
                
                background.appendChild(tile);

                /* _____________Moveable____________ */

                tile.onclick = function (e) {
                    moveabe(e.target);//returns tile that 'triggered the event'
                }
            }
        }
    }

    function moveabe(tile) {
        /* ________IF moveable shift to empty_______ */
        
        if(tile.className != 'blank'){
            

        }

    }

    

    function emptyTile(){
        return document.querySelector('.blank');
    }

    function shuffle() {
        var shuffle = document.getElementById('shufflebutton');
        shuffle.onclick = function () {

        } /* run 1,000 times */
    };

})();