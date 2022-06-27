
let ids = (id) =>  document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = ids("username"),
    email = ids("email"),
    password = ids("password"),
    form = ids('form'),
    errorMsg = classes("error"),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon');



form.addEventListener('submit', (e) => {
    e.preventDefault()

    errMessages(username, 0, "Username Required!");
    errMessages(email, 1, "Email Required!");
    errMessages(password, 2, "Password Required")
})

let errMessages = (id, num, message) => {
    if (id.value.trim() == ''){
        errorMsg[num].innerHTML = message;
        failureIcon[num].style.opacity = '1';
        successIcon[num].style.opacity = '0';
    }
    else {
        errorMsg[num].innerHTML = '';
        successIcon[num].style.opacity = '1';
        failureIcon[num].style.opacity = '0';
    }
}