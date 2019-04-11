

// log out function
function logout(){
    window.location.href = "../index.html";
    localStorage.removeItem('User');
    localStorage.removeItem('user_data');
}




//get all creat data by id for add event
function add_data(){

    var x = localStorage.getItem("User")
    x = JSON.parse(x)
    var heading = document.getElementById("heading").value;
    var event_Name = document.getElementById("event_Name").value;
    var timing = document.getElementById("timing").value;
    var price = document.getElementById("price").value;
    var discraption = document.getElementsByTagName("textarea");
    var img = document.getElementById("file").value;
    console.log(img)
    var intrested = 0;
    var notIntrested = 0;
    var int_email = [x.email];
    var notint_email = [x.email];


// use contractor function
function Alldata(heading,event_Name,timing,price,discraption,email,img,intrested,notIntrested,int_email,notint_email){
this.heading = heading;
this.event_Name = event_Name;
this.timing = timing;
this.price = price;
this.discraption = discraption;
this.email = email;
this.img = img;
this.intrested = intrested;
this.notIntrested = notIntrested;
this.int_email = int_email;
this.notint_email = notint_email;
};
    //get the data of user from localstorage
    var local = localStorage.getItem("User");
local = JSON.parse(local);
// creat object with the help of constractor function
   var data = new Alldata(heading,event_Name,timing,price,discraption[0].value,local.email,img,intrested,notIntrested,int_email,notint_email);
//get users data from localstorage for push the data object
   var arry = localStorage.getItem("users_data");
console.log(arry)
if(arry === null){
arry =[];
}
else{
arry = JSON.parse(arry);
console.log(arry);
}
arry.push(data);

newData = []
for(var i = 0; i < arry.length;i++){
    if(local.email === arry[i].email){
    console.log(local.email)
    console.log(arry[i].email)
    console.log(i)

newData.push(arry[i])
}

var arry1 = localStorage.getItem("copy");
console.log(arry1)
if(arry1 === null){
arry1 =[];
}
else{
arry1 = JSON.parse(arry1);
console.log(arry1);
}
arry1.push(data);
}
localStorage.setItem("copy",JSON.stringify(arry1))
localStorage.setItem("user_data",JSON.stringify(newData))
arry = JSON.stringify(arry);
localStorage.setItem("users_data", arry);


// (creat card) and this is the data of this
     //img
     var get = document.getElementById("htmldiv");
    var div1 = document.createElement("div");
     var span_img= document.createElement("img");
     span_img.setAttribute("src", img.slice(12));
     span_img.setAttribute("id","img");
     span_img.setAttribute("width","295px" );
     span_img.setAttribute("hight", "200px");
     div1.appendChild(span_img);
     get.appendChild(div1);

    
    div1.setAttribute("id","div1")
    var span = document.createElement("p");
    span.setAttribute("id", "head");
    var taxtnode = document.createTextNode(heading);
    span.appendChild(taxtnode);
    div1.appendChild(span);
    get.appendChild(div1);

    var span4 = document.createElement("p");
    var taxtnode1 = document.createTextNode(event_Name);
    span4.appendChild(taxtnode1);
    div1.appendChild(span4);


    
    var span6 = document.createElement("p");
    var taxtnode2 = document.createTextNode(timing);
    span6.appendChild(taxtnode2);
    div1.appendChild(span6);


    
    var span66 = document.createElement("p");
    var taxtnode3 = document.createTextNode(price);
    span66.appendChild(taxtnode3);
    div1.appendChild(span66);



   
    var span8 = document.createElement("p");
    var taxtnode4 = document.createTextNode(timing);
    span8.appendChild(taxtnode4);
    div1.appendChild(span8);



   
    var span81 = document.createElement("p");
    var taxtnode41 = document.createTextNode(discraption[0].value);
    span81.appendChild(taxtnode41);
    div1.appendChild(span81);


   


// delete button
    var button2 = document.createElement("button");
    button2.setAttribute("class", "btn btn-danger");
    button2.setAttribute("id",price)
    var edt = document.createTextNode("Delete");
    button2.appendChild(edt);
    div1.appendChild(button2);
     
// function of delete 
    button2.addEventListener("click", function () {
        var a = localStorage.getItem('user_data');
        a = JSON.parse(a);
        for(var i = 0; i < a.length; i++){
            if(this.id === a[i].price){
                a.splice(i,1);
                localStorage.setItem('user_data',JSON.stringify(a))
            }
        }
        var b = localStorage.getItem('copy');
        b = JSON.parse(b);
        for(var j = 0; j < b.length; j++){
            if(this.id === b[j].price){
                b.splice(j,1);
                localStorage.setItem('copy',JSON.stringify(b))
            }
        }
        var a1 = localStorage.getItem('users_data');
        a1 = JSON.parse(a1);
        for(var k = 0; k < a1.length; k++){
            if(this.id === a1[k].price){
                a1.splice(k,1);
                localStorage.setItem('users_data',JSON.stringify(a1))
            }
        }
        button2.parentNode.remove()
    })

    document.getElementById("heading").value = "";
    document.getElementById("event_Name").value = "";
    document.getElementById("timing").value = "";
    document.getElementById("price").value = "";
    discraption[0].value = "";
    document.getElementById("file").value = "";


}
//refresh data


var newData1 = localStorage.getItem("user_data");
if (newData1 === null){
    newData1 = []
}
else{
    newData1 = JSON.parse(newData1)
}
for(var j = 0; j < newData1.length;j++){

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



    
    function logout(){
        window.location.href = "../uper_page.html";
        localStorage.removeItem('User');
        localStorage.removeItem('user_data');
    
    }
    var span81 = document.createElement("p");
    var taxtnode41 = document.createTextNode(newData1[j].discraption);
    span81.appendChild(taxtnode41);
    div1.appendChild(span81);

        //button
        var button2 = document.createElement("button");
        button2.setAttribute("class", "btn btn-danger");
        button2.setAttribute("id",newData1[j].price)
        var edt = document.createTextNode("Delete");
        button2.appendChild(edt);
        div1.appendChild(button2);
        button2.addEventListener("click", function () {
            var a = localStorage.getItem('user_data');
            a = JSON.parse(a);
            for(var i = 0; i < a.length; i++){
                if(this.id === a[i].price){
                    a.splice(i,1);
                    localStorage.setItem('user_data',JSON.stringify(a))
                }
            }
            var b = localStorage.getItem('users_data');
            b = JSON.parse(b);
            for(var j = 0; j < b.length; j++){
                if(this.id === b[j].price){
                    b.splice(j,1);
                    localStorage.setItem('users_data',JSON.stringify(b))
                }
            }
            var a1 = localStorage.getItem('copy');
            a1 = JSON.parse(a1);
            for(var k = 0; k < a1.length; k++){
                if(this.id === a1[k].price){
                    a1.splice(k,1);
                    localStorage.setItem('copy',JSON.stringify(a1))
                }
            }
            button2.parentNode.remove()
        })
        
}
