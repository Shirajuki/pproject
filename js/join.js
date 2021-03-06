const form = document.getElementById("form");
const content = document.getElementById("registrationformPageContent");
const regRecieved = document.getElementById("regRecieved");

form.onsubmit = function(event){ //when the form is submitted => values are updated and shown in console
  event.preventDefault();
  const firstName = document.getElementById("firstNameInp").value;
  const lastName = document.getElementById("lastNameInp").value;
  const campus = document.getElementById("campusInp").value;
  const dateofbirth = document.getElementById("dateofbirthInp").value;
  const email = document.getElementById("emailInp").value;
  const phNum = document.getElementById("phInp").value;
  const likeLawn = document.getElementById("rangeInp").value;
  const exp = document.getElementById("experienceInp").value;
  const allergies = document.getElementById("allergiesInp").value;
  const data = {
    name: firstName + " " + lastName,
    campus: campus,
    dateOfBirth: dateofbirth,
    email: email,
    phoneNumber: phNum,
    range: likeLawn,
    experience: exp,
    allergies: allergies,
  };
  console.log("Dette blir sent til databasen:",JSON.stringify(data));
  content.style.display = "none"; //the form is hidden
  // The submitted-message is shown
  regRecieved.style.display = "block";
  regRecieved.style.opacity = 1;
  regRecieved.style.visibility = "visible";
  regRecieved.style.position = "relative";
};
