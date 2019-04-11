
//user name
// var userName = localStorage.getItem('User');
// userName = JSON.parse(userName);
// console.log(userName)
// var name3 = userName.email
// name3 = name3.slice(0,name3.length-10)
// console.log(name3)
// document.getElementById("user_name").innerHTML = name3;
// //user name end

//function of logout
    function logout(){
    window.location.href = "../index.html";
    localStorage.removeItem('User');
    localStorage.removeItem('user_data');
}
//end


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




    var span81 = document.createElement("p");
    var taxtnode41 = document.createTextNode(newData1[j].discraption);
    span81.appendChild(taxtnode41);
    div1.appendChild(span81);

        //button
       
    var p = document.createElement("p");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var taxtnode411 = document.createTextNode(" "+newData1[j].intrested);
    var t = document.createTextNode(" Intrested");
    span1.appendChild(t);
    p.appendChild(span1);
    span2.appendChild(taxtnode411);
    p.appendChild(span2);
    div1.appendChild(p);

    var p1 = document.createElement("p");
    var span11 = document.createElement("span");
    var span22 = document.createElement("span");
    var taxtnode4111 = document.createTextNode(" "+ newData1[j].notIntrested);
    var t1 = document.createTextNode(" NotIntrested");
    span11.appendChild(t1);
    p1.appendChild(span11);
    span22.appendChild(taxtnode4111);
    p1.appendChild(span22);
    div1.appendChild(p1);

}
