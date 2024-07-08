const axios = window.axios;
const client = axios.create({
  baseURL: "http://localhost:4200/",
});
const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const useNameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const labels = document.querySelectorAll("label");

  const loginForm = document.getElementById("login-form");
  const textField = document.getElementById("text-field");
  const inputs = document.getElementById("inputs");

  useNameError.textContent = " ";
  passwordError.textContent = " ";

  let valid = true;

  if (!username) {
    useNameError.textContent = "Enter username";
    usernameInput.classList.add("error");
    // loginForm.style.height = "18rem";
    textField.style.height = "4.93rem";
    inputs.style.height="11.87rem";
    valid = false;
  }
  if (!password) {
    passwordError.textContent = "Enter password";
    passwordInput.classList.add("error");
    // loginForm.style.height = "18rem";
    textField.style.height = "4.93rem";
    inputs.style.height="11.87rem";

    valid = false;
  }

  if (valid) {
    try {
      const response = await client.post(
        `${client.defaults.baseURL}auth/login`,
        {
          username: username,
          password: password,
        }
      );
      console.log(response);
      const { access_token, refresh_token } = response.data;
      console.log(access_token);
      console.log(refresh_token);
      localStorage.setItem("access token:", access_token);
      localStorage.setItem("refresh token:", refresh_token);
      alert("Login Successful");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        usernameInput.classList.add("error", "label-error");
        passwordInput.classList.add("error", "label-error");
      }
    }
  }
});
