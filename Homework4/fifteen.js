/*
*
*   author @kevin feyjoo
*   last updated June 18, 2019
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
        clearInterval(__init__);
        shuffle();
    };

    function __init__() {
        let background = document.getElementById('puzzlearea');
        background.innerHTML = "";

        var number = 1;
        for (let row = 0; row <= 3; row++) {
            for (let col = 0; col <= 3; col++) {

                /* _______create tiles___________ */
                let tile = document.createElement('span');
                tile.id = 'tile-' + row + '-' + col;
                tile.style.top = (row * 98) + 'px';
                tile.style.left = (col + 96 * col) + 'px';
                tile.style.backgroundImage = 'URL("background1.jpeg")';

                /*______________S†¥le______________*/

                tile.style.position = 'absolute';
                tile.style.display = 'block';
                tile.style.width = '90px';
                tile.style.height = '90px';
                tile.style.border = '4px solid black';

                /* ____________Add Number___________ */
                if (row*col == 9) {
                    tile.style.backgroundImage = 'none';
                    tile.style.border = 'none';
                }




                if (number <= 15) {       //ååååååBUGGGGGGGGGGGG
                    tile.classList.add('number');
                    tile.style.backgroundPositionX = (-1*col*100) + 'px';
                    tile.style.backgroundPositionY = (-1*row*100) + 'px';
                    tile.innerHTML = (number++).toString();
                } else {
                    tile.innerHTML = '';
                    tile.className = 'blank';              

                }                       //ååååååBUGGGGGGGGGGGG



                
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
            var placeHolder = {style: tile.style.cssText, id: tile.id}; //holds current clicked tile id. gives it to Blank.

            // moves clicked tile to blank spot by switching id's
            //CURRENT BUG == ROW-COL 3-3 will not display anything but BLANK
            tile.id = blankTile.id;
            tile.style = blankTile.style;
            blankTile.id = placeHolder.id;
            blankTile.style = placeHolder.style;
        }

    }

    function blankTile(){
        return document.querySelector('.blank');
    }

    function shuffle() {
        var shuffle = document.getElementById('shufflebutton');
        shuffle.onclick = function () {
            /* 
            for (~1000 times):
                neighbors = [].
                for each neighbor n that is directly up, down, left, right from empty square:
                    if n exists and is movable:
                        neighbors.push(n).
                randomly choose an element i from neighbors.
                move neighbors[i] to the location of the empty square.
            */

        } 
    };

})();