import{auth,signInWithEmailAndPassword,onAuthStateChanged,}from '../firebase.js';


let BtnLogin=document.getElementById('BtnLogin')

let inputLogin=document.querySelectorAll('input');
let [username,password]=inputLogin

const login=()=>{
    event.preventDefault();
    BtnLogin.innerHTML="Loading...."
    signInWithEmailAndPassword(auth, username.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      BtnLogin.innerHTML="Login"
    console.log(user)
    // window.location.href="../dashboard/dashboard.html"
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      BtnLogin.innerHTML="Login"
    Toastify({

        text: `${errorMessage}`,
        
        duration: 3000
        
        }).showToast();
  });
  };
BtnLogin.addEventListener('click',login)



onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    window.location.href="../dashboard/dashboard.html"
  } else {
  }
});