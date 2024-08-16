import{auth,signOut,onAuthStateChanged} from '../firebase.js';
let dashboardBtn=document.getElementById('dashboardBtn')

const signout=()=>{
    signOut(auth).then(() => {
      window.location.href="../index.html"
        Toastify({
            text: "Logout Done",
            
            duration: 1000
            
            }).showToast();
    }).catch((error) => {
        Toastify({

            text: error,
            
            duration: 3000
            
            }).showToast();
    });
}

  dashboardBtn.addEventListener('click',signout)


 
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      const uid = user.uid;
      window.location.href="../index.html"
    } else {
    }
  });