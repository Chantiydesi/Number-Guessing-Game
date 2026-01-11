//let levelInput=document.getElementById('levelInput');
let guessInput=document.getElementById('guessInput');
let   randomnumber;
let attempts;
let leveldifficulty=document.getElementById('leveldifficulty');
let attemptsDisplay=document.getElementById('attemptsDisplay');
let feedback=document.getElementById('feedback');
let gameOver=false;
let gameStarted=false;

function startgame(){
    let levelInput=document.getElementById('levelInput');
    let level=parseInt(levelInput.value);
    if(isNaN(level)||level<1){
        alert("Please enter a valid level (number greater than 0  and less than 4).");
        return;
    }
    randomnumber=Math.floor(Math.random()*100)+1;
    if(level===1){
        attempts=10;
        feedback.textContent = "You selected Easy level. You have 10 attempts.Good luck!";
        alert("You selected Easy level. You have 10 attempts.");
        attemptsDisplay.textContent = attempts;
         leveldifficulty.textContent = "Easy";
    }else if(level===2){
        attempts=7;
        feedback.textContent = "You selected Medium level. You have 7 attempts.Good luck!";
        alert("You selected Medium level. You have 7 attempts.");
           attemptsDisplay.textContent = attempts;
            leveldifficulty.textContent = "Medium";
    }else if(level===3){
        attempts=5;
        feedback.textContent = "You selected Hard level. You have 5 attempts.Good luck!";
        alert("You selected Hard level. You have 5 attempts.");
        attemptsDisplay.textContent = attempts;
            leveldifficulty.textContent = "Hard";
    }
    gameOver = false;
    gameStarted = true;
}
function submitGuess() {
    
    if (!gameStarted || gameOver) {
        feedback.textContent = "Game has ended. Restart to play again.";
       // alert("Game has ended. Restart to play again.");
        return;
    }
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a valid guess (1–100).";
       // alert("Please enter a valid guess (1–100).");
        return;
    }
    attempts--;
    attemptsDisplay.textContent = attempts;
    if (guess === randomnumber) {
        feedback.textContent = "✅Congratulations! You guessed the correct number.✅";
       // alert("Congratulations! You guessed the correct number.");
        gameOver = true;
        guessBtn.disabled = true; // optional: disable button
        return;
    }

    // 5️⃣ Check if attempts are over
    if (attempts === 0) {
        feedback.textContent = "Game over! The correct number was " + randomnumber + ".";
        //alert("Game over! The correct number was " + randomnumber + ".");
        gameOver = true;
        guessBtn.disabled = true; // optional: disable button
        return;
    }

    // 6️⃣ Feedback for remaining attempts
    if (guess < randomnumber) {
        feedback.textContent = "Too low! Attempts left: " + attempts;
        //alert("Too low! Attempts left: " + attempts);
    } else {
        feedback.textContent = "Too high! Attempts left: " + attempts;
        //alert("Too high! Attempts left: " + attempts);
    }
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitGuess();
    }
});

























/*
function submitGuess() {

    // 🚫 HARD BLOCK
    if (!gameStarted || gameOver) {
        alert("Game has ended. Restart to play again.");
        return;
    }

    let guess = parseInt(guessInput.value);

    // ❌ Invalid input → no attempt loss
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid guess (1–100).");
        return;
    }

    // ✅ NOW reduce attempts
    attempts--;

    if (guess === randomnumber) {
        alert("Congratulations! You guessed the correct number.");
        gameOver = true;
        return;
    }

    if (attempts === 0) {
        alert("Game over! The correct number was " + randomnumber + ".");
        gameOver = true;
        return;
    }

    if (guess < randomnumber) {
        alert("Too low! Attempts left: " + attempts);
    } else {
        alert("Too high! Attempts left: " + attempts);
    }
}

/*
function submitGuess(){
  attempts--;
if (!gameStarted || gameOver) {
        alert("Game has ended. Restart to play again.");
        return;
    }

    let guess=parseInt(guessInput.value);
    if(isNaN(guess)||guess<1||guess>100){
        alert("Please enter a valid guess (number between 1 and 100).");
        return;
    }
  if(guess<randomnumber){
      alert("Too low! Try again.");
  }
    else if(guess>randomnumber){
      alert("Too high! Try again.");
    }else if(guess===randomnumber){
      alert("Congratulations! You guessed the correct number.");
      document.location='NGG.html';
  }
  if(attempts==0){
      alert("Game over! The correct number was " + randomnumber + ".");
      gameOver = true;
      document.location='NGG.html';
  }
}*/

  
 /*
 let levelInput = document.getElementById('levelInput');
let guessInput = document.getElementById('guessInput');
let leveldifficulty = document.getElementById('leveldifficulty');

let randomnumber;
let attempts = 0;

function startgame() {
    let level = parseInt(levelInput.value);

    if (isNaN(level) || level < 1 || level > 3) {
        alert("Please enter a valid level (1 = Easy, 2 = Medium, 3 = Hard).");
        return;
    }

    randomnumber = Math.floor(Math.random() * 100) + 1;

    if (level === 1) {
        attempts = 10;
        leveldifficulty.textContent = "Easy";
        alert("You selected Easy level. You have 10 attempts.");
    } 
    else if (level === 2) {
        attempts = 7;
        leveldifficulty.textContent = "Medium";
        alert("You selected Medium level. You have 7 attempts.");
    } 
    else {
        attempts = 5;
        leveldifficulty.textContent = "Hard";
        alert("You selected Hard level. You have 5 attempts.");
    }
}
function submitGuess() {
    if (attempts <= 0) {
        alert("Game over! The correct number was " + randomnumber + ".");
        return;
    }

    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    attempts--;

    if (guess < randomnumber) {
        alert("Too low! Attempts left: " + attempts);
    } 
    else if (guess > randomnumber) {
        alert("Too high! Attempts left: " + attempts);
    } 
    else {
        alert("Congratulations! You guessed the correct number.");
        attempts = 0;
    }
}*/
