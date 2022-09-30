

var signInData = JSON.parse(localStorage.getItem("signInData")) || [];

var parentDocument = window.parent.document;
var iframe = parentDocument.querySelector("#modal-iframe");

var form = document.querySelector("#myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var fname = form.fname.value;
  var lname = form.lname.value;
  var bday = form.bday.value;
  var email = form.email.value;
  var pass = form.pass.value;
  var obj = {};
  obj.fname = fname;
  obj.lname = lname;
  obj.bday = bday;
  obj.email = email;

  obj.pass = pass;
  signInData.push(obj);
  localStorage.setItem("signInData", JSON.stringify(signInData));
  iframe.src = "sign-in.html";
});



// let button = document.getElementById('submit-btn')
// button.addEventListener('click',()=>{
//     Register()
// })
// class User{
// constructor(){

// }
// #checkUsername(username){
//     let value = username.includes('#') ? false:true
//     return value
// }
// #checkPassword(password){
//     let value = password.length>7?true:false
//     if(!value){
//         alert('enter At leat * characters')
//     }
//     return value
// }

//    async signup(n,l,d,u,p){

//       let isValidated =   this.#checkUsername(u) && this.#checkPassword(p)

//       if(isValidated){
//         this.name = n,
//         this.lname = l,
//         this.date = d,
//         this.email = u,
//         this.password = p
 
// console.log(this);


//       }
//     }
// }
// let u1 = new User()
// console.log(u1);
// // u1.#checkPassword()
// function Register(){
    
//     function getInputValue(id){
//         let value =document.getElementById(id).value;
//         return value;
//     }
//     const name  = getInputValue('name');
//     const lname = getInputValue('lname')
//     const date = getInputValue('bday')
//     const email = getInputValue('email')
//     const password = getInputValue('pass')
    


//     u1.signup(name,lname,date,email,password)
// }