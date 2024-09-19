document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Full Name Validation
    const fullName = document.getElementById('fullName').value;
    if (fullName.length < 5) {
        isValid = false;
        document.getElementById('nameError').innerText = 'Name must be at least 5 characters long.';
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // Email Validation
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        isValid = false;
        document.getElementById('emailError').innerText = 'Enter a valid email.';
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Phone Number Validation
    const phone = document.getElementById('phone').value;
    if (phone === '123456789' || phone.length !== 10) {
        isValid = false;
        document.getElementById('phoneError').innerText = 'Enter a valid 10-digit phone number.';
    } else {
        document.getElementById('phoneError').innerText = '';
    }

    // Password Validation
    const password = document.getElementById('password').value;
    const fullNameLower = fullName.toLowerCase();
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullNameLower) {
        isValid = false;
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long and not be "password" or your name.';
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
    } else {
        document.getElementById('confirmPasswordError').innerText = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can add code to submit the form data to the server
    }
}
