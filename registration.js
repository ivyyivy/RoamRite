const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

const formEL = document.getElementById('registration-form');
const emailEL = document.getElementById('email');
const passwordEL = document.getElementById('password');
const confirmPasswordEL = document.getElementById('confirm-password');
const alertEL = document.getElementById('alert');

// Form submission handler
formEL.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
const email = emailEL.value;
const password = passwordEL.value;
const confirmPassword = confirmPasswordEL.value;

// Validate input
if (!email || !password || !confirmPassword) {
alertEL.innerText = 'Please fill in all fields.';
return;
}

if (!emailRegex.test(email)) {
alertEL.innerText = 'Please enter a valid email address.';
return;
}

if (password !== confirmPassword) {
alertEL.innerText = 'Passwords do not match.';
return;
}

// Redirect to dashboard page
window.location.href = 'dashboard.html';
});
