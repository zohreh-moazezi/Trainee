const errors = {
    required: "Enter ",
  };
  
  const axios = window.axios;
  const client = axios.create({
    baseURL: "http://localhost:4200/",
  });
  const form = document.querySelector("form");
  
  // Separation of Concerns
  // Single Responsibility
  
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  
  const useNameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");
  
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  
  const userNameHelperTextEl = document.querySelector(
    "#username ~ .form-helper-text"
  );
  const passwordHelperTextEl = document.querySelector(
    "#password ~ .form-helper-text"
  );
  
  const formValidation = () => {
    let isValid = true;
  
    if (!username.value) {
      userNameHelperTextEl.classList.add("show-helper-text");
      usernameInput.classList.add("error");
  
      useNameError.innerHTML = "Enter username";
  
      isValid = false;
    } else {
      usernameInput.classList.remove("error");
      userNameHelperTextEl.classList.remove("show-helper-text");
      useNameError.innerHTML = "";
    }
  
    if (!password.value) {
      passwordInput.classList.add("error");
      passwordHelperTextEl.classList.add("show-helper-text");
  
      passwordError.innerHTML = "Enter password";
  
      isValid = false;
    } else {
      passwordInput.classList.remove("error");
      passwordHelperTextEl.classList.remove("show-helper-text");
      passwordError.innerHTML = "";
    }
  
    return isValid;
  };
  
  const submitRequest = async () => {
    try {
      const response = await client.post(`${client.defaults.baseURL}auth/login`, {
        username: username.value,
        password: password.value,
      });
      const { access_token, refresh_token } = response.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      alert("Login Successful");
    window.location.href = "overview.html";

    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        usernameInput.classList.add("error", "label-error");
        passwordInput.classList.add("error", "label-error");
      }
    }
  };
  
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    useNameError.innerHTML = " ";
    passwordError.innerHTML = " ";
  
    const isValid = formValidation();
  
    if (!isValid) return;
  
    await submitRequest();
  });
  