const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const dob = document.getElementById('dob');

form.addEventListener('Login', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const dobValue = dob.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be empty');
    } else {
        setSuccessFor(username);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be empty');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
    }

        if (emailValue === '') {
            setErrorFor(email, 'Email cannot be empty');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email');
        } else {
            setSuccessFor(email);
        }

    if (phoneValue === '') {
        setErrorFor(phone, 'Phone Number cannot be empty');
    } else {
        setSuccessFor(phone);
    }
    if (dobValue === '') {
        setErrorFor(dob, 'Date of birth cannot be empty');
    } else {
        setSuccessFor(dob);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

$(document).ready(function(){
  $('#dob').mask('00/00/0000');
  $('#phone').mask('0000-0000-000');
});
