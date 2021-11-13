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

// table
let table = document.getElementById('table');
let tableData = document.getElementById('tableData');


function addData(uid,person){
   firebase.firestore().collection("user-information").doc(uid).set({
        firstName: person.firstName,
        lastName: person.lastName,
        email: person.email,
        number: person.number,
        birthDay: person.birthDay,
        address: person.address
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

function createUser(person){
    // console.log('Request Initiated')
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
    register.reset();
}
function login(){
    table.className='table'
    let email = emailLogin.value;
    let password = passwordLogin.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
      let user = userCredential.user;
      console.log(user)
      console.log(user.uid)
    let userInformationFromFirestore= firebase.firestore().collection("user-information").doc(user.uid);
    userInformationFromFirestore.get().then((doc)=>{
        if (doc.exists) {
            // console.log("Document data:", doc.data());
            // alert(doc.data())
            let person = doc.data()
            console.log(person.firstName,person.lastName,person.number,person.email,person.birthDay,person.address)
            tableData.innerHTML = `<tr>
                <td>
                    ${person.firstName}
                </td>
                <td>
                    ${person.lastName}
                </td>
                <td>
                    ${person.number}
                </td>
                <td>
                    ${person.email}
                </td>
                <td>
                    ${person.birthDay}
                </td>
                <td>
                    ${person.address}
                </td>
            </tr>
            `
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error)=>{
        console.log('Error getting document : ',error);
    })
    logout();
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
    loginForm.reset();
}
function logout(){
    firebase.auth().signOut().then(()=>{
        console.log('Your are log out')
    }).catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage);
    })
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