let userNameInput = prompt("Enter your name?");
let  userName = document.querySelector('.user');
userName.innerHTML = userNameInput + " :  ";

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorBtn = document.querySelector('.scissor');
let resultDisplay = document.querySelector('.v2h1');
let userCounter = 0, computerCounter = 0;
let userScore = document.querySelector('.userscoredisplay');
let computerScore = document.querySelector('.computerscore');
let child = document.querySelector('.vertical2');
let link = document.createElement('div');
link.setAttribute("class", "v2h2")
link.innerHTML = `<a href="./index.html">Play Again</a>`

function userInput(number){
     switch(number){
          case 1:
               return rockBtn.value;
               break;

          case 2:
               return paperBtn.value;
               break;
          
          case 3:
               return scissorBtn.value;
               break;
          
          default:
               break;
     }
}

function computerPlay(){
     let number = Math.floor(Math.random() * 3)
     switch(number){
          case 0:
               return "ROCK"
               break;

          case 1:
               return "PAPER"
               break;

          case 2:
               return "SCISSOR"
               break;
          
          default:
               break;
     }
}

function playRound(playerSelection, computerSelection){
     switch (playerSelection){
          case "ROCK":
               if (computerSelection == "ROCK" ){
                    resultDisplay.innerHTML = "<p>You both selected Rock, It's a draw</p>";
                    counter("DRAW");
               }
               if (computerSelection == "PAPER"){
                    resultDisplay.innerHTML = "<p>Computer selected Paper, You lost</p>";
                    counter("COMPUTER");
               }
               if (computerSelection == "SCISSOR"){
                    resultDisplay.innerHTML = "<p>Computer selected Scissor, You won</p>";
                    counter("USER");
               }
               break;

               case "PAPER":
               if (computerSelection == "ROCK" ){
                    resultDisplay.innerHTML = "<p>Computer Selected Rock, You won</p>";
                    counter("USER");
               }
               if (computerSelection == "PAPER"){
                    resultDisplay.innerHTML = "<p>Yoy both selected Paper, It's a draw</p>";
                    counter("DRAW");
               }
               if (computerSelection == "SCISSOR"){
                    resultDisplay.innerHTML = "<p>Computer selected Scissor, You lost</p>";
                    counter("COMPUTER");
               }
               break;

               case "SCISSOR":
               if (computerSelection == "ROCK" ){
                    resultDisplay.innerHTML = "<p>Computer Selected Rock, You lost</p>";
                    counter("COMPUTER");
               }
               if (computerSelection == "PAPER"){
                    resultDisplay.innerHTML = "<p>Computer selected Paper, You won</p>";
                    counter("USER");
               }
               if (computerSelection == "SCISSOR"){
                    resultDisplay.innerHTML = "<p>You both selected Scissor, It's a draw</p>";
                    counter("DRAW");
               }
               break;

          default:
               break;
     }
}

function counter(result){
     
     switch(result){
          case "USER":
               userCounter += 1;
               userScore.innerHTML = userCounter;
               computerScore.innerHTML = computerCounter;
               
               if(userCounter == 5){
                    resultDisplay.innerHTML = `Congratulations, You won the game.`;
                    child.appendChild(link);
               }
               
               break;
          
          case "COMPUTER":
               computerCounter += 1;
               userScore.innerHTML = userCounter;
               computerScore.innerHTML = computerCounter;
               
               if(computerCounter == 5){
                    resultDisplay.innerHTML = `Computer won the game, Hard Luck.`;
                    child.appendChild(link);
               }
               
               break;

     }

}