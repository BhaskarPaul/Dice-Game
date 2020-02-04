randomNumberOne = Math.floor(Math.random()*6)+1;
randomNumberTwo = Math.floor(Math.random() * 6) + 1;


imageOne = document.querySelectorAll(".dice img")[0];
imageTwo = document.querySelectorAll(".dice img")[1];
heading = document.querySelector(".container h1")

// Number one dice

if (randomNumberOne === 1){
    imageOne.setAttribute("src","./images/dice1.png");
} else if (randomNumberOne === 2){
    imageOne.setAttribute("src", "./images/dice2.png");
} else if (randomNumberOne === 3){
    imageOne.setAttribute("src", "./images/dice3.png");
} else if (randomNumberOne === 4){
    imageOne.setAttribute("src", "./images/dice4.png");
} else if (randomNumberOne === 5){
    imageOne.setAttribute("src", "./images/dice5.png");
} else{
    imageOne.setAttribute("src", "./images/dice6.png");
}

// Number two dice

if (randomNumberTwo === 1) {
    imageTwo.setAttribute("src", "./images/dice1.png");
} else if (randomNumberTwo === 2) {
    imageTwo.setAttribute("src", "./images/dice2.png");
} else if (randomNumberTwo === 3) {
    imageTwo.setAttribute("src", "./images/dice3.png");
} else if (randomNumberTwo === 4) {
    imageTwo.setAttribute("src", "./images/dice4.png");
} else if (randomNumberTwo === 5) {
    imageTwo.setAttribute("src", "./images/dice5.png");
} else {
    imageTwo.setAttribute("src", "./images/dice6.png");
}

if (randomNumberOne === randomNumberTwo){
    heading.innerHTML = "Draw" ;
} else if (randomNumberTwo > randomNumberOne){
    heading.innerHTML = "Player 2 Wins 🚩";
} else{
    heading.innerHTML = "Player 1 Wins 🚩";
}