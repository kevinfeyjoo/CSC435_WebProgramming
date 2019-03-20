var imgObj = null;
var animate ;

function init(){
  imgObj = document.getElementById('myImage');
  imgObj.style.position= 'center';
  imgObj.style.left = '0px';
}
function moveRight(){
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
  animate = setInterval(moveRight,200); // call moveRight in 20msec
}
function stop(){
  clearInterval(animate);
  imgObj.style.left = '0px';
}

window.onload = init;
