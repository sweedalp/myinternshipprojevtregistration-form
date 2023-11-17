function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simple password strength validation
    if (password.length < 6) {
        document.getElementById('passwordStrength').innerHTML = 'Password must be at least 6 characters long.';
        return;
    } else {
        document.getElementById('passwordStrength').innerHTML = '';
    }

    // Assuming all validations pass, you can submit the form to the server here
    alert('Registration successful!');
    // You might want to redirect the user to a confirmation page or perform other actions.
}
