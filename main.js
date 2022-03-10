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
// console.log(days[4]);
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
// console.log(names["male"]["Tuesday"]);

const form = document.getElementById("form");
form.addEventListener("submit", ValidateForm);

function ValidateForm(event) {
  event.preventDefault();
  const date = document.querySelector("input[name=date]");
  // console.log(date.value);
  if (date.value === "") {
    alert("We don't know your birthday!!!");
  }

  const gender = document.querySelector("input[name=gender]:checked");
  if (gender === null){
    alert ("Please select gender!!!");
  }
  const convertedDate = new Date(date.value);

    // const akanname = names[gender][birthDate];
    // alert(`your akan nam*e is ${akanname}`); 
  const dayOfWeek = days[convertedDate.getDay()]; 
  // console.log (dayOfWeek)
  const akanName = names[gender][dayOfWeek];
  
  // console.log(days[dayOfWeek]);

  


  //  console.log(convertedDate.getDay());

  // const century = parseInt(year.value.slice(0, 2));
  // const getyear = parseInt(year.value.slice(2));

  // const dayOfWeek =
  //   (century / 4 -
  //     2 * century -
  //     1 +
  //     (5 * getyear) / 4 +
  //     (26 * (parseInt(month.value) + 1)) / 10 +
  //     parseInt(day.value)) %
  //   7;
    
    // if (day <=0){
    //   alert(`invalid`)
    //   else if (day>=31){ 
    //     alert (`your aken name is ${akanname}`) 
    //   }
    // }
    //   if (month<=0){
    //     alert(`invalid`)
    //     else if(month>=12){
    //       alert(`invalid`)
    //     }

    //   }
  // const birthDay = days[dayOfWeek.toFixed(1)];
//   const akanname = names[gender][birthDay]
//   alert (`your akan nam*e is ${akanname}`)  
}
// ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7





