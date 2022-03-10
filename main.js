//Create references to the dropdown's
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
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

  female: {
    Sunday: "Akosua",

    Monday: "Adwoa",

    Tuesday: "Abenaa",

    Wednesday: "Akua",

    Thursday: "Yaa",

    Friday: "Afua",

    Saturday: "Ama",
  },
};

const form = document.getElementById("form");
form.addEventListener("submit", ValidateForm);

function ValidateForm(event) {
  event.preventDefault();
  const date = document.querySelector("input[name=date]");

  if (date.value === "") {
    return alert("We don't know your birthday!!!");
  }

  const gender = document.querySelector("input[name=gender]:checked");
  if (gender === null) {
    return alert("Please select gender!!!");
  }
  // const convertedDate = new Date(date.value);
  const dayOfWeek = days[new Date(date.value).getDay()];

  const akanName = names[gender.value][dayOfWeek];
  alert("your akan is...  " + akanName);
}
