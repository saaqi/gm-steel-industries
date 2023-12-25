// JavaScript form validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  const nameInput = document.getElementById("name");
  // const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  let isValid = true;

  // Validate name input
  if (nameInput.value === "") {
    isValid = false;
    nameInput.setCustomValidity("Please enter your name.");
  } else {
    nameInput.setCustomValidity("");
  }

  // Validate email input
  if (emailInput.value === "") {
    isValid = false;
    emailInput.setCustomValidity("Please enter your email address.");
  } else if (!emailInput.checkValidity()) {
    isValid = false;
    emailInput.setCustomValidity("Please enter a valid email address.");
  } else {
    emailInput.setCustomValidity("");
  }

  // Validate message input
  if (messageInput.value === "") {
    isValid = false;
    messageInput.setCustomValidity("Please enter a message.");
  } else {
    messageInput.setCustomValidity("");
  }

  // Submit form if all inputs are valid
  if (!isValid) {
    event.preventDefault();
  }
});

// JavaScript form submission
form.addEventListener("submit", function (event) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const receiveEmail = "gm.steelindustries@gmail.com";
  const emailButton = document.querySelector("button.main-btn");

  // Compose email message
  const subject = `[Contact-Form] ${nameInput.value}`;
  const body = `${messageInput.value}\n\n${nameInput.value}\n${emailInput.value}`;

  // Open default email app and fill in appropriate fields
  const mailtoUrl = `mailto:${encodeURIComponent(
    receiveEmail
  )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // Open Email client on click
  window.open(mailtoUrl);

  // Prevent default form submission
  event.preventDefault();
});
