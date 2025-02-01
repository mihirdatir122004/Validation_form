// Full Name Validation
function validateName() {
    let name = document.getElementById("fullName").value;
    let error = document.getElementById("nameError");

    if (name.length < 5) {
        error.innerText = "Name must be at least 5 characters long.";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Email Validation
function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");

    if (!email.includes("@")) {
        error.innerText = "Enter a valid email with '@'.";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Phone Number Validation
function validatePhone() {
    let phone = document.getElementById("phone").value;
    let error = document.getElementById("phoneError");

    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
        error.innerText = "Enter a valid 10-digit phone number.";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Password Validation
function validatePassword() {
    let password = document.getElementById("password").value;
    let name = document.getElementById("fullName").value.toLowerCase();
    let error = document.getElementById("passwordError");

    if (password.length < 8) {
        error.innerText = "Password must be at least 8 characters long.";
        return false;
    } else if (password.toLowerCase() === "password" || password.toLowerCase() === name) {
        error.innerText = "Password cannot be 'password' or your name.";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Confirm Password Validation
function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let error = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        error.innerText = "Passwords do not match.";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

// Form Submission Validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission if validation fails

    let validName = validateName();
    let validEmail = validateEmail();
    let validPhone = validatePhone();
    let validPassword = validatePassword();
    let validConfirmPassword = validateConfirmPassword();

    if (validName && validEmail && validPhone && validPassword && validConfirmPassword) {
        alert("Form submitted successfully!");
        return true;
    } else {
        alert("Please fix errors before submitting.");
        return false;
    }
}
