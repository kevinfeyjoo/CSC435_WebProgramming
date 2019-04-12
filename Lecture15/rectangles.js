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
	/* function createRectangles() { 
	document.getElementById("rectanglearea").innerHTML = "";
	var count = document.getElementById("count").value;
	
	
			let rects = '';
			for (var i = 0; i < count; i++) {
				rects = rects + '<div class="rectangle"></div>';//does the same thing as appendChild
			}
			
		document.getElementById("rectanglearea").innerHTML = rects;
	} */
	
		// Randomly color all of the rectangles
		function colorIt() {
			var rects = document.querySelectorAll("#rectanglearea .rectangle");
			
			var h1_ = document.getElementById("test");
			
			for (var i = 0; i < rects.length; i++) {
				var r = Math.floor(Math.random() * 256);
				var g = Math.floor(Math.random() * 256);
				var b = Math.floor(Math.random() * 256);
				var rgb_num = "rgb("+r+","+g+","+b+")";
				rects[i].style.backgroundColor = rgb_num;
				h1_.style.backgroundColor = rgb_num;
			}
		}
	
	// Randomly position all the rectangles
	function moveIt() {
	var rects = document.querySelectorAll("#rectanglearea .rectangle");
	
	/* var h1_ = document.getElementById("test");
	var btn = document.getElementById('move');
	btn.onclick = function() {
		if (h1_.style.float === 'right'){
			h1_.style.float = 'left';
		}else {
			h1_.style.float = 'right';
		};
	} */
	


	var area = document.getElementById("rectanglearea");
	var width = area.offsetWidth - 50;
	var height = area.offsetHeight - 50;
	for (var i = 0; i < rects.length; i++) {
		var left = Math.floor(Math.random() * width);
		var top = Math.floor(Math.random() * height);
		rects[i].style.position = 'absolute';
		rects[i].style.left = left + 'px';
		rects[i].style.top = top + 'px';
	}
}
	
	
	})();