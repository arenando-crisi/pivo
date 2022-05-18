var cont=0;

function burgertox(x) {
    x.classList.toggle("change");
}

function openNav() {

    cont++;
    if(cont%2==0){
        document.getElementById("myNav").style.width = "0%";
    }else{
        document.getElementById("myNav").style.width = "100%";
    }
}