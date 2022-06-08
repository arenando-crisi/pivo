var r = Math.floor(Math.random() * 5) + 1;
var x = document.getElementById("audio"+ r);
var cont = 0;
var degrees = 45;
var looper;
let i=0;

function playAudio() {
  if (cont%2 == 0) {
    x.play();
    cont++;
    document.addEventListener('click', function handleClick(event) {
      document.getElementById("player").classList.add('rotate');
      });
  }
  else {
    x.pause();
    cont++;
    document.addEventListener('click', function removeClick(event) {
      document.getElementById("player").classList.remove('rotate');
      });
  }
 
}

window.onload = choosePic;

var myPix = new Array("asset/audioplayer1.png","asset/audioplayer2.png","asset/audioplayer3.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("player").src = myPix[randomNum];
}