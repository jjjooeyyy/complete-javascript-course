'use strict';

var scores, isPlaying, currentScore, activePlayer;
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const playerScore0 = document.getElementById('score--0');
const playerScore1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const reset = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');

const diceImg = [
    0,
    "dice-1.png",
    "dice-2.png",
    "dice-3.png",
    "dice-4.png",
    "dice-5.png",
    "dice-6.png",
]

// Start Game 
const startGame = function() {
scores = [0,0];
currentScore = 0;
isPlaying = true;
activePlayer = 0;

playerScore0.textContent = 0;
playerScore1.textContent = 0;
currentScore0.textContent = 0;
currentScore1.textContent = 0;

dice.classList.add('hidden');
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');
player0.classList.add('player--active');
player1.classList.remove('player--active');
}

// Everytime refresh the page, it will be resetted
startGame();

// Switch Player 
const switchPlayer = function() {
  // Change the current score back to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Switch from player 1 to 2 
  // If it's player 1 now, then switch to 2, else reverse
  activePlayer = activePlayer === 0?1:0;

  // Add the class list if it's not there, remove if it's there
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

// Action for rollDice button is clicked
rollDice.addEventListener('click', function() {
  var randomNum = Math.floor(Math.random()*6)+1;
  dice.classList.remove('hidden');
  dice.src = diceImg[randomNum];

  if(randomNum !== 1) {
    currentScore += randomNum;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
})


// Hold Score
holdScore.addEventListener('click', function() {
  // Push the current score to total score
   document.getElementById(`score--${activePlayer}`).textContent = currentScore;


})




// Click the reset button 
reset.addEventListener('click',startGame);
