var cont=0;

function burgertox(x) {
    x.classList.toggle("change");
}

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

function scrollpos(){
    setInterval(scrollpos,100);
    console.log(window.scrollY);
}