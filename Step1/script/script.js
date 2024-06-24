document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const useNameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");


    useNameError.textContent = " ";
    password.textContent = " ";

    let valid = true;

    if (!userName) {
      useNameError.textContent = "Enter username";
      userNameInput.classList.add("error");
      valid = false;
    }
    if (!password) {
      passwordError.textContent = "Enter password";
      passwordInput.classList.add("error");
      valid = false;
    }

    if (valid) {
      form.submit();
    }
  });
});
