function computeClick(){

	let grades = document.getElementById("assignments").querySelectorAll(".earned");
	let overall = document.getElementById("assignments").querySelectorAll(".max");
	let finalGrade=0;

	for(let i=0; i<3; i++){
		if(grades[i].value<=1){
			alert("Fill in every box!");
			break;
		}
		console.log(grades[i].value);
		finalGrade+=grades[i].value*100/(overall[i].value);
	}
	let result= finalGrade/3;
	if(document.getElementById("curve").checked && result<96){
		resultAfter= result+5

		document.getElementById("result").innerHTML=result;
		document.getElementById("result").style.display = "block";

		document.getElementById("result1").innerHTML=resultAfter;
		document.getElementById("result1").style.display = "block";
	}else{
		document.getElementById("result").innerHTML=result;
		document.getElementById('result').style.display = "block";
	}


}
function clearClick(){
	var elems=document.getElementById("assignments").querySelectorAll(".max");
	var l = elems.length;
	for (var i = 0; i < l; ++i){
	elems[i].value="";
	elems[i].value=null;}

	var elems=document.getElementById("assignments").querySelectorAll(".earned");
	var t = elems.length;
	for (var j = 0; j < t; ++j){
	elems[j].value="";
	elems[j].value=null;}
}
