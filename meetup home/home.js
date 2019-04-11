//user name
var userName = localStorage.getItem('User');
userName = JSON.parse(userName);
console.log(userName)
var name3 = userName.email
name3 = name3.slice(0,name3.length-10)
console.log(name3)
document.getElementById("user_name").innerHTML = name3;
//user name end

//function of logout 
function logout(){
window.location.href = "../index.html";
localStorage.removeItem('User');
localStorage.removeItem('user_data');
localStorage.removeItem('copy');
}


// get replica node
var newData1 = localStorage.getItem("copy");
if (newData1 === null){
newData1 = [];
}
// put all data in replica
else{
newData1 = JSON.parse(newData1)
}
for(var j = 0; j < newData1.length; j++){

var get = document.getElementById("htmldiv");
var div1 = document.createElement("div");
div1.setAttribute("id","div1");
var span_img= document.createElement("img");
span_img.setAttribute("src", newData1[j].img.slice(12));
span_img.setAttribute("id","img");
span_img.setAttribute("width","295px" );
span_img.setAttribute("hight", "200px");
div1.appendChild(span_img);
get.appendChild(div1);


div1.setAttribute("id","div1")
var span = document.createElement("p");
span.setAttribute("id", "head");
var taxtnode = document.createTextNode(newData1[j].heading);
span.appendChild(taxtnode);
div1.appendChild(span);
get.appendChild(div1);


    
var span4 = document.createElement("p");
var taxtnode1 = document.createTextNode(newData1[j].event_Name);
span4.appendChild(taxtnode1);
div1.appendChild(span4);


    
var span6 = document.createElement("p");
var taxtnode2 = document.createTextNode(newData1[j].timing);
span6.appendChild(taxtnode2);
div1.appendChild(span6);


   
var span66 = document.createElement("p");
var taxtnode3 = document.createTextNode(newData1[j].price);
span66.appendChild(taxtnode3);
div1.appendChild(span66);



    
var span8 = document.createElement("p");
var taxtnode4 = document.createTextNode(newData1[j].timing);
span8.appendChild(taxtnode4);
div1.appendChild(span8);



    
var span81 = document.createElement("p");
var taxtnode41 = document.createTextNode(newData1[j].discraption);
span81.appendChild(taxtnode41);
div1.appendChild(span81);

// button
var button2 = document.createElement("button");
button2.setAttribute("class", "btn btn-success");
button2.setAttribute("id",newData1[j].price)
var edt = document.createTextNode("Go");
button2.appendChild(edt);
div1.appendChild(button2); 


// intrested function
button2.addEventListener("click", function () {
var data = localStorage.getItem("users_data");
data = JSON.parse(data);
var current = localStorage.getItem("User");
current = JSON.parse(current);


//if curent user click on his event then alert
    for(var i =0; i<data.length; i++){
if(this.id === data[i].price){
flag = true;
for(var j=0; j<data[i].int_email.length; j++){
if(data[i].int_email[j] === current.email){
alert("sorry");
flag = false;
break;
}
}
// if user fistly click intrested and then click notintrested then cut his email from intrested
if(flag === true){
var flag1 = true;
for(var k =0; k<data[i].notint_email.length; k++){
if(data[i].notint_email[k] === current.email){
flag1 = false;
data[i].notint_email.splice(k,1);
data[i].notIntrested--;
data[i].intrested++;
data[i].int_email.push(current.email);
localStorage.setItem("users_data",JSON.stringify(data))
}
}
if(flag1 === true){
data[i].intrested++
data[i].int_email.push(current.email)
localStorage.setItem("users_data",JSON.stringify(data))
}
                        
                    
}
}
}
})
// not intrested button
 var button = document.createElement("button");
button.setAttribute("class", "btn btn-danger");
button.setAttribute("id",newData1[j].heading)
var edt = document.createTextNode("Not Go");
button.appendChild(edt);
    div1.appendChild(button);


//not entrested function
   button.addEventListener("click", function () {
var data = localStorage.getItem("users_data");
data = JSON.parse(data);
var current = localStorage.getItem("User");
current = JSON.parse(current);
for(var i =0; i<data.length; i++){
if(this.id === data[i].heading){
var flag = true;
for(var j=0; j<data[i].notint_email.length; j++){
if(data[i].notint_email[j] === current.email){
alert("sorry");
flag = false;
}
}
if(flag === true){
var flag1 = true;
for(var k =0; k<data[i].int_email.length; k++){
if(data[i].int_email[k] === current.email){
flag1 = false;
data[i].int_email.splice(k,1);
data[i].intrested--;
data[i].notIntrested++;
data[i].notint_email.push(current.email);
localStorage.setItem("users_data",JSON.stringify(data))
}
}
if(flag1 === true){
data[i].notIntrested++
data[i].notint_email.push(current.email)
localStorage.setItem("users_data",JSON.stringify(data))
}
            
}
}
}

})
    
}


