import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyD5DmefQ973Ysn7b0pQx1GReBBkWIhi5zQ",
  authDomain: "smit-mini-hackathon-11617.firebaseapp.com",
  projectId: "smit-mini-hackathon-11617",
  storageBucket: "smit-mini-hackathon-11617.appspot.com",
  messagingSenderId: "528743579022",
  appId: "1:528743579022:web:36f922cd0426dc234cf8df",
  measurementId: "G-55J2K6SKF4"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut };