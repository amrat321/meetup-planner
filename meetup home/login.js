// get data from input by id
var email = document.getElementById("exampleInputEmail1");
var password = document.getElementById("exampleInputPassword1");
var autMassage = document.getElementById("message");
// log in function
function login(){


var users=localStorage.getItem("users");
console.log(users);

// object of email and password
var user = {
email : email.value,
password : password.value
}
if(users === null){
users = [];   
}
else{
users = JSON.parse(users);   
}
// loop for check email amd password 
var check1 = false;
for(i = 0; i < users.length; i++){
if(users[i].email === email.value&&users[i].password === password.value){
check1 = true                 
}
}
// if it is not match than this work
if(check1 === false){   
document.getElementById("massage").innerHTML = "login faild";
alert("Please Enter Right Data")
}
//if match data than this work 
else{
    alert("Wellcome In Event Planer")
var newUser = JSON.stringify(user);
localStorage.setItem("User", newUser);
setTimeout(function(){window.location.href="loader.html";
}, 100);



var a = localStorage.getItem("users_data");
if (a === null){
    a = [];
}
else{
    a=JSON.parse(a);
    console.log(a);
}
localStorage.setItem("copy", JSON.stringify(a));
//loader


var local = localStorage.getItem("User");
local = JSON.parse(local);
var arry = localStorage.getItem("users_data");
console.log(arry)
if(arry === null){
arry =[];
}
else{
arry = JSON.parse(arry);
console.log(arry);
}

newData = []
for(var i = 0; i < arry.length;i++){
    if(local.email === arry[i].email){
     newData.push(arry[i])
}
}
localStorage.setItem("user_data",JSON.stringify(newData))

email.value = "";
password.value= "";
}

}
    
    
    
 