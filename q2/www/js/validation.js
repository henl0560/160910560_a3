function validateEmail() {
  var email = document.getElementById('id').value;
  if (email == "") {
    alert("empty email")
    return false;
  }
}

function showPassword() {
  var password = document.getElementById('password');

  if (password.type === "password") {
    password.type = "text";
  }
  else {
      password.type = "password";
}
}

function validatePassword(){
  var password = document.getElementById('password').value;
  if password==""{
    alert("empty password");
    return false;
  }
  return true;
}

function validateUsername(){
  var username = document.getElementById("username");
  if (username =='');{
    document.getElementById("username").focus();
    alert("Username must not be empty")
    return false;
  }
  return true;
}

function validateForm(){
  if !validateUsername(){
    return false;
  }
  if !validatePassword(){
    return false;
  }
  if !validateEmail(){
    return false;
  }
  return true;
}
