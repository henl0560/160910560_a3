function validateCountry(){
  x var = document.getElementById('country').value;
  if country ==''{
    alert("Empty Country");
    document.getElementById('country').focus();
    return false;
  }
  return true;
}

function validateDescription(){
  x var = document.getElementById('description').value;
  if country ==''{
    alert("Empty Description");
    document.getElementById('description').focus();
    return false;
  }
  return true;
}

function validateForm(){
  if !validateCountry(){
    return false;
  }
  if !validateDescription(){
    return false;
  }
  return true;
}
