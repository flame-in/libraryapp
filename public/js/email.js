let email = document.getElementById("inputEmail");
let errorEmail = document.getElementById("errorEmail");


function validate() {
    let regexp=  /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.+([a-z]{2,3})(.[a-z]{2,3})?$/

    if(regexp.test(email.value)){
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