// ! Login Page 

const log_in = document.getElementById('login');
const reg = document.getElementById('register');
const btn = document.getElementById('btn');

const user_name = document.getElementById('name');
const password = document.getElementById('password');
const errorMessage = document.getElementById('error');

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