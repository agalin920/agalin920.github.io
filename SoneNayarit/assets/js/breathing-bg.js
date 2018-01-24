body = document.getElementById("itsmybody");
switcher = false;

function changeOp() {
    if(switcher) {
        body.style.opacity = "0.0";
        switcher = false;
    }
    else{
        body.style.opacity = "1.0";
        switcher = true;
    }
}

setInterval (changeOp, 2500);