const handleSubmitEl = document.querySelector("#handleSubmit");
const emailError = document.querySelector("#emailError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const emailSuccess = document.querySelector("#emailSuccess");
const confirmPasswordSuccess = document.querySelector("#passwordSuccess");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
handleSubmitEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(passwordInput.value === confirmPasswordInput.value) {
        confirmPasswordSuccess.textContent = "Passwords Match";
        setTimeout(() => {
            confirmPasswordSuccess.textContent = ""
        }, 2000)
    } else {
        confirmPasswordError.textContent = "Passwords do not match";
        setTimeout(() => {
            confirmPasswordError.textContent = ""
        }, 2000)
    };

    if(emailInput.value.match(regex)) {
        emailSuccess.textContent = "Email is Valid";
        setTimeout(() => {
            emailSuccess.textContent = ""
        }, 2000)

    } else {
        emailError.textContent = "Invalid Email";
        setTimeout(() => {
            emailError.textContent = ""
        }, 2000)
    }
})