const input = document.querySelector("#email");
const submitButton = document.querySelector(".button--submit");
const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const errorMess = document.querySelector(".message--error");
const errorIcon = document.querySelector(".icon--error");
let errorText = [];

submitButton.addEventListener("click", (e) => {
  // reset errors
  errorText = [];
  // validate email address
  const email = input.value;

  if (email == "" || email === undefined) {
    // prevent sending data
    e.preventDefault();
    errorText.push("Please provide us your email");
    // show error
    errorIcon.style.display = "block";
    errorMess.innerText = errorText[0];
  } else if (!email.match(regEx)) {
    // prevent sending data
    e.preventDefault();
    errorText.push("Please provide us your valid email");
    // show error icon
    errorIcon.style.display = "block";
    errorMess.innerText = errorText[0];
  }

  if (!errorText.length > 0) {
    // hide error icon
    errorIcon.style.display = "none";
    errorMess.innerText = "Thank you for subscribing to our newsletter.";
  }
});
