const len = document.querySelectorAll(".arrow").length;
const arrows = document.querySelectorAll(".arrow");
const ans = document.querySelectorAll(".a");
const que = document.querySelectorAll(".ques");
const bdy = document.querySelector("body");
const cntner = document.querySelector(".container2");
const qq = document.querySelectorAll(".q");
const head = document.querySelector(".heading");
const s2 = document.querySelector(".switch");
const s3 = document.querySelector(".switch");
const s4 = document.querySelector(".circle");

//Toggle Data
for(let i=0;i<len;i++){
    que[i].addEventListener("click",function(){
    arrows[i].setAttribute("style","animation:none");
    arrows[i].classList.toggle("toggleArrow");
    que[i].classList.toggle("fw");    
    ans[i].classList.toggle("ans");
    });
} 


// Dark Mode
document.querySelector(".switch").addEventListener("click",function(){
    bdy.classList.toggle("bodybg");
    cntner.classList.toggle("containerbg");

    for(let i=0;i<len;i++){
    qq[i].classList.toggle("qcolor");
    ans[i].classList.toggle("acolor");
    }

    head.classList.toggle("headingcolor");
});


  
//switch button
s2.addEventListener("click",function(){
    s2.classList.toggle("switch2");
    s3.classList.toggle("colour");
    s4.classList.toggle("cir");
});
