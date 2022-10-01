
import {navbar} from './navbar.js'
const Navbar = document.getElementById('navbar-header')
Navbar.innerHTML=navbar()

import {modal} from "./modal.js"
const Modal = document.getElementById('Modal')
Modal.innerHTML = modal()


var signIn = document.querySelector(".sign-in_btn");

var closebtn = document.querySelector(".close-modal_btn");
var body = document.querySelector("body");
var modal_p = document.querySelector(".modal");

var iframe = document.querySelector("#modal-iframe");

function openModal() {

  modal_p.style.display = "block";
  body.style.overflow = "hidden";
  iframe.src = "sign-in.html";
}
function closeModal() {

  modal_p.style.display = "none";
  body.style.overflow = "auto";
  iframe.src = "sign-in.html";
}


  
  signIn.addEventListener("click", function () {
    openModal();
    iframe.src = "sign-in.html";
  });
  

  
  closebtn.addEventListener("click", function () {
    closeModal();
    iframe.src = "sign-in.html";
  });
