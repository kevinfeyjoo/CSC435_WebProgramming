function shuffle() {
    var shuffle = document.getElementById('shufflebutton');
    shuffle.onclick = console.log(positions);
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