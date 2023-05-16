var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var form = document.querySelector('form');
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirm-password');
var submitButton = document.querySelector('input[type="submit"]');
var errorLabel = document.getElementById('error-label');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (passwordInput.value !== confirmPasswordInput.value) {
    errorLabel.textContent = "Passwords do not match.";
  } else {
    // Perform form submission or further processing here
    // You can remove or modify the line below
    alert('Form submitted successfully!');
  }
});


