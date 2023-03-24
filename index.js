var randomNumber1=Math.floor(Math.random()*6)+1;
var randonDiceImage1="images/"+"dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randonDiceImage1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randonDiceImage2="images/"+"dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randonDiceImage2);
if(randomNumber1===randomNumber2)
document.querySelector("h1").innerHTML="DRAW";
else if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="🚩 PLAYER 1 WINS";
else
document.querySelector("h1").innerHTML="PLAYER 2 WINS 🚩";



function refreshPage(){
    window.location.reload();
} 