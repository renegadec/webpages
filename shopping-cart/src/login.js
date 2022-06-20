// ! Login Page 

const log_in = document.getElementById('login');
const reg = document.getElementById('register');
const btn = document.getElementById('btn');

const user_name = document.getElementById('name');
const reg_name = document.getElementById('reg_name');
const password = document.getElementById('password');
const reg_password = document.getElementById('reg_password');
const confirm_password = document.getElementById('confirm_password')
const errorMessage = document.getElementById('error');
const pass_match = document.getElementById('pass_match');

let register = () => {
    log_in.style.left = "-400px";
    reg.style.left = "50px";
    btn.style.left = "110px";
}

let login = () => {
    log_in.style.left = "50px";
    reg.style.left = "450px";
    btn.style.left = "0";
}

// ! Sign UP

reg.addEventListener('submit', (e) => {
    let messages = [];

    // if (reg_password.value !== confirm_password.value){
    //     messages.push('Password doesnt match')
    // }

    if (reg_name.value === '' || reg_name.value == null) {
        messages.push('Name is required')
    }

    if (reg_password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (reg_password.value.length > 20 ) {
        messages.push('Password must be less than 20 characters')
    }

    if (reg_password.value === 'password') {
        messages.push('You cannot use that as your password')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')
    }
})


log_in.addEventListener('submit', (e) => {
    let messages = [];
    if (user_name.value === '' || user_name.value == null) {
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length > 20 ) {
        messages.push('Password must be less than 20 characters')
    }

    if (password.value === 'password') {
        messages.push('You cannot use that as your password')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')
    }   
})

var check = function() {
    if(reg_password.value !== confirm_password.value) {
        pass_match.style.color = 'red';
        pass_match.innerHTML = 'not matching'
    }
    else {
        pass_match.style.color = 'green';
        pass_match.innerHTML = 'matching'
    }
}
