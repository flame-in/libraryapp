// Password match Check

function check() {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Passwords match';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Passwords do not match';
  }
}

// Strength Meter

  var strength = {
  0: "Poor 😣",
  1: "Bad 😞",
  2: "Medium 😌",
  3: "Good 😊",
  4: "Strong 😁"
}

var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
  var val = password.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;
  meter.style.display = "flex"

  // Update the text indicator
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score]; 
  } else {
    text.innerHTML = "";
  }
});

// Password Regex & validation

let errorPassword = document.getElementById("errorPassword");

var regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  
function validatepw() {  
  if(regexp.test(password.value)){
    errorPassword.innerHTML = "Valid password.";
    errorPassword.style.color = "green";
    return true;
}
else{
    errorPassword.innerHTML = "Invalid password.<br> Atleast 1 Lowercase, 1 Uppercase and 1 Digit required.<br> Minimum length of 8 required."
    errorPassword.style.color = "red" ;
    return false;
}
}

// Email Regex & validation

let email = document.getElementById("inputEmail");
let errorEmail = document.getElementById("errorEmail");

function validate() {
    let emailexp=  /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.+([a-z]{2,3})(.[a-z]{2,3})?$/

    if(emailexp.test(email.value)){
        errorEmail.innerHTML = "Valid e-mail.";
        errorEmail.style.color = "green";
        return true;
    }
    else{
        errorEmail.innerHTML = "Invalid e-mail format."
        errorEmail.style.color = "red" ;
        return false;
    }
}

//Phone No regex & validation

let phoneno = document.getElementById("inputPhone");
let errorPhone = document.getElementById("errorPhone");

function validatephone() {
  var regexphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if(regexphone.test(phoneno.value)){
      errorPhone.innerHTML = "Valid number.";
      errorPhone.style.color = "green";
      return true;
  }
  else{
      errorPhone.innerHTML = "Invalid phone number. Formats supported : <br> 1)XXX-XXX-XXXX<br>2)XXX.XXX.XXXX<br>3)XXX XXX XXXX"
      errorPhone.style.color = "red" ;
      return false;
  }
}
