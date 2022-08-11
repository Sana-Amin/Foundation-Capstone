document.addEventListener("DOMContentLoaded", () => {
  const lgForm = document.querySelector("#login-form");
  const createAccountForm = document.querySelector("#rgs-form");

  document.querySelector("#linkSignIn").addEventListener("click", (e) => {
    e.preventDefault();
    lgForm.classList.remove("box--hidden");
    createAccountForm.classList.add("box--hidden");
  });
  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      lgForm.classList.add("box--hidden");
      createAccountForm.classList.remove("box--hidden");
    });
});

const loginForm = document.getElementById("login-form");
const signUpForm = document.getElementById("rgs-form");

function login(e) {
  e.preventDefault();

  let username = document.getElementById("username-login");
  let password = document.getElementById("password-login");

  let loggingIn = {
    username: username.value,
    password: password.value,
  };
  if (username.value == "" || password.value == "") {
    //console.log("user not found!");
    alert("Please enter a valid username or password.");
  } else {
    axios
      .post("/api/login", loggingIn)
      .then((res) => {
        alert("Your In!");
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/home";
      })
      .catch((error) => {
        console.log(error);
        alert("Please register/check your password.");
      });
  }
}

function signUp(e) {
  e.preventDefault();

  let name = document.getElementById("name-rgs");
  let username = document.getElementById("username-rgs");
  let password = document.getElementById("password-rgs");

  let newUser = {
    name: name.value,
    username: username.value,
    password: password.value,
  };

  if (
    newUser.username == null ||
    newUser.username == "" ||
    newUser.password == null ||
    newUser.password == "" ||
    newUser.name == ""
  ) {
    alert("Please enter a valid username or password.");
  } else {
    alert("You've successfully registered!");

    axios.post("/api/signUp", newUser).then((res) => {
      name.value = "";
      username.value = "";
      password.value = "";
    });
  }
}

loginForm.addEventListener("submit", login);
signUpForm.addEventListener("submit", signUp);
