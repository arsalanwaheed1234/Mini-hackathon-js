import{auth,createUserWithEmailAndPassword,onAuthStateChanged}from'../firebase.js';


let inputSignUp=document.querySelectorAll('input')
let[userEmail,password] = inputSignUp

let signUpBTN=document.getElementById('signUpBTN')
const signUp=()=>{
    signUpBTN.innerHTML="loading..."
event.preventDefault()
createUserWithEmailAndPassword(auth, userEmail.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    signUpBTN.innerHTML="signUp"
    // window.location.href="../index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    signUpBTN.innerHTML="signUp"
    Toastify({
        text: `${errorMessage}`,
        duration: 3000
        }).showToast();
  });

}
signUpBTN.addEventListener('click',signUp)

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    window.location.href="../dashboard/dashboard.html"
  }
});
