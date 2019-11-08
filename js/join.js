const form = document.getElementById("form");
const content = document.getElementById("registrationform_page_content");
const reg_recieved = document.getElementById("reg_recieved");

form.onsubmit = function(event){ //when the form is submitted => values are updated and shown in console
  event.preventDefault();
  const first_name = document.getElementById("first_name_inp").value;
  const last_name = document.getElementById("last_name_inp").value;
  const study = document.getElementById("study_inp").value;
  const dateofbirth = document.getElementById("dateofbirth_inp").value;
  const email = document.getElementById("email_inp").value;
  const ph_num = document.getElementById("ph_inp").value;
  const like_lawn = document.getElementById("range_inp").value;
  const exp = document.getElementById("experience_inp").value;
  const allergies = document.getElementById("allergies_inp").value;
  const data = {
    name: first_name + " " + last_name,
    study: study,
    dateOfBirth: dateofbirth,
    email: email,
    phoneNumber: ph_num,
    range: like_lawn,
    experience: exp,
    allergies: allergies,
  };
  console.log("Dette blir sent til databasen: "+JSON.stringify(data));
  content.style.display = "none"; //the form is hidden
  // The submitted-message is shown
  reg_recieved.style.display = "block";
  reg_recieved.style.opacity = 1;
  reg_recieved.style.visibility = "visible";
  reg_recieved.style.position = "relative";
};
