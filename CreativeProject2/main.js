(function() {
    "use strict";
    window.onload = function(){
        let date = document.getElementById("flash_date");
        date.onclick = datee;
        function datee() {
            document.getElementById("invite").style.color = "red";
            setTimeout("datee_()", 500); 
            
            /* These 2 functions are supposed to make the date flash when user clicks "When is it?" */
            
        };
        function datee_() {
            document.getElementById("invite").style.color = "black";
            setTimeout("datee()", 500);
        };

    };





})();