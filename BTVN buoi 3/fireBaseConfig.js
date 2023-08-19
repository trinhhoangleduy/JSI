import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBtWklc5UuNWJlyn6iaTqZKtbo4MYvIfw",
  authDomain: "jsitt-4af88.firebaseapp.com",
  projectId: "jsitt-4af88",
  storageBucket: "jsitt-4af88.appspot.com",
  messagingSenderId: "721342977456",
  appId: "1:721342977456:web:d219617ebbc2a68a5e3275",
  measurementId: "G-TX9S88171Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const SignInUserUser = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      alert("Dang Ki Thanh Cong");
      location.href = "trangchu.html";
      localStorage.setItem("signin", true);
    })
    .catch((error) => {
      alert("Dang Ki That Bai");
      console.log(error.code);
    });
};

export const SignInUser = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      alert("Dang Ki Thanh Cong");
      location.href = "trangchu.html";
      localStorage.setItem("Ten", true);
    })
    .catch((error) => {
      alert("Dang Ki That Bai");
      console.log(error.code);
    });
};
