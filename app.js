let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const checkButton = document.getElementById('checkButton');
const restartButton = document.getElementById('restartButton');
const result = document.getElementById('result');


checkButton.onclick = () => {
    const guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {
        result.textContent = 'Enter a number between 1 and 100';
        result.style.color = 'pink';
    } else if (randomNumber === guess) {
        result.textContent = 'You guessed it!';
        result.style.color = 'green';
        checkButton.disabled = true;
        restartButton.style.display = "block";
    } else {
        result.textContent = guess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
        result.style.color = '#50ba99';
    }
    guessInput.value = ""; 
    guessInput.focus();
};

restartButton.onclick = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    result.textContent = '';
    checkButton.disabled = false;
    restartButton.style.display = 'none';
    guessInput.value = '';
    guessInput.focus();
};
























