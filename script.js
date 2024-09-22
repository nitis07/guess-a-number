let logic = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#sub');
const previous = document.querySelector('.prev-guess');
const remaining = document.querySelector('.remain-guess');
let userInput = document.querySelector('#putNum');
let loworHi = document.querySelector('.loworHi');
const p = document.createElement('p ');

let playGame = true;
let numLeft = 1;
let prevguess = [];

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    let game = parseInt(userInput.value);
    console.log(game);
    validateGuess(game);
  });
}
function validateGuess(game) {
  if (game < 0) {
    alert('Please Enter a number more than 1');
  } else if (game > 100) {
    alert('Please Enter a number less than 100');
  } else if (isNaN(game)) {
    alert('Please Enter a number');
  } else {
    prevguess.push(game);
    if (numLeft === 10) {
      remainingGuess(game);
      displayMsg = `Game over Random Number was ${logic}`;
      endGame();
    } else {
      remainingGuess(game);
      checkGuess(game);
    }
  }
}
function checkGuess(game) {
  if (game === logic) {
    displayMsg(`you guessed it right`);
    endGame();
  } else if (game > logic) {
    displayMsg(`you guess  too high`);
  } else if (game < logic) {
    displayMsg(`you guess  too low`);
  }
}
function remainingGuess(game) {
  userInput.value = '';
  previous.innerHTML += `${game},`;
  numLeft++;
  remaining.innerHTML = `${11 - numLeft}`;
}
function displayMsg(message) {
  loworHi.innerHTML = `<h2> ${message} </h2>`;
}
function endGame() {}
