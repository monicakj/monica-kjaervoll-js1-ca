const form = document.querySelector("#contactForm");
const message = document.querySelector("#message");
const button = document.querySelector("button");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(name.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 24) == true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
    
    console.log("Thank you for contacting us. We will be in touch with you very soon!");
}

function checkButtonDisabled() {
    if (checkLength(name.value, 1) && checkLength(subject.value, 9) && validateEmail(email.value) && checkLength(address.value, 24)) {
        button.disabled = false;
    } else {

        message.innerHTML = "";

        button.disabled = true;
    }
}

name.addEventListener("keyup", checkButtonDisabled);
subject.addEventListener("keyup", checkButtonDisabled);
email.addEventListener("keyup", checkButtonDisabled);
address.addEventListener("keyup", checkButtonDisabled);

function submitForm(submit) {
    submit.preventDefault();

    message.innerHTML = '<div id="message">Your message has been sent!</div>';

    form.reset();
}

form.addEventListener("submit", validateForm);


function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}