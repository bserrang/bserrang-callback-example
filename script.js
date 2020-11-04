const setTimeoutButton = document.querySelector("#timeoutButton");
const fetchButton = document.querySelector("#fetchButton");

setTimeoutButton.addEventListener("click", timeoutFunc, false);
fetchButton.addEventListener("click", fetchFunc, false);

let callbackFunc = function() {
  alert("prueba callback");
};

function timeoutFunc() {
  setTimeout(callbackFunc, 1000);
}

function fetchFunc() {
  fetch("./data.json")
    .then(getResponseJsonData)
    .then(showMessage);
}

function getResponseJsonData(response) {
  return response.json();
}

function showMessage(data) {
  alert(`El nombre del usuario es ${data.nombre}`);
}
