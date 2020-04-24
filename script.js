// JavaScript source code
const email = document.getElementById('email');
const emailIsValid = document.getElementById('emailIsValid');

const password = document.getElementById('password');
const passwordIsValid = document.getElementById('passwordIsValid');

const connectButton = document.getElementById('connectButton');

email.addEventListener('change', function (e) {
    const value = e.target.value;
    if (value.includes('@') && value.includes('.')) {
        emailIsValid.setAttribute('style', 'color:green');
        emailIsValid.innerHTML = 'Email valid.';
        password.disabled = false;
    } else {
        emailIsValid.setAttribute('style', 'color:red');
        emailIsValid.innerHTML = 'Email not valid !';
    };
});

password.addEventListener('change', function (e) {
    const value = e.target.value;
    if (value.includes('-') || value.includes('_')) {
        passwordIsValid.setAttribute('style', 'color:green');
        passwordIsValid.innerHTML = 'Password valid.';
        connectButton.disabled = false;
    } else {
        passwordIsValid.setAttribute('style', 'color:red');
        passwordIsValid.innerHTML = 'Password not valid !';
    };
});
