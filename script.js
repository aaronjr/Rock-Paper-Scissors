
//ROCK PAPER SCICORRS

let computerOptions = ["ROCK", "PAPER", "SCISSORS"];
let playerInput = prompt("Type either: rock, paper or scissors.");
let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
let playerChoice = playerInput.toUpperCase();
console.log(computerChoice)
console.log(playerChoice)


function myGame (a,b) {
    if (a=="ROCK"&& b=="SCISSORS"){
      return "You lose, Rock blunts Scissors";}
    else if (a=="SCISSORS"&& b=="PAPER"){
      return "You lose, Scissors cuts Paper";}
    else if (a=="PAPER" && b=="ROCK"){
      return "You lose, Paper wraps Rock";}
    else if (a=="SCISSORS"&& b=="ROCK"){
      return"You win, Rock blunts Scissors";}
    else if (a=="PAPER" && b=="SCISSORS"){
      return "You win, Scissors cuts Paper";}
    else if (a=="ROCK" && b=="PAPER"){
      return "You win, Paper wraps Rock";}
    else if (a==b){
      return "Draw";}
    else    {return "Check your spelling!!";}
}

console.log (myGame (computerChoice, playerChoice))


