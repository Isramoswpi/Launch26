//create variables to referance html documents
const numField = document.getElementById("num-field");
const guessButton = document.getElementById("guess-button");
const resetButton = document.getElementById("reset-button");
const messageText = document.getElementById("message-text");
const guessCountText = document.getElementById("guess-count-text");
const easyButton = document.getElementById("easy-button");
const normalButton = document.getElementById("normal-button");
const hardButton = document.getElementById("hard-button");

//create min max variables
easyButton.addEventListener("click", makeEasy);
normalButton.addEventListener("click", makeNormal);
hardButton.addEventListener("click", makeHard);

// Default values
    let min = 1;
    let max = 100;

function makeHard() {
    let max = 200;
}
function makeEasy() {
  let max = 50;
}
function makeNormal() {
     let max  = 100;
}




//create a variable to hold the random number
let secret;
let guestCount = 0;

let myConfetti = null; 
if (window.confetti) {
    myConfetti = confetti.create(null, {
        resize: true,
        useWorker: true
    });
}

function loadGame() {
    numField.min = min;
    numField.max = max;
    numField.value = "";
    secret = Math.floor(Math.random() * (max - min + 1)) + min;
    guessCount = 0;
    messageText.textContent= `Enter a number between ${min} and ${max}.`;
    guessCountText.innerHTML = "Guesses: 0";
    numField.focus();
    }




function makeGuess() {
    const guess = parseInt(numField.value);
    if (Number.isNaN(guess) || guess < min || guess > max) {
        messageText.textContent.innterHTML= `Please enter a valid number between ${min} and ${max}.`;
        return; 
    }



guessCount++;
guessCountText.innerHTML = `Guesses: ${guessCount}`;

if (guess === secret) {
    messageText.innerHTML = `Congratulations! ${secret} is the correct number.`;
    if (myConfetti) myConfetti({
    particleCount: 3000, 
     spread: 160

    });
     
} else if (guess < secret) {
    messageText.innerHTML = `${guess} is too low! Try again.`;
    new Audio('fahhhhhhhhhhhhhh.mp3').play().catch(()=>{});
} else {
    messageText.innerHTML = `${guess} is too High! Try again.`;
    new Audio('fahhhhhhhhhhhhhh.mp3').play().catch(()=>{});
}
}

guessButton.addEventListener("click", makeGuess);
resetButton.addEventListener("click", loadGame);

numField.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        makeGuess(); 
    }
});


//load the gme when the page loads
loadGame();
