
const formInformation = document.querySelector("#form-information");
const usernameField = formInformation.querySelector(".form-group .username");
const errMessageUsernameField = formInformation.querySelector(".form-group > .error-message");

formInformation.addEventListener("submit", function(e){
    e.preventDefault();
    checkUsernameField();
});

function checkUsernameField() {
    let username = usernameField.value.trim();

    if (username === ""){
        errMessageUsernameField.style.display = "block";
        errMessageUsernameField.innerHTML = "Username is required";
        usernameField.style.outlineColor = "red";
    } else{
        errMessageUsernameField.style.display = "none";
        usernameField.style.outline = "none";
    }
}
