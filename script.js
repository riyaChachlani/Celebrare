window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // After 2 seconds, move to the right and resize to half the screen
  setTimeout(() => {
    document.body.classList.add("moved");
  }, 3000); // 2 seconds for full-screen transition + 2 seconds delay before moving right

  setTimeout(() => {
    document.querySelector(".Login-form").classList.add("vis");
  }, 4000);
  setTimeout(() => {
    document.querySelector(".enroll").classList.add("vi");
  }, 4000);
  setTimeout(() => {
    document.querySelector(".Cname").classList.add("v");
  }, 4000);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".transition-logo").classList.add("visible");
  }, 2000); // 2000 milliseconds = 2 seconds
});
const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eye");

eyeIcon.addEventListener("click", function () {
  // Toggle the type attribute of the password input between 'password' and 'text'
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Toggle the icon class between 'fa-eye' and 'fa-eye-slash'
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});

const usernameInput = document.getElementById("username");
const passwordInput1 = document.getElementById("password");
const loginButton = document.querySelector(".btn");
const spinner = document.querySelector(".spinner");
const btnText = document.querySelector(".btn-text");
const mainContainer = document.querySelector(".image-container");
const image1 = document.querySelector(".transition-logo-2");

// Function to check if both inputs are filled
function checkInputs() {
  if (
    usernameInput.value.trim() !== "" &&
    passwordInput1.value.trim() !== "" &&
    passwordInput1.value.length >= 8
  ) {
    loginButton.classList.add("active");
    loginButton.removeAttribute("disabled");
  } else {
    loginButton.classList.remove("active");
    loginButton.setAttribute("disabled", true);
  }
}

// Event listeners for input changes
usernameInput.addEventListener("input", checkInputs);
passwordInput1.addEventListener("input", checkInputs);

// Show spinner and disable the button on form submission
loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  // If both inputs are filled
  if (loginButton.classList.contains("active")) {
    btnText.style.display = "none"; // Hide "Login" text
    spinner.style.display = "inline-block"; // Show the spinner
    loginButton.setAttribute("disabled", true); // Disable button to prevent multiple clicks

    // Simulate loading process (e.g., form submission or server request)
    setTimeout(() => {
      spinner.style.display = "none"; // Hide spinner after loading
      btnText.style.display = "inline-block"; // Show "Login" text again
      loginButton.removeAttribute("disabled"); // Enable button
    }, 3000); // Simulate 3 seconds of loading

    setTimeout(() => {
      document.querySelector(".vis").style.display = "none";
      document.querySelector(".transition-image").classList.add("final2");
      document.querySelector(".vi").style.display = "none";
      document.querySelector(".v").style.display = "none";
      document.querySelector(".transition-logo").classList.add("final");
    }, 3500);
  }
});

const enrollButton = document.querySelector(".btn-2");
const dropdownMenu = document.querySelector(".dropdown-menu");

enrollButton.addEventListener("click", () => {
  // Toggle the dropdown menu visibility
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

const passwordInput3 = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

// Check password validity on input change
passwordInput3.addEventListener("input", () => {
  if (passwordInput3.value.length < 8) {
    errorMessage.style.display = "block"; // Show error message
  } else {
    errorMessage.style.display = "none"; // Hide error message
  }
});
