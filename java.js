let form = document.getElementsByTagName("form")[0];

let statsUsername = document.querySelector(".statusMessage.username");
let statspassword = document.querySelector(".statusMessage.password");
let statsEmail = document.querySelector(".statusMessage.email");
let statsAdresse = document.querySelector(".statusMessage.adresse");
let statsZip = document.querySelector(".statusMessage.zip");
let statsCity = document.querySelector(".statusMessage.city");
let statsContry = document.querySelector(".statusMessage.contry");
let statsFirstname = document.querySelector(".statusMessage.firstname");
let statsLastname = document.querySelector(".statusMessage.lastname");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let status = true;

    statsContry.innerText = "";

    if (form.contry.value == "") {
        statsContry.innerText = "du skal udfylde land";
        status = false;
        document.getElementById("contry").focus();
    }


    statsCity.innerText = "";
    
    if (form.city.value == "") {
        statsCity.innerText = "du skal udfylde by";
        status = false;
        document.getElementById("city").focus();
    }

    
    statsZip.innerText = "";
    
    if (form.zip.value == "") {
        statsZip.innerText = "du skal udfylde post nummer";
        status = false;
        document.getElementById("zip").focus();
    }
    
    
    statsAdresse.innerText = "";
    
    if (form.adresse.value == "") {
        statsAdresse.innerText = "du skal udfylde adresse";
        status = false;
        document.getElementById("adresse").focus();
    }


    statsLastname.innerText = "";
    
    if (form.lastname.value == "") {
        statsLastname.innerText = "du skal udfylde efternavn";
        status = false;
        document.getElementById("lastname").focus();
    }


    statsFirstname.innerText = "";
    
    if (form.firstname.value == "") {
        statsFirstname.innerText = "du skal udfylde fornavn";
        status = false;
        document.getElementById("firstname").focus();
    }


    statspassword.innerText = "";
    
    if (form.password.value == "") {
        statspassword.innerText = "du skal udfylde password";
        status = false;
        document.getElementById("password").focus();
    }


    statsUsername.innerText = "";

    if (form.username.value == "") {
        statsUsername.innerText = "du skal udfylde username";
        status = false;
        document.getElementById("username").focus();
    }


    statsEmail.innerText = "";
    
    if (form.email.value == "") {
        statsEmail.innerText = "du skal udfylde email";
        status = false;
        document.getElementById("email").focus();
    }

    var atpos = myForm.email.value.indexOf("@");
    var dotpos = myForm.email.value.lastIndexOf(".");
    
    if(atpos < 1){
        statsEmail.innerText = "Skriv gyldig email";
        event.preventDefault();
        return false;
    }
    if(dotpos <= atpos +1){
        statsEmail.innerText = "Skriv gyldig email";
        event.preventDefault();
        return false;
    }
    if(myForm.email.value.length <= dotpos + 2){
        statsEmail.innerText = "Skriv gyldig email";
        event.preventDefault();
        return false;
    }

    if (status == false) {
        return
    }

    fetch("login.php")
});