// script.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Hardcoded credentials for validation
    const validUsername = "euph";
    const validPassword = "ily";


    // Get values from input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Error message element
    const errorMessage = document.getElementById('error-message');

    // Validation logic
    if (username === "mars" && password === "ily") {
        alert("Login Successful!");
        // Redirect to another page if needed
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password. Try again!";
    }

    if (username === "euph" && password === "ily") {
        alert("Login Successful!");
        // Redirect to another page if needed
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password. Try again!";
    }
});
