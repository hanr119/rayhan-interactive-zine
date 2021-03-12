let blackCircle = document.querySelector(".black-circle");

function turnBlack() {
    document.body.style.background = "black";
    document.body.style.color = "#cdb4db";
}

blackCircle.addEventListener("click", turnBlack);

let blueCircle = document.querySelector(".blue-circle");

function turnBlue() {
    document.body.style.background = "#5200e0";
    document.body.style.color = "#cdb4db";
}

blueCircle.addEventListener("click", turnBlue);
