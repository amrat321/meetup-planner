// get input data by id save in variable
var email = document.getElementById("inputAddress");
var password = document.getElementById("inputAddress2");
var name = document.getElementById("inputEmail4");
var lname = document.getElementById("inputPassword4");
var contact = document.getElementById("enter");
var age = document.getElementById("age");
var autMassage = document.getElementById("message");

// sign up function 
function btn1(){
    // validation
    // password
var targetField = document.getElementById("inputAddress2");
if (targetField.value.length === 0) {
     alert("Please enter your password");
 targetField.focus();
 targetField.style.background = "wheat";
 return false;
 }
 //  name
 var targetField1 = document.getElementById("inputEmail4");
if (targetField1.value.length === 0) {
     alert("Please enter your Name");
 targetField1.focus();
 targetField1.style.background = "wheat";
 return false;
 }
 // last name
 var targetField2 = document.getElementById("inputPassword4");
if (targetField2.value.length === 0) {
     alert("Please enter your Last Name");
 targetField2.focus();
 targetField2.style.background = "wheat";
 return false;
 }
 // contact
 var targetField3 = document.getElementById("enter");
if (targetField3.value.length === 0) {
     alert("Please enter your Contact");
 targetField3.focus();
 targetField3.style.background = "wheat";
 return false;
 }
 // age
 var targetField4 = document.getElementById("age");
if (targetField4.value.length === 0) {
     alert("Please enter your age");
 targetField4.focus();
 targetField4.style.background = "wheat";
 return false;
 }

//Check email address
var eEntered = document.getElementById("inputAddress").value;
var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
if (!(eEntered.match(regex))) {
alert("Please correct email address");
return false;
}
// password chech
var numChars = document.getElementById("inputAddress2").value.length;
 if (numChars < 6) {
 alert("Please enter a 6-digit code.");
 return false;
 }


 // get users node for check that the email is already exists than alert 
var users = localStorage.getItem("users");
console.log(users)
var userExit = false;
if(users === null){
users =[];
}
else{
users = JSON.parse(users);
console.log(users);
}
var user = {
email : email.value,
password : password.value
}
for(var i= 0; i < users.length; i++){
if(users[i].email === email.value){
userExit = true;
}
}
if(userExit === true){
    autMassage.innerHTML = "user already Exists!";
}
else{
users.push(user);
users = JSON.stringify(users);
localStorage.setItem("users", users);
email.value = "";
password.value = "";
window.location.href="../index.html";



document.getElementById("message").innerHTML = "seccessfully signup!"
alert("seccessfully signup!")
}

// validation
// var targetField = document.getElementById("inputAddress2");
// if (targetField.value.length === 0) {
//      alert("Please enter your password");
//  targetField.focus();
//  targetField.style.background = "yellow";
//  return false;
//  }
//  targetField.style.background = "white";
//  //
//  var targetField1 = document.getElementById("inputEmail4");
// if (targetField1.value.length === 0) {
//      alert("Please enter your Name");
//  targetField1.focus();
//  targetField1.style.background = "yellow";
//  return false;
//  }
//  targetField1.style.background = "white";
//  //
//  var targetField2 = document.getElementById("inputPassword4");
// if (targetField2.value.length === 0) {
//      alert("Please enter your Last Name");
//  targetField2.focus();
//  targetField2.style.background = "yellow";
//  return false;
//  }
//  targetField2.style.background = "white";
//  //
//  var targetField3 = document.getElementById("enter");
// if (targetField3.value.length === 0) {
//      alert("Please enter your Contact");
//  targetField3.focus();
//  targetField3.style.background = "yellow";
//  return false;
//  }
//  targetField3.style.background = "white"; 
//  //
//  var targetField4 = document.getElementById("age");
// if (targetField4.value.length === 0) {
//      alert("Please enter your age");
//  targetField4.focus();
//  targetField4.style.background = "yellow";
//  return false;
//  }
//  targetField4.style.background = "white";

 }


