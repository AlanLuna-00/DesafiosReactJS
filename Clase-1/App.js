let nameInput = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let button = document.querySelector('#submit');


button.addEventListener('click', (e) => {
    e.preventDefault();
    let user = {
        name: nameInput.value,
        email: email.value,
        password: password.value
    }
    console.log(user);
    setTimeout(() => {
        alert(`Name: ${user.name}\nEmail: ${user.email}\nPassword: ${user.password}`);
    },1000);
});

