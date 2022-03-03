//Create references to the dropdown's
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const names = {
  male: {
    Sunday: "Kwasi",

    Monday: "Kwadwo",

    Tuesday: "Kwabena",

    Wednesday: "Kwaku",

    Thursday: "Yaw",

    Friday: "Kofi",

    Saturday: "Kwame",
  },

  Female: {
    Sunday: "Akosua",

    Monday: "Adwoa",

    Tuesday: "Abenaa",

    Wednesday: "Akua",

    Thursday: "Yaa",

    Friday: "Afua",

    Saturday: "Ama",
  },
};
// console.log (names["male"]["Tuesday"])
const year = document.querySelector("input[name=year]");
const month = document.querySelector("input[name=month]");
const day = document.querySelector("input[name=day]");
function ValidateForm(event) {
  event.preventDefault();

  const century = parseInt(year.value.slice(0, 2));
  const getyear = parseInt(year.value.slice(2));

  const dayOfWeek =
    (century / 4 -
      2 * century -
      1 +
      (5 * getyear) / 4 +
      (26 * (parseInt(month.value) + 1)) / 10 +
      parseInt(day.value)) %
    7;

  console.log(dayOfWeek.toFixed());
}
// ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
