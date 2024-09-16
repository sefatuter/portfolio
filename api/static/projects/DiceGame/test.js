// Generate random number for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log("Player 1 rolled: " + randomNumber1);

// Generate random number for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("Player 2 rolled: " + randomNumber2);

// Construct the image filenames based on the random numbers
var image1 = "/static/projects/DiceGame/images/dice" + randomNumber1 + ".png";
var image2 = "/static/projects/DiceGame/images/dice" + randomNumber2 + ".png";

// Set the image source attributes
document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw";
}
else{
    document.querySelector("h1").textContent = "Player 2 Wins";

}