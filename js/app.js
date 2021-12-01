const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const ID = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(ID, loginInput.value) ;
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(ID);
    greeting.innerText = `반갑습니다 ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME) ;
}

const saveUsername = localStorage.getItem(ID);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}