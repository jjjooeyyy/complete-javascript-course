'use strict';


const dice = document.querySelector('.dice');

const rollDice = document.querySelector('.btn--roll');

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


// Generate random number and change corresponding img 
const generateDice = function() {
    let randomNum = Math.floor(Math.random()*6)+1;
    dice.src = diceImg[randomNum];
}

// Action for rollDice button is clicked
rollDice.addEventListener('click', function() {
  generateDice();
})



