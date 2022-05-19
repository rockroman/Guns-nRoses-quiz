  let startGame=document.getElementById("start");
startGame.addEventListener("click",function(){

// document.body.style.backgroundColor="black";

let audio= new Audio("music/sjeti se.mp3");
audio.play();

document.getElementById("quiz-win").style.opacity="1";
});