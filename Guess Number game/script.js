'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const scoreElement = document.querySelector('.score');

const number = document.querySelector('.number');

const checkState = function (state) {
  document.querySelector('.guess').value = state;
};

const onInput = function () {
  document.querySelector('.guess').focus();
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //no input
  if (!guess) {
    displayMessage('No Number!');
    // player win
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // wrong numbers
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
      score--;
      scoreElement.textContent = score;
      checkState('');
      onInput();
    } else {
      displayMessage('You Lost the game!');
      scoreElement.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  document.querySelector('.guess').value = '';
  number.textContent = '?';
  score = 20;
  scoreElement.textContent = score;
  displayMessage('Start guessing...');
});
