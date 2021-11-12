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

function addData(uid,person){
    console.log('I am in addData')
    console.log(uid,person)
    // firebase.firestore().collection("user-information").doc(uid).set({
    //     firstName: person.firstName,
    //     lastName: person.lastName,
    //     email: person.email,
    //     password: person.password,
    //     number: person.number,
    //     birthDay: person.birthDay,
    //     address: person.address
    // })
    // .then(() => {
    //     console.log("Document successfully written!");
    // })
    // .catch((error) => {
    //     console.error("Error writing document: ", error);
    // });
}

function createUser(person){
    console.log('Request Initiated')
    firebase.auth().createUserWithEmailAndPassword(person.email, person.password)
        .then((userCredential)=>{
            let user = userCredential.user;
            let uid = user.uid;
            addData(uid,person)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
}

function submitRegister(){
    const person={
        firstName: fname.value,
        lastName: lname.value,
        email: registerEmail.value,
        password: registerPassword.value,
        number: phone.value,
        birthDay: bodate.value,
        address: address.value
    }
    createUser(person);
    // console.log('register save');
    // console.log(fname.value,lname.value,registerEmail.value,registerPassword.value,phone.value,bodate.value,address.value);
    register.reset();
    // console.log(fname.value)
}
function login(){
    // console.log(emailLogin.value,passwordLogin.value);
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
registerButton.addEventListener('click',submitRegister);
loginButton.addEventListener('click',login);
registerUserButton.addEventListener('click',registerForm);
verifyUser.addEventListener('click',logInFormFunc);