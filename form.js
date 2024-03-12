document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  //error messages
  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  };

  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };

  //input values
  const validateInput = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Username authentication
    if (!usernameValue) {
      setError(username, "Username is required");
    } else {
      setSuccess(username);
    }

    // Email Address authentication
    if (!emailValue) {
      setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
      setError(email, "Provide a valid email address");
    } else {
      setSuccess(email);
    }

    // Password authentication
    if (!passwordValue) {
      setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
      setError(password, "Password too short");
    } else {
      setSuccess(password);
    }
  };

  //sign up button
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();
  });

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
});
