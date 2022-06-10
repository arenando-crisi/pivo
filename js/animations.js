var cont=0;

function burgertox(x) {
    x.classList.toggle("change");
}

function burgerbtox(x) {
    x.classList.toggle("changeb");
}//non funziona e non so perché

function openNav() {
    cont++;
    if(cont%2==0){
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("scrittemenù1").style.opacity = 0;
        document.getElementById("scrittemenù2").style.opacity = 0;
    }else{
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("scrittemenù1").style.opacity = 100;
        document.getElementById("scrittemenù2").style.opacity = 100;
    }
}//chiedere come togliere il brutto effetto sulle scritte

dragElement(document.getElementById("sticker"));

function dragElement(sticker) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    sticker.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    sticker.style.top = (sticker.offsetTop - pos2) + "px";
    sticker.style.left = (sticker.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("sticker2"));

function dragElement(sticker2) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    sticker2.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    sticker2.style.top = (sticker2.offsetTop - pos2) + "px";
    sticker2.style.left = (sticker2.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("sticker3"));

function dragElement(sticker3) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    sticker3.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    sticker3.style.top = (sticker3.offsetTop - pos2) + "px";
    sticker3.style.left = (sticker3.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}