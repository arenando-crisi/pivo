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