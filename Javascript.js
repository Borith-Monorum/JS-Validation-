
const formInformation = document.querySelector("#form-information");
const usernameField = formInformation.querySelector(".form-group .username");
const passwordField = formInformation.querySelector(".form-group .password");
const emailField = formInformation.querySelector(".form-group .email");
const errMessageUsernameField = formInformation.querySelector(".form-group  .err-username");
const errMessagePasswordField = formInformation.querySelector(".form-group  .err-password");
const errMessageEmailField = formInformation.querySelector(".form-group  .err-email");
const eyePassword = formInformation.querySelector(".form-group .eye-password");

formInformation.addEventListener("submit", function(e){
    e.preventDefault();
    checkUsernameField();
    checkPasswordField();
    checkEmailField();
});
usernameField.addEventListener("keyup", function(){
    checkUsernameField();
})
passwordField.addEventListener("keyup", function(){
    checkPasswordField();
})
emailField.addEventListener("keyup", function(){
    checkEmailField();
})
eyePassword.addEventListener("click", function(){
    handleClickEyePassword();
})
function checkUsernameField() {
    let username = usernameField.value.trim();

    // ----------------Username-------------------
    if (username === ""){
        errMessageUsernameField.style.display = "block";
        errMessageUsernameField.innerHTML = "Username is required";
        usernameField.style.outlineColor = "red";
        usernameField.style.borderColor = "red";
   
    }else{
            errMessageUsernameField.style.display = "none";
            usernameField.style.borderColor = "#ccc";
          
    }
}

// ---------------------Email----------------------
function checkEmailField(){
    let email = emailField.value.trim();
    if (email === ""){
        errMessageEmailField.style.display = "block";
        errMessageEmailField.innerHTML = "Email is required";	
        emailField.style.borderColor = "red";
    }else {
        if (email.toLowerCase().match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ))
          {
            errMessageEmailField.style.display = "none";	
            emailField.style.borderColor = "#ccc";
          }else {
              errMessageEmailField.style.display = "block";
              emailField.style.outlineColor = "none";	
              emailField.style.borderColor = "none";
              errMessageEmailField.innerHTML = "Email is valid"
          }
        }

    }


// -------------------Password-----------------
function checkPasswordField() {
    let password = passwordField.value.trim();
    if (password === ""){
     errMessagePasswordField.style.display = "block";
     errMessagePasswordField.innerHTML = "Password is required";
     passwordField.parentElement.style.borderColor = "red";
    } else{
        if(password.length < 8){
            errMessagePasswordField.style.display = "block";
            errMessagePasswordField.innerHTML = "Password must be at least 8 characters long";
       
        }else{
            errMessagePasswordField.style.display = "none";
            passwordField.parentElement.style.borderColor = "none";	
        }
    }
}

function handleClickEyePassword(){
    let passwordType = passwordField.getAttribute("type");
    if (passwordType === "password") {
        passwordField.setAttribute("type", "text");
    }else{
        passwordField.setAttribute("type", "password");	
    }
}