window.onload = function() {
    document.getElementById("blend").onclick = blendClick;
};

function blendClick() {
    document.getElementById("output").innerHTML = "";

    var name = document.getElementById("yourname").value;
    var x = 0;
    var y = 0;

    for (var i = 0; i < name.length; i++) {
        if (document.getElementById("sequential").checked) {
            x = x + 12;
            y = y + 12;
        } else {
            x = parseInt(Math.random() * 300);
            y = parseInt(Math.random() * 100);
        }

        ///create an element into the div 
        var span = document.createElement("span");

        span.innerHTML = name[i];
        span.style.fontFamily = document.getElementById("font").value;
        span.style.fontSize = "18pt";
        span.style.position = "absolute";
        span.style.left = x + "px";
        span.style.top  = y + "px";
        document.getElementById("output").appendChild(span);
    }
}