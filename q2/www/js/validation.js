function myFunction() {
  var x = document.getElementById("myInput");
  var x = document.getElementById("eye");
  if (x.type === "password") {
    x.type = "text";
    y.textcontent = "<i class="fa fa-eye-slash">"
  } else {
    x.type = "password";
    y.textcontent = "<i class="fa fa-eye">"

  }
}

function validateFormEmail() {
  var x = document.getElementById("myEmail");
  if (x === "") {
    alert("Email must be filled out");
    return false;
  }

  return true;
}

function validateFormUser() {
  var x = document.getElementById("myUser");

  if (x == "") {
    alert("Username must be filled out");
    return false;
  }

  if (x.contains("@") == True) {
    alert("")
    return false;
  }

  return true;
}

function validateFormPassword() {
  var x = document.getElementById("myInput");
  if (x == "") {
    alert("Password must be filled out");
    return false;
  }
}
