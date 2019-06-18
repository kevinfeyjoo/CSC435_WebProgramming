"use strict"
// create a card objects with properties. 

//https://en.wikipedia.org/wiki/Set_%28game%29

// properties are an assotiav array
var properties = {
		'color' : [ 'red', 'green', 'purple' ],
		'count' : [ 1, 2, 3 ],
		'shading' : [ 'solid', 'striped', 'open' ],
		'symbol' : [ 'diamond', 'squiggle', 'oval']
	};

// card is an object that have the properties specific in the above assoiative array
function Card(characteristics) {
	var self = this;
	for (var k in characteristics) 
		self[k] = characteristics[k];
}

// game of Set, create 81 cards, 3*3*3*3

function SetGame(){
    var self=this;
    self.cards = [];
    self.tableCards = [];
    self.setsChosen = [];
    

    /*permute the properties to get 81 cards. This is rather straight forwad, just loop through every property */
    for (var color   in properties.color) 
    for (var count   in properties.count) 
    for (var shading in properties.shading) 
    for (var symbol  in properties.symbol)
		              self.cards.push(
			                 new Card({
				                'number' : self.cards.length,
				                'color' : properties['color'][color], 
				                'count' : properties['count'][count], 
				                'shading': properties['shading'][shading], 
				                'symbol' : properties['symbol'][symbol] }));
    
    

    /* get the next three cards from the deck , taken from the top*/
	self._dealCards= function() {
		var nextCards = self.cards.slice(-12);
		self.cards = self.cards.slice(0, -12);
		self.tableCards = nextCards;
	};


	/* check if the cards are a set.*/
    self._addsThree = function(){
    	var newCards = self.tableCards.splice(0,3)
        self.nextThree = newCards;

    
    // here is the algorithm to check if the cards are set.  
      

        }
    }
   




    };


 module.exports = SetGame;

if (module.parent === null) {
	/* actually running the code if it isn't being included*/
	var game = new SetGame();

	console.log(game.CheckSet());
	
}