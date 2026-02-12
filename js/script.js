/* ===== BACKGROUND ===== */
function createBlobs(){
const colors=[
"rgba(255,182,193,0.5)",
"rgba(255,105,180,0.4)",
"rgba(255,255,255,0.3)",
"rgba(230,190,255,0.4)"
];
for(let i=0;i<4;i++){
let b=document.createElement("div");
b.classList.add("blob");
b.style.width=Math.random()*300+300+"px";
b.style.height=b.style.width;
b.style.background=colors[Math.floor(Math.random()*colors.length)];
b.style.top=Math.random()*100+"vh";
b.style.left=Math.random()*100+"vw";
document.body.appendChild(b);
}
}

function createSparkles(){
for(let i=0;i<60;i++){
let s=document.createElement("div");
s.classList.add("sparkle");
let size=Math.random()*6+3;
s.style.width=size+"px";
s.style.height=size+"px";
s.style.left=Math.random()*100+"vw";
s.style.background="white";
s.style.animationDuration=(Math.random()*8+6)+"s";
document.body.appendChild(s);
}
}

window.onload=function(){
createBlobs();
createSparkles();
}

/* ===== TYPEWRITER ===== */
function typeWriter(text,element,speed=40){
let i=0;
function typing(){
if(i<text.length){
element.innerHTML+=text.charAt(i);
i++;
setTimeout(typing,speed);
}
}
typing();
}

/* ===== FIXED NO BUTTON MOVEMENT ===== */
document.addEventListener("mouseover",function(e){
if(e.target.id==="noBtn"){

let btn=e.target;
let card=btn.closest(".card");

/* Ensure button stays inside card */
let cardRect=card.getBoundingClientRect();
let btnWidth=btn.offsetWidth;
let btnHeight=btn.offsetHeight;

let maxX=cardRect.width-btnWidth-20;
let maxY=cardRect.height-btnHeight-20;

let randomX=Math.random()*maxX;
let randomY=Math.random()*maxY;

btn.style.position="absolute";
btn.style.left=randomX+"px";
btn.style.top=randomY+"px";
}
});

/* ===== RANDOM GIF ===== */
function randomGif(){
const gifs=[

/* Daphne & Simon Dance */
"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWxlZnB3bGV0OHIxMHlvbnVxbGtheHdhejc3d3l6bWtrYW9sZXNvNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Bd5eqkRxUY7OP94PWt/giphy.gif",

/* Kate & Anthony Intense Look */
"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzlua2N2dGFhM2tycnRpc3Mwd282OXVmd2JhNXUzdGYyb3FndzFnMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kIC6VXQ8cn4jVRRFF1/giphy.gif",

/* Bridgerton Ballroom Romance */
"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGl6d3dwOHcyMG9rZDhzbDA2MngzYWJ3OG5wZHd4dzVic2FlNWVseSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wRuzXdaGUJld2peAWA/giphy.gif",

/* Slow Romantic Smile */
"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjBzZjhtdmZtazk3ZnJuc3YxeTh2dmJlbTE2ZGQyc2FxdXh2YXBvNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tGngWOp8Ohsje4zaup/giphy.gif",

/* Romantic Close Moment */
"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXc3dG01ang1d2JhZHpmMmd0bjQzNG5uNjgzenhoY3hsaWZsNTg0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WLPdJjLulP5N3j1fDM/giphy.gif",

/* Happy Celebration Hug */
"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjRnb2NudWhnM3FwYzFzYXA5Z2x0bGpuampiNnllMGt1ZjM1OXFrbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bvGIOQ9O76iv2bZwIH/giphy.gif"

];

return gifs[Math.floor(Math.random()*gifs.length)];
}


