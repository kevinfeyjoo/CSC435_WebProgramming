function click() {
    //naming variables. input value is not working
    var input_ = 'testing...'; 
    //var input_ = document.getElementById('input').value;
    const output_ = document.getElementById('output');
    document.getElementById("output").innerHTML = '';
    var sequential_;
    var random_;
    var font_ = document.getElementById('font');
    document.getElementById("output").innerHTML = input_;
    console.log( output_, sequential_, random_, font_);    
    var blend_ =  document.getElementById('blend');

    blend_.onclick = document.getElementById('output').createElement('p');

}

window.onload = function startup() {
    var blend_ =  document.getElementById('blend');
    blend_.onclick = click;
    document.getElementById("output").innerHTML = '';



}