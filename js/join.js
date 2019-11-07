window.onload = function(){ //onload the submitted-message-div is hidden
  document.getElementById("reg_recieved").style.display = "none";
}

document.getElementById("form").onsubmit = function(event){ //when the submit button is clicked => values are updated and shown in console
  event.preventDefault();
  let first_name = document.getElementById("first_name_inp").value;
  let last_name = document.getElementById("last_name_inp").value;
  let study = document.getElementById("study_inp").value;
  let dateofbirth = document.getElementById("dateofbirth_inp").value;
  let email = document.getElementById("email_inp").value;
  let ph_num = document.getElementById("ph_inp").value;
  let like_lawn = document.getElementById("range_inp").value;
  let exp = document.getElementById("experience_inp").value;
  let allergies = document.getElementById("allergies_inp").value;

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

  document.getElementById("registrationform_page_content").style.display = "none"; //the form is hidden
  document.getElementById("reg_recieved").style.display = "block"; //the submitted-message is shown
};
