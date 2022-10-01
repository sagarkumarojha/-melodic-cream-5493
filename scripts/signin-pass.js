var signInData = JSON.parse(localStorage.getItem("signInData")) || [];
let person = localStorage.getItem('person')


var parentDocument = window.parent.document;
var body = parentDocument.querySelector("body");
var modal_p = parentDocument.querySelector(".modal");
var passSubmit = document.querySelector("#passSubmit");
// console.log(passInp);
//rawatshubham1645@gmail.com
var passInp = document.querySelector("#password");
var passSubmit = document.querySelector("#passSubmit");
function openModal() {

    modal_p.style.display = "block";
    body.style.overflow = "hidden";
   
  }
  function closeModal() {

    modal_p.style.display = "none";
    body.style.overflow = "auto";
   
  }
passSubmit.addEventListener('click',()=>{

    var flag = false
    for (var i = 0; i < signInData.length; i++) {
        if (signInData[i].pass == passInp.value) {
          flag = true;
          alert('Successfully Login')
          break;
        }
      }
if(flag){
    closeModal()
}
else{
    alert('Enter Correct Password')
}   
})