const wrongButtons = document.querySelectorAll('.wrong-button');
const correctButton = document.querySelector('.correct-button');

function changeColor() {
    const button = document.querySelector('.correct-button');
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    button.textContent = 'great';
  }





wrongButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('disabled-button');
  });
});

correctButton.addEventListener('click', () => {
  wrongButtons.forEach(button => {
    button.style.display = 'none';
  });
});

// Assuming you have a button with the ID "showPopup"



const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');
const hintElement = document.getElementById('hint');
const loginContainer = document.getElementById('am');
const hiddenHeading = document.getElementById("dis");


const correctPassword = 'dablu';
let attemptsRemaining = 5;

submitButton.addEventListener('click', () => {
  const inputPassword = passwordInput.value;

  if (inputPassword === correctPassword) {
    // Handle correct password, e.g., redirect to another page
    alert('Correct password! Access granted.');
    loginContainer.style.display = 'none';
    hiddenHeading.style.display = "block";

    
    document.querySelector(".popup-text").classList.add("show");
      
      

  } else {
    attemptsRemaining--;
    hintElement.textContent = `Incorrect password. hints: **B*U. Attempts remaining: ${attemptsRemaining}`;

    if (attemptsRemaining === 0) {
      // Handle failed attempts, e.g., disable the input and button
      passwordInput.disabled = true;
      submitButton.disabled = true;
      hintElement.textContent = 'Too many failed attempts. Access denied.';
    } else {
      // Provide a hint based on the incorrect password (adjust as needed)
      if (inputPassword.length < 6) {
        hintElement.textContent += ' Password should be at least 6 characters long.';
      } else if (!/[A-Z]/.test(inputPassword)) {
        hintElement.textContent += ' Password should contain at least one uppercase letter.';
      } else if (!/[a-z]/.test(inputPassword)) {
        hintElement.textContent += ' Password should contain at least one lowercase letter.';
      } else if (!/[0-9]/.test(inputPassword)) {
        hintElement.textContent += ' Password should contain at least one number.';
      }
    }
  }
});
