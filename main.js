//Create references to the dropdown's
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");
const genderSelect = document.getElementById("gender-selector");
const birthdaySelect = document.getElementById("birthday-selector");
const genderIndex = document.querySelector(".gender").selectedIndex
const gender = document.querySelector(".gender").options;



console.log (gender[genderIndex])

function ValidateForm(event){
    event.preventDefault()
}