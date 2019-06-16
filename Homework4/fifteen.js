/*
*
*   author @kevin feyjoo
*   last updated June 16, 2019
*
*/
(function () {
    'use strict';
    let backgorund = document.getElementById('puzzlearea');
    let tiles = [];
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

                let tile = document.createElement('span');
                tile.id = 'tile-' + i + '-' + j;
                tile.style.top = (i * 98) + 'px';
                tile.style.left = (j + 96 * j) + 'px';
                tile.style.backgroundImage = 'URL("grinch4.png")';
                tile.style.backgroundPositionX = (-1*j*100) + 'px';
                tile.style.backgroundPositionY = (-1*i*100) + 'px';


                /*______________S†¥le______________*/

                tile.style.position = 'absolute';
                tile.style.display = 'block';
                tile.style.width = '90px';
                tile.style.height = '90px';
                tile.style.border = '4px solid black';

                /* ____________Add Number___________ */

                if (number <= 15) {
                    tile.classList.add('number');
                    tile.innerHTML = (number++).toString();
                } else {
                    tile.className = 'blank';
                }

                /* _________Add tiles to screen________ */
                
                backgorund.appendChild(tile);

                /* _____________Moveable____________ */

                tile.onclick = function () {
                    moveabe();
                }
            }
        }
    }

    function moveabe() {

        /* ________Array will track empty position_______ */

        let tile = document.querySelectorAll('#puzzlearea span');//all tiles inluding blank
        let tiles = [];//array of all tiles
        let empty = document.querySelectorAll('#puzzlearea .blank');//blank tile
        let tile_top, tile_left;//tile properties


        for (let i = 0; i <= tile.length; i++) {
            tiles.push([tile[i]]);
            
        }
        console.log(tiles[0]);//test
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