const form = document.getElementById("signupForm");

const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const postalInput = document.getElementById("postal");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const emailError = document.getElementById("emailError");
const countryError = document.getElementById("countryError");
const postalError = document.getElementById("postalError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const formMessage = document.getElementById("formMessage");

// Validation functions
function validateEmail() {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = "Email is required";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = "Enter a valid email";
  } else {
    emailError.textContent = "";
  }
}

function validateCountry() {
  if (countryInput.validity.valueMissing) {
    countryError.textContent = "Country is required";
  } else {
    countryError.textContent = "";
  }
}

function validatePostal() {
  if (postalInput.validity.valueMissing) {
    postalError.textContent = "Postal code is required";
  } else if (postalInput.validity.patternMismatch) {
    postalError.textContent = "Enter a valid postal code (e.g., 12345 or 12345-6789)";
  } else {
    postalError.textContent = "";
  }
}

function validatePassword() {
  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = "Password is required";
  } else if (passwordInput.validity.tooShort) {
    passwordError.textContent = `Password must be at least ${passwordInput.minLength} characters`;
  } else {
    passwordError.textContent = "";
  }
}

function validateConfirmPassword() {
  if (confirmPasswordInput.validity.valueMissing) {
    confirmPasswordError.textContent = "Please confirm your password";
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match";
  } else {
    confirmPasswordError.textContent = "";
  }
}

// Event listeners for live validation
emailInput.addEventListener("input", validateEmail);
countryInput.addEventListener("input", validateCountry);
postalInput.addEventListener("input", validatePostal);
passwordInput.addEventListener("input", () => {
  validatePassword();
  validateConfirmPassword(); // also validate confirmation
});
confirmPasswordInput.addEventListener("input", validateConfirmPassword);

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate all fields before submission
  validateEmail();
  validateCountry();
  validatePostal();
  validatePassword();
  validateConfirmPassword();

  if (
    emailInput.validity.valid &&
    countryInput.validity.valid &&
    postalInput.validity.valid &&
    passwordInput.validity.valid &&
    confirmPasswordInput.value === passwordInput.value
  ) {
    formMessage.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    formMessage.textContent = "";
  }
});
