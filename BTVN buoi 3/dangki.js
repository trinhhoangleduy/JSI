import { auth, SignInUser } from "./fireBaseConfig.js";

const Sign = document.querySelector("#btn");
Sign.addEventListener("click", function (e) {
  e.preventDefault;
  const email = document.querySelector("#form3Example3c").value;
  const pass = document.querySelector("#form3Example4c").value;
  const repass = document.querySelector("#form3Example4cd");
  console.log(email, pass);
  SignInUser(auth, email, pass, repass);
});
