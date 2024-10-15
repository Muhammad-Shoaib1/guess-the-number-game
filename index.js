let a = Math.floor(Math.random() * 100);
let tries = 0;

// Function to handle the guess
function makeGuess() {
  let b = parseInt(document.getElementById('guess').value);
  tries++;

  let message = '';
  if (a === b) {
    message = `Yes, you have guessed the correct number! Your score is ${100 - tries}.`;
  } else if (a > b) {
    message = "Your number is less than the actual number.";
  } else {
    message = "Your number is greater than the actual number.";
  }

  document.getElementById('message').textContent = message;
}

// Event listener for the button
document.getElementById('submit-btn').addEventListener('click', makeGuess);

// Event listener for Enter key in input field
document.getElementById('guess').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default action (e.g., form submission)
    document.getElementById('submit-btn').click(); // Trigger the button click
  }
});