function showPassword() {
  var password = document.getElementById('password');

  if (password.type == "password") {
    password.type = "text";
  } else {
      password.type = "password";
  }
}

function validateEmail() {
  var email = document.getElementById('email').value;
  if (email == "") {
    alert("empty email");
    return false;
  }

  if (!email.includes("@")) {
    document.getElementById("email").focus();
    alert("Email must have @ symbol");
    return false;
  }
  if (!email.includes(".")) {
    document.getElementById("email").focus();
    alert("Email must have a . in it");
    return false;
  }

  if (email.length > 128) {
    document.getElementById("email").focus();
    alert("Email must be less than 128 characters");
    return false;
  }

  return true;
}

function validatePassword(){
    var password = document.getElementById("password").value;

    if (!validateField(password)) {
      alert('Password is not valid');
      return false;
    }
    return true;
}

function validateField(value) {
  var re = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;

  var test = re.test(value);

  if (!test) {
    return false;
  }

  return true;
}

function validateUsername(){
  var username = document.getElementById("username").value;

  if (!validateField(username)) {
    alert('Email is not Valid');
    return false;
  }
  return true;
}

function validateForm(){
  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  if (!validateEmail()) {
    return false;
  }

  return true;
}
