const form = document.querySelector('form');
form.addEventListener('submit', form => {
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const passwordError = document.querySelector('.passwordError');
    if(password.value !== password2.value){
        form.preventDefault();
        password.classList.add('error');
        password2.classList.add('error');
        passwordError.style.display = 'block';
    }
    else{
        password.classList.remove('error');
        password2.classList.remove('error');
        passwordError.style.display = 'none';
    }
});