// color the rectangle and move them randomlyi
// Today's goal :
//   - rectangles randomly are colored when the color button is clicked
//   - when the select is changed the number of rectangles changes to match it

// in the next class we will make the move function work

// here is a road map of the functions you need to implement.

(function() {
	"use strict";

	window.onload = function() {
		var colorButton = document.getElementById("color");
		colorButton.onclick = colorIt;

		var moveButton = document.getElementById("move");
		moveButton.onclick = moveIt;

		var numSelect = document.getElementById("count");
		numSelect.onchange = createRectangles;

		createRectangles();
		colorIt();
		moveIt();
	};

	// creates the number of rectangles specified in the select.
	function createRectangles() {
		document.getElementById("rectanglearea").innerHTML = "";
		var count = document.getElementById("count").value;
		// finish the functions here
		for(var i = 0; i < count; i++) {
			var rect = document.createElement("div");
			rect.className = "rectangle";
			document.getElementById("rectanglearea").appendChild(rect);
}	console.log(count); console.log(rect)

	}

   	// Randomly color all of the rectangles
    function colorIt() {
    	// your code goes her
    	// you might find the following code snippts useful
    	//var r = Math.floor(Math.random() * 256);
    }

    // // WARNING: incomplete
	// Randomly position all the rectangles
	function moveIt() {
		var rects = document.querySelectorAll("#rectanglearea .rectangle");
		var area = document.getElementById("rectanglearea");
		for(var i = 0; i < rects.length; i++) {

		}
	}



})();
