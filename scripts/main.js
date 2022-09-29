
import {navbar} from './navbar.js'
const Navbar = document.getElementById('navbar-header')
Navbar.innerHTML=navbar()

import {modal} from "./modal.js"
const Modal = document.getElementById('Modal')
Modal.innerHTML = modal()


var signIn = document.querySelector(".sign-in_btn");
// var backdrop_p = document.querySelector(".backdrop");
var closebtn = document.querySelector(".close-modal_btn");
var body = document.querySelector("body");
var modal_p = document.querySelector(".modal");
// var advert = document.querySelector("#advertisement");
// var jumboBtn = document.querySelector(".jumbotron-btn");
var iframe = document.querySelector("#modal-iframe");

function openModal() {
  // backdrop_p.style.display = "block";
  modal_p.style.display = "block";
  body.style.overflow = "hidden";
  iframe.src = "sign-in.html";
}
function closeModal() {
  // backdrop_p.style.display = "none";
  modal_p.style.display = "none";
  body.style.overflow = "auto";
  iframe.src = "sign-in.html";
}
// jumboBtn.addEventListener("click", function () {
//     openModal();
//     iframe.src = "sign-in.html";
//   });
  
  // advert.addEventListener("click", function () {
  //   openModal();
  //   iframe.src = "sign-in.html";
  // });
  
  signIn.addEventListener("click", function () {
    openModal();
    iframe.src = "sign-in.html";
  });
  
  // backdrop_p.addEventListener("click", function () {
  //   closeModal();
  //   iframe.src = "sign-in.html";
  // });
  
  closebtn.addEventListener("click", function () {
    closeModal();
    iframe.src = "sign-in.html";
  });
