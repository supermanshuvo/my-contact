let headerText = document.getElementById('headerText');
// INPUT FOR REGISTER
let fname= document.getElementById('fname');
let lname= document.getElementById('lname');
let registerEmail= document.getElementById('registerEmail');
let registerPassword= document.getElementById('registerPassword');
let phone= document.getElementById('phone');
let bodate= document.getElementById('bodate');
let address= document.getElementById('address');
// INPUT FOR LOGIN
let emailLogin= document.getElementById('emailLogin');
let passwordLogin= document.getElementById('passwordLogin');
// ALL FORM
let registerButton= document.getElementById('registerButton');
let loginButton= document.getElementById('loginButton');
// ALL BUTTON
let registerUserButton= document.getElementById('registerUserButton');
let verifyUser = document.getElementById('verifyUser');
let register =document.getElementById('register');
let loginForm= document.getElementById('loginForm');
function saveDate(){
    console.log('register save');
    console.log(fname.value,lname.value,registerEmail.value,registerPassword.value,phone.value,bodate.value,address.value);
    register.reset();
    // console.log(fname.value)
}
function login(){
    console.log(emailLogin.value,passwordLogin.value);
    loginForm.reset();
    // console.log('login btn')
    // console.log(emailLogin,passwordLogin)
}
function registerForm(){
    headerText.innerText='Register Now'
    loginForm.className='d-none'
    register.className=''
    verifyUser.className='btn btn-primary btn-sm'
    registerUserButton.className='btn btn-primary btn-sm d-none'
    registerButton.className = 'btn btn-primary btn-sm'
    loginButton.className='btn btn-primary btn-sm d-none'
}
function logInFormFunc(){
    headerText.innerText='Login Now'
    register.className='d-none'
    loginForm.className=''
    registerUserButton.className='btn btn-primary btn-sm'
    verifyUser.className='btn btn-primary btn-sm d-none'
    loginButton.className='btn btn-primary btn-sm'
    registerButton.className = 'btn btn-primary btn-sm d-none'
}
registerButton.addEventListener('click',saveDate);
loginButton.addEventListener('click',login);
registerUserButton.addEventListener('click',registerForm);
verifyUser.addEventListener('click',logInFormFunc);