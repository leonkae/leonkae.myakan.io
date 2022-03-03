//Create references to the dropdown's
const names = {
    male:{
        Sunday: "Kwasi",

Monday: "Kwadwo",

Tuesday: "Kwabena",

Wednesday: "Kwaku",

Thursday: "Yaw",

Friday: "Kofi",

Saturday: "Kwame"
    },

Female:{
    Sunday: "Akosua",

    Monday: "Adwoa",

    Tuesday: "Abenaa",

    Wednesday: "Akua",

    Thursday: "Yaa",

    Friday: "Afua",

    Saturday: "Ama"
}
}

const year = document.querySelector("input[name=year]");
const month = document.querySelector("input[name=month]");
const daySelect = document.getElementById("day");
const genderSelect = document.getElementById("gender-selector");
const birthdaySelect = document.getElementById("birthday-selector");
const genderIndex = document.querySelector(".gender").selectedIndex;
const gender = document.querySelector(".gender").options;

console.log(gender[genderIndex]);

function ValidateForm(event) {
  event.preventDefault();
  const GetDay =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  console.log(year.value);

}
