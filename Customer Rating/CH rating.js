
let star1=document.querySelector(".star1");
let star2=document.querySelector(".star2");
let star3=document.querySelector(".star3");
let star4=document.querySelector(".star4");
let star5=document.querySelector(".star5");


star1.addEventListener("click",change1);
function change1(){
    document.querySelector(".star1").style.color = "yellow";
    document.querySelector(".remarks").innerHTML="Very Poor";
    document.querySelector(".emoji").innerHTML="&#128557";    
}

star2.addEventListener("click",change2);
function change2(){
    document.querySelector(".star1").style.color = "yellow";
    document.querySelector(".star2").style.color = "yellow";
    document.querySelector(".remarks").innerHTML="Poor";
    document.querySelector(".emoji").innerHTML="&#128546";    
}   
star3.addEventListener("click",change3);
function change3(){
    document.querySelector(".star1").style.color = "yellow";
    document.querySelector(".star2").style.color = "yellow";
    document.querySelector(".star3").style.color = "yellow";
    document.querySelector(".remarks").innerHTML="Average";
    document.querySelector(".emoji").innerHTML="&#128532";    
}
star4.addEventListener("click",change4);
function change4(){
    document.querySelector(".star1").style.color = "yellow";
    document.querySelector(".star2").style.color = "yellow";
    document.querySelector(".star3").style.color = "yellow";
    document.querySelector(".star4").style.color = "yellow";
    document.querySelector(".remarks").innerHTML="Good";
    document.querySelector(".emoji").innerHTML="&#128515";    
}
star5.addEventListener("click",change5);
function change5(){
    document.querySelector(".star1").style.color = "yellow";
    document.querySelector(".star2").style.color = "yellow";
    document.querySelector(".star3").style.color = "yellow";
    document.querySelector(".star4").style.color = "yellow";
    document.querySelector(".star5").style.color = "yellow";
    document.querySelector(".remarks").innerHTML="Excellent";
    document.querySelector(".emoji").innerHTML="&#128525";    
}

