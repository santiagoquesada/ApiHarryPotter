const api = "https://hp-api.onrender.com/api/characters";
const button = document.getElementById("button-change");
const img = document.getElementById("img-simp");
const nameCharacter = document.getElementById("name-character");
const gender = document.getElementById("gender");
const age = document.getElementById("age");

button.addEventListener("click", apiHarry);
const year = 2022;

function apiHarry() {
    const n = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    fetch(api)
    .then(response => response.json())
    .then(data => (img.src = data[n].image, nameCharacter.textContent = data[n].name, gender.textContent = data[n].gender, age.textContent = data[n].yearOfBirth))
}