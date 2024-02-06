let randomNumber = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('submit',(e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //check if the input is a number and not empty
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a  number more than 1");
  } else if (guess > 100) {
    alert("Your guessing number should be less than 100");
  } else {
    prevGuess.push[guess];
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage("game over  random no was" + randomNumber);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    displayMessage("you guessed it right ");
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("you guessed it too high ");
  } else if (guess < randomNumber) {
    displayMessage("you guessed it too high ");
  }
}
function displayGuess(guess) {
  //
  userInput.value = "";
  guessSlot.innerHTML += ` ${guess},  `;
  numGuess += 1;
  remaining.innerHTML = `Remaining Guesses: ${11 - numGuess}`;
}

function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
   const newGameButton= document.querySelector('#newGame');
   newGameButton.addEventListener('click', function () {
    randomNumber= Math.floor(Math.random() * 101);
    prevGuess=[]
    numGuess=1;
    guessSlot.innerHTML="";
    remaining.innerHTML=`Remaining Guesses: ${11 - numGuess}`;
     userInput.removeAttribute( "disabled" );
     startOver.removeChild(p)
      playGame=true;
   })
}
function endGame() {
  userInput = "";
  userInput.setAttribute("disabled", true);
  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame">start new agame</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
