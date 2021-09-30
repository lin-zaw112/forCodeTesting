'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = "13";
// document.querySelector('.score').textContent = "10";
// document.querySelector('.guess').value = "13";	
// document.querySelector('.guess').value;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//AGAIN Button
document.querySelector(".again").addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = ' ';
    if (highScore < score) {
        highScore = Number(document.querySelector('.score').textContent);
        document.querySelector('.highscore').textContent = highScore;
    }
    score = 20;
        document.querySelector('.score').textContent = score;
});
//Check Button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number((document.querySelector('.guess').value));
    console.log(typeof guess);
    // When there is no inupt
    if (!guess) {
        document.querySelector('.message').textContent = "Please add Number.Cannot find any Number";
    }
    // when  input Number is out of 1 to 20
    else if (guess < 1 && guess > 20) {
        document.querySelector('.message').textContent = "Number is between 1 and 20";
    }
    // when   Player is Win 
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        // if (score > highScore) {
        //     highScore = score;
        //     document.querySelector('.highscore').textContent = highScore;
        //     score = 20;
        //     document.querySelector('.score').textContent = score;
        // }
    }

    // when input Number is Too low 
    else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        // When Player is lose
        else {
            document.querySelector('.message').textContent = 'lose the Game';
            document.querySelector('.score').textContent = "0";
        }
    }
    // when input Number is Too Height
    else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too Height';
            score--;
            document.querySelector('.score').textContent = score;
        }
        // When Player is lose
        else {
            document.querySelector('.message').textContent = 'lose the Game';
            document.querySelector('.score').textContent = "0";
        }
    }
});