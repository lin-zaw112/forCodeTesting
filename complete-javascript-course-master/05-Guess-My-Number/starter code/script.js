'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const displaySecretNumber = function(num) {
    document.querySelector('.number').textContent = num;
}
const displaySecretNumberWidth = function(widthrem) {
    document.querySelector('.number').style.width = widthrem;
}
const displayScores = function(score) {
        document.querySelector('.score').textContent = score;
    }
const body = function(color){
    document.querySelector('body').style.backgroundColor = color;
};
    //AGAIN Button
document.querySelector(".again").addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displaySecretNumber("?");
    displayMessage('Start guessing...');
    body('#222');
    displaySecretNumberWidth("15rem");

    document.querySelector('.guess').value = ' ';
    if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
    score = 20;
    displayScores(score);
});
//Check Button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number((document.querySelector('.guess').value));
    console.log(typeof guess);
    // When there is no inupt
    if (!guess) {
        displayMessage("Please add Number.Cannot find any Number");
    }
    // when  input Number is out of 1 to 20
    else if (guess < 1 && guess > 20) {
        displayMessage("Number is between 1 and 20");
    }
    // when   Player is Win 
    else if (guess === secretNumber) {
        displaySecretNumber(secretNumber);
        displayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor = 'green';
        body('#');
        displaySecretNumberWidth('30rem');
    } else if (guess !== secretNumber) {
        // when guess is too height or too low.
        if (score > 0) {
            displayMessage(guess > secretNumber ? 'Too Height' : 'Too low');
            score--;
            displayScores(score);

        }
        // When Player is lose
        else {
            displayMessage('lose the Game');
            displayScores("0");
        }
    }
});