import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyAO9MFh_gyKTwOodLamsCK1ZZHxMjNU-4U",
  authDomain: "trampinho.firebaseapp.com",
  projectId: "trampinho",
  storageBucket: "trampinho.firebasestorage.app",
  messagingSenderId: "708371158712",
  appId: "1:708371158712:web:f068b97ab2a7ea2649c64d",
  measurementId: "G-L0K665H4FE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider) 
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../logado.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Erro ${errorCode}: ${errorMessage}`);
    });
});
