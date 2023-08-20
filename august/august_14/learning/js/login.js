// getting validator message
var emailMessage = document.getElementById("email-validate-txt");
const passwordMessage = document.getElementById("password-validate-txt");

// step-1: Add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function (e) {
  // step-2: get the email address inside the email input field
  // always rember to use .value to get the text from an input field

  e.preventDefault();
  const emailField = document.getElementById("email-input");
  const email = emailField.value;

  // step-3: get password
  // 3.a: set id on the html element
  // 3.b: get the element
  // 3.c: get the value from the element

  const passwordField = document.getElementById("password-input");
  const password = passwordField.value;

  // validating email field
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === "") {
    emailMessage.innerText = "enter email!";
  } else if (!email.match(regex)) {
    emailMessage.innerText = "not valid email!";
  } else {
    emailMessage.innerText = "";
  }

  // validating password field
  if (password === "") {
    passwordMessage.innerText = "enter password!";
  } else if (password.length <= 5) {
    passwordMessage.innerText = "password must be 6 or more than 6!";
  } else {
    passwordMessage.innerText = "";
  }

  // DANGER: DO NOT VERIFY email password on the client side
  // step-4: verify eamil and password
  if (email === "devjunayed@gmail.com" && password === "secret") {
    window.location.href="bank.html ";
  }
  else  if (password !== "" && email !== "" && email.match(regex)) {
    my_modal.showModal();
  }
});
