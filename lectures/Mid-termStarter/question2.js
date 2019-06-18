
function btnIsClicked () {  
    var btnClick = document.getElementById('btn');
    var answer_;
    var lb_to_kg = document.getElementById('lb_to_kg');
    //lb_to_kg.onchange = one;
    var kg_to_lb = document.getElementById('kg_to_lb');
    //kg_to_lb.onchange = two;
    //console.log(lb_to_kg);
    //console.log(kg_to_lb);


    //this is the convert function... function still shows me NaN for 'poundstokg'
    btnClick.onclick = function convert() {  
        var input1 = document.getElementById("select").value;
        if (input1 == "kgtopounds") {
            var input = document.getElementById('input').value;
            document.getElementById("answer").innerHTML = input * 2.2045;
        } else if (input1 == "poundstokg"){
            document.getElementById("answer").innerHTML = input / 2.2045;
        } else {
            alert("theres an issue");
        }
    }
}


window.onload = btnIsClicked;