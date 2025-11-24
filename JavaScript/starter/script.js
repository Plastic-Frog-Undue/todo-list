// const email = document.getElementById("mail");

// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// const email = document.getElementById("mail");

// email.addEventListener("input", (event) => {
//   // Validate with the built-in constraints
//   email.setCustomValidity("");
//   if (!email.validity.valid) {
//     return;
//   }

//   // Extend with a custom constraints
//   if (!email.value.endsWith("@example.com")) {
//     email.setCustomValidity("Please enter an email address of @example.com");
//   }
// });

// const form = document.querySelector("form");
// const email = document.getElementById("mail");
// const emailError = document.querySelector("#mail + span.error");

// email.addEventListener("input", (event) => {
//   if (email.validity.valid) {
//     emailError.textContent = ""; // Remove the message content
//     emailError.className = "error"; // Removes the `active` class
//   } else {
//     // If there is still an error, show the correct error
//     showError();
//   }
// });

// form.addEventListener("submit", (event) => {
//   // if the email field is invalid
//   if (!email.validity.valid) {
//     // display an appropriate error message
//     showError();
//     // prevent form submission
//     event.preventDefault();
//   }
// });

// function showError() {
//   if (email.validity.valueMissing) {
//     // If empty
//     emailError.textContent = "You need to enter an email address.";
//   } else if (email.validity.typeMismatch) {
//     // If it's not an email address,
//     emailError.textContent = "Entered value needs to be an email address.";
//   } else if (email.validity.tooShort) {
//     // If the value is too short,
//     emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
//   }
//   // Add the `active` class
//   emailError.className = "error active";
// }

const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const countryInput = document.getElementById("country");
const postalCodeInput = document.getElementById("postal");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordConfirm");

const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const countryError = document.getElementById("countryError");
const postalCodeError = document.getElementById("postalCodeError");
const passwordError = document.getElementById("passwordError");
const passwordConfirmError = document.getElementById("passwordConfirmError");

const message = document.getElementById("message");

// Function to validate a single input
function validateInput(input, errorElement) {
  if (input.validity.valueMissing) {
    errorElement.textContent = "This field is required";
  } else if (input.validity.tooShort) {
    errorElement.textContent = `Must be at least ${input.minLength} characters`;
  } else if (input.validity.typeMismatch) {
    errorElement.textContent = "Invalid format";
  } else if (input.validity.rangeUnderflow) {
    errorElement.textContent = `Must be at least ${input.min}`;
  } else if (input.validity.rangeOverflow) {
    errorElement.textContent = `Must be at most ${input.max}`;
  } else {
    errorElement.textContent = ""; // valid
  }
}

// Real-time validation
emailInput.addEventListener("input", () => validateInput(emailInput, emailError));
ageInput.addEventListener("input", () => validateInput(ageInput, ageError));
countryInput.addEventListener("input", () => validateInput(countryInput, countryError));
postalCodeInput.addEventListener("input", () => validateInput(postalCodeInput, postalCodeError));
passwordInput.addEventListener("input", () => validateInput(passwordInput, passwordError));
passwordConfirmInput.addEventListener("input", () => validateInput(passwordConfirmInput, passwordConfirmError));




// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput(emailInput, emailError);
  validateInput(ageInput, ageError);
  validateInput(countryInput, countryError);
  validateInput(postalCodeInput, postalCodeError);
  validateInput(passwordInput, passwordError);
  validateInput(passwordConfirmInput, passwordConfirmError);


  if (form.checkValidity()) {
    message.textContent = "Form submitted successfully!";
  } else {
    message.textContent = "";
  }
});
