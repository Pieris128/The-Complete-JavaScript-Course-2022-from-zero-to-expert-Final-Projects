'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//defining vars (my solution)
// let currentScore = 0;
// let player = 0;
// let playerScore1 = 0;
// let playerScore2 = 0;

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
  activePlayer = 0;
  playing = true;
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.check for rolled 1:
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch next player
      switchPlayer();
    }
  }

  //   //3.check for rolled 1:
  //   if (dice !== 1) {
  //     //add dice to current score
  //     currentScore += dice;
  //     //display currentScore on correct player
  //     if (player % 2 === 0) {
  //       current0El.textContent = currentScore;
  //     } else {
  //       current1El.textContent = currentScore;
  //     }
  //   } else {
  //     //switch next player & reset variables
  //     currentScore = 0;
  //     current0El.textContent = 0;
  //     current1El.textContent = 0;
  //     player++;
  //   }
});

// btnHold.addEventListener('click', function () {
//   if (player % 2 === 0) {
//     playerScore1 += currentScore;
//     score0El.textContent = playerScore1;
//     current0El.textContent = 0;
//     currentScore = 0;
//   } else {
//     playerScore2 += currentScore;
//     score1El.textContent = playerScore2;
//     current1El.textContent = 0;
//     currentScore = 0;
//   }
//   player++;
// });

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check if score is 100
    if (scores[activePlayer] >= 100) {
      // finish game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //change next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
