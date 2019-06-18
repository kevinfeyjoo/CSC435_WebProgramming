(function() {
	"use strict";
	window.onload = function() {        
          document.querySelector('button').onclick = convert;
	};

	function convert(){
		let amount = document.querySelector('input').value;
		let pick = document.querySelector('select').value;
		if(pick == "kgtopounds"){
			document.getElementById("answer").innerHTML  = amount * 2.2045;
          
		}
		else{
			document.getElementById("answer").innerHTML  = amount * .45359;
		}
        
	}

})();