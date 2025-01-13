var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6);
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6);
randomNumber2 = Math.floor(randomNumber2);


var list = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png","./images/dice6.png"];
var random_image = list[randomNumber1]
document.querySelector(".img6").setAttribute("src", random_image);


var list = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png","./images/dice6.png"];
var random_image = list[randomNumber2]
document.querySelector(".img20").setAttribute("src", random_image);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player one wins!🚩";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player two wins!🚩";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}







    
    
