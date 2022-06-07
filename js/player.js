var x = document.getElementById("audio");
var cont = 0;
var degrees = 45;
var looper;
let i=0;

function playAudio() {
  if (cont%2 == 0) {
    x.play();
    cont++;
    document.addEventListener('click', function handleClick(event) {
        event.target.classList.add('rotate');
      });
  }
  else {
    x.pause();
    cont++;
    document.addEventListener('click', function removeClick(event) {
        event.target.classList.remove('rotate');
      });
  }
 
}

function pauseAudio() {

}