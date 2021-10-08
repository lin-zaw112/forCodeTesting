'use strict';
let scores, currentScore, activePlayer, playing;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const scroe0E1 = document.getElementById('score--0');
const scroe1E1 = document.getElementById('score--1');
const diceE1 = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
scores = [0, 0];

const init = function () {
	playing = true;
	scores = [0, 0];
	currentScore =
		scroe0E1.textContent =
		scroe1E1.textContent =
		current0El.textContent =
		current1El.textContent =
			0;
	activePlayer = 0;
	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
	player0El.classList.add('player--active');
	player1El.classList.remove('player--active');
};
const switchPlayer = function () {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	currentScore = 0;

	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
};

diceE1.classList.add('hidden');
init();
btnRoll.addEventListener('click', function () {
	if (playing) {
		// 1.Generating a Random Dice Roll
		const dice = Math.trunc(Math.random() * 6) + 1;

		// 2.Display Dice
		diceE1.classList.remove('hidden');
		diceE1.src = `dice-${dice}.png`;
		// 3.Check for Rolled
		if (dice !== 1) {
			// add dice to current score
			currentScore += dice;
			document.getElementById(`current--${activePlayer}`).textContent =
				currentScore;
		} else if (dice === 1) {
			// swith to next player
			switchPlayer();
		}
	}
});
btnHold.addEventListener('click', function () {
	if (playing) {
		// 1.Add Current Score to  global score
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];
		// 2 Check if player's score is >= 100
		if (scores[activePlayer] >= 100) {
			// Finishing The Game
			playing = false;
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.toggle(`player--winner`);
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.toggle(`player--active`);
			diceE1.classList.add('hidden');
		} else {
			// Switch To Next Player
			switchPlayer();
		}
	}
});
btnNew.addEventListener('click', function () {
	if (!playing) {
		init();
	}
});
