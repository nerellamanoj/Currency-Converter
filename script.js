const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
const loginForm = document.getElementById("loginform");
const signupForm = document.getElementById("signupform");

//  check if signup details match login details
function checkLoginDetails(email, password) {
  
  const loginDetails = JSON.parse(localStorage.getItem("loginDetails")) || [];

  // Check if there's a match
  return loginDetails.some((user) => user.email === email && user.password === password);
}


loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email.trim() !== "" && password.trim() !== "") {
    // Check if login details match signup details
    if (checkLoginDetails(email, password)) {
      alert("Login successfully")
      
      window.location.href = "./otp.html";
    } else {
      alert("User does not exist. Please check the details");
    }
  } else {
    alert("Please fill in all the fields.");
  }
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (email.trim() !== "" && password.trim() !== "") {
    // Check if login details match signup details
    if (checkLoginDetails(email, password)) {
      alert("User already Exist.");
    } 
    else {
      
      const newUser = { email, password };
      const loginDetails = JSON.parse(localStorage.getItem("loginDetails")) || [];
      loginDetails.push(newUser);
      localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
      alert("Signup successfully")

      // Redirect to the OTP page or perform signup action
      window.location.href = "./otp.html";
    }
  } else {
    alert("Please fill in all the fields.");
  }
});
// Ha

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
      "show-signup"
    );
  });
});
