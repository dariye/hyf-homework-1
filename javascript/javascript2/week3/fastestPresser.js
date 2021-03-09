const startButton = document.getElementById("game-starter");
const secondsInput = document.getElementById("seconds-input");
let countSLetter = document.getElementById("s-count-p")
let countLLetter = document.getElementById("l-count-p")
let sCounter = 0;
let lCounter = 0;
const sContainer = document.getElementById("s-container");
const lContainer = document.getElementById("l-container");
let youWonS = document.querySelector("#s-container h3")
let youWonL = document.querySelector("#l-container h3")

startButton.addEventListener("click", setTime)
function setTime() {
    reset();
    if (secondsInput.value >= 1) {
        let timeInMs = secondsInput.value * 1000;
        window.addEventListener("keydown", counter)
        setTimeout(function () { winner() }, timeInMs)
    } else {
        alert("Invalid input: please set seconds first(must be equal or greater than 1).")
    }
}
function counter(event) {
    if (event.key === "s") {
        sCounter++;
        countSLetter.innerHTML = sCounter;
    } else if (event.key === "l") {
        lCounter++;
        countLLetter.innerHTML = lCounter;
    }
}

let whoWins = document.createElement("h3");
whoWins.innerHTML = "Winner"

function winner() {
    if (sCounter === 0 & lCounter === 0) {
        document.querySelector("#s-container h3").innerHTML = "YOU ARE BOTH LOOSERS!"
        document.querySelector("#l-container h3").innerHTML = "YOU ARE BOTH LOOSERS!"
    } else if (sCounter > lCounter) {
        document.querySelector("#s-container h3").innerHTML = "YOU WON!"
        document.querySelector("#l-container h3").innerHTML = "YOU ARE A LOOSER!"
        confetti("s-canvas")
    } else if (sCounter < lCounter) {
        document.querySelector("#l-container h3").innerHTML = "YOU WON!"
        document.querySelector("#s-container h3").innerHTML = "YOU ARE A LOOSER!"
        confetti("l-canvas")
    } else {
        document.querySelector("#s-container h3").innerHTML = "YOU BOTH WON!"
        document.querySelector("#l-container h3").innerHTML = "YOU BOTH WON!"
        confetti("l-canvas")
        confetti("s-canvas")
    }
}

function confetti(canvasId) {
    var confettiSettings = { target: `${canvasId}`, start_from_edge: false, };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

function reset() {
    sCounter = 0;
    lCounter = 0;
    youWonL.innerHTML = "";
    youWonS.innerHTML = "";
    countSLetter.innerHTML = sCounter;
    countLLetter.innerHTML = lCounter;
}