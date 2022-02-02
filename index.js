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
                    console.log ("You both selected Rock, It's a draw")
                    return "DRAW"
               }
               if (computerSelection == "PAPER"){
                    console.log("Computer selected Paper, You lost")
                    return "COMPUTER"
               }
               if (computerSelection == "SCISSOR"){
                    console.log("Computer selected Scissor, You won")
                    return "USER"
               }
               break;

               case "PAPER":
               if (computerSelection == "ROCK" ){
                    console.log ("Computer Selected Rock, You won")
                    return "USER"
               }
               if (computerSelection == "PAPER"){
                    console.log("Yoy both selected Paper, It's a draw")
                    return "DRAW"
               }
               if (computerSelection == "SCISSOR"){
                    console.log("Computer selected Scissor, You lost")
                    return "COMPUTER"
               }
               break;

               case "SCISSOR":
               if (computerSelection == "ROCK" ){
                    console.log ("Computer Selected Rock, You lost")
                    return "COMPUTER"
               }
               if (computerSelection == "PAPER"){
                    console.log("Computer selected Paper, You won")
                    return "USER"
               }
               if (computerSelection == "SCISSOR"){
                    console.log("You both selected Scissor, It's a draw")
                    return "DRAW"
               }
               break;

          default:
               break;
     }
}

function game(){
     let userCounter = 0;
     let computerCounter = 0;
     for(i = 0; i < 9; i++ ){
          let userinput = prompt("Select Rock, Paper or Scissor");
          userinput = userinput.toUpperCase();
         let result =  playRound(userinput, computerPlay());
         
         if(result == "DRAW"){
              result = "";
              i = i - 1;
              continue;
         }
         else if(result == "USER"){
              result = "";
              userCounter = userCounter + 1;
         }
         else if (result == "COMPUTER"){
              result = ""
              computerCounter = computerCounter + 1;
         }
         if(userCounter == 5){
          console.log("Congratulations, you won the game")
          break;
     }
     else if (computerCounter == 5){
          console.log("Bad Luck, You lost. Try Again.")
          break;
     }
     }
}

game();