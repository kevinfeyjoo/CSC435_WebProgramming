var arr1 = [1,1,2,3,4,2,3,4,5,5,6,3,6,3,4,2];
//change arr1_copy to arr1_copy
var buttonClicked = function(){
   //response when button is clicked
   var resultTracker = 1;
   var result0 = 0;
   var arr1_copy;
   for (var i=0; i<arr1.length; i++){
     for (var j=i; j<arr1.length; j++){
       if (arr1[i] == arr1[j])
       result0++;
       if (resultTracker<result0){
         resultTracker=result0;
         arr1_copy = arr1[i];
       }
     }
     result0=0;
}
var result = (arr1_copy+" ( " +resultTracker +" times ) ") ;
document.getElementById('result').innerHTML = result;
}

window.onload = function() {
  document.getElementById('button').onclick = buttonClicked;
}
