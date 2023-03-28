'use strict';

// Getting a random number 
let randomNumber = Math.trunc((Math.random()*20)+1);


// Initial Score
let score = 20;
let highscore = 0;

// Current score 
let currentScore = document.querySelector('.score').textContent;

// Click event
document.querySelector('.check').addEventListener("click", function() {
   const guess = Number(document.querySelector('.guess').value);

   // When there is no input 
if(!guess) {
    document.querySelector('.message').textContent = `NO NUMBER!`;
}

  // When guess too high 
 else if(guess>randomNumber) {
    document.querySelector('.message').textContent = `TOO HIGH!`;
    if(score>1){
    score--;
    document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = `YOU LOST!`;
        document.querySelector('.score').textContent = 0;
    }
 }

  // When guess too low
 else if(guess<randomNumber) {
    document.querySelector('.message').textContent = `TOO LOW!`;
    if(score>1){
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = `YOU LOST!`;
            document.querySelector('.score').textContent = 0;
        }
  }

  // When guess is correct
  else {
    document.querySelector('.message').textContent = `YOU'RE CORRECT!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = "30rem";
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
  }
})

document.querySelector('.again').addEventListener("click", function() {
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = highscore;
  randomNumber = Math.trunc((Math.random()*20)+1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = "15rem";
  document.querySelector('.message').textContent = `start guessing...`;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";
});