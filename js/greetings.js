const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const name = loginInput.value;
  localStorage.setItem("username", name);
  getGreeting(name);
}

function getGreeting(name) { 
  greeting.innerText = `Hello ${name}`;
  greeting.classList.remove("hidden");
}

const username = localStorage.getItem("username");

if(username === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    getGreeting(username);
  }