/*
*
*   author @kevin feyjoo
*   last updated June 16, 2019
*
*/
(function () {
    'use strict';
    let backgorund = document.getElementById('puzzlearea');
    var movable = false;

    window.onload = function () {
        let controls = document.getElementById('controls');
        __init__();
        shuffle();
    };

    function __init__() {
        let backgorund = document.getElementById('puzzlearea');
        backgorund.innerHTML = "";

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
                
                backgorund.appendChild(tile);

                /* _____________Moveable____________ */

                tile.onclick = function () {
                    let l = tile.style.left;
                    let t = tile.style.top;
                    
                    console.log("BL "+blankL + " BT "+blankT);
                    console.log("L "+l + " T "+t);

                    let tiles = document.querySelectorAll('#puzzlearea span');
                    for(let i = 0; tiles.length; i++){
                        
                    }
                    moveabe();
                }
            }
        }
    }

    function moveabe() {

        /* ________Array will track empty position_______ */
        console.log(tile);
        //let tile = document.querySelectorAll('#puzzlearea span');//all tiles inluding blank
        let empty = document.querySelectorAll('#puzzlearea .blank');//blank tile
        let tile_top, tile_left;//tile properties

        for (let i = 0; i <= tile.length; i++) {
            tiles.push([tile[i]]);
             
        }
    }


    function shuffle() {
        var shuffle = document.getElementById('shufflebutton');
        let tile = document.querySelectorAll('#puzzlearea span');
        let empty = document.querySelectorAll('#puzzlearea .blank');
        shuffle.onclick = function () {
            console.log(empty);

        }

        /* run 1,000 times */
    };

})();