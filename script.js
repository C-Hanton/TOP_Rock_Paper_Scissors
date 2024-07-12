/*alert("This alert box was called with the onload event"); */

/* Pseudocodoe:

Rock Paper Scissors Game

1. Write the logic to get the computers choice
 - write a function that generates a result of rock paper or scissors
 - test the function with console.log()

2. Write the logic to get the players choice
 - Write a function that takes a human choice and returns it
 - use prompt to get the users input
 - test the returned result with console.log()

 3. Declare player score variables
 - declare two variables: getHumanScore and getComputerScore and initialize to 0

 4. Write the logic to play a single round
 - Create a function called playRound
 - give playRound two parameters (humanChocie, computerChoice)
 - make human choice parameter case sentitive so that players can add rock ROCK rOcK etc
 - Write code for playRound function to console.log() representation of the winner of the round such as "You win, paper beats rock" etc
 -Increment the human score or computer score based on the winner
  -Use an if statement to see if there is a tie
  - then use an else/if statement for the three values rock, paper, scissors
   - nest another if statement in each else/if to check if computer wins
   - use an else statement to declare a player win

 5. Write logic to play entire game
 -Create new function called playGame
 -move playRound and score variables into playGame
 -play 5 rounds by calling playGame 5 times 
 -add console logs to return the computer choice and player choice values*/ 

 
 


 function getComputerChoice() {
    let number = Math.floor(Math.random() * (3 - 1 + 1));
    //console.log(number)
    let choices = ['rock','paper','scissors'];
    return choices[number];
 }

let getHumanScore = 0;
let getComputerScore = 0;

    
        function playRound(humanChoice) {
            let humanScore = document.querySelector(".humanResult");
            

            let computerScore = document.querySelector(".computerResult");
            


            computer = getComputerChoice();
            console.log("You chose " + humanChoice);
            console.log("The Computer chose " + computer)

            let roundMessage = document.querySelector(".roundWin");

            if (humanChoice == computer){
                humanScore.textContent = "Your score is: " + getHumanScore;
                computerScore.textContent = "Your score is: " + getComputerScore;
                roundMessage.textContent = `It is a tie!`
                    
            } else if (humanChoice == 'rock'){
                if (computer == 'paper') {
                    ++getComputerScore;
                    humanScore.textContent = "Your score is: " + getHumanScore;
                    computerScore.textContent = "Your score is: " + getComputerScore;
                    roundMessage.textContent = `You Lose! ${computer} beats ${humanChoice}`
                    
                } else {
                    ++getHumanScore;
                    humanScore.textContent = "Your score is: " + getHumanScore;
                    computerScore.textContent = "Your score is: " + getComputerScore;
                    roundMessage.textContent = `You Win! ${humanChoice} beats ${computer}`
                    
                }
            } else if (humanChoice == 'paper'){
                if (computer == 'scissors'){
                    ++getComputerScore;
                    humanScore.textContent = "Your score is: " + getHumanScore;
                    computerScore.textContent = "Your score is: " + getComputerScore;
                    roundMessage.textContent = `You Lose! ${computer} beats ${humanChoice}`
                    
                } else {
                    ++getHumanScore;
                    humanScore.textContent = "Your score is: " + getHumanScore;
                    computerScore.textContent = "Your score is: " + getComputerScore;
                    roundMessage.textContent = `You Win! ${humanChoice} beats ${computer}`
                    
                }
            } else if (humanChoice == 'scissors'){
                if (computer == 'rock'){
                    ++getComputerScore
                    humanScore.textContent = "Your score is: " + getHumanScore;
                    computerScore.textContent = "Your score is: " + getComputerScore;
                    roundMessage.textContent = `You Lose! ${computer} beats ${humanChoice}`
                    
                } else {
                    ++getHumanScore;
                    roundMessage.textContent = `You Win! ${humanChoice} beats ${computer}`
                    
                }
            }

            humanScore.textContent = "Your score is: " + getHumanScore;
            computerScore.textContent = "Your score is: " + getComputerScore;

            function checkGameWinner (){
                if (getHumanScore >= 5 || getComputerScore >= 5) {
                    const winnerMessage = getHumanScore > getComputerScore ? "Congratulations you are the winner!" : "Sorry! The Computer has won!"
                    document.querySelector(".gameWinner").textContent = winnerMessage;
                }
            }
            
            checkGameWinner();
         }
         ;



        document.getElementById('rock').addEventListener('click', function () {
            playRound('rock')
            console.log('rock');
        });
        
        document.getElementById('paper').addEventListener('click', function () {
            playRound('paper');
        });
        
        document.getElementById('scissors').addEventListener('click', function () {
            playRound('scissors');
        });


        function checkGameWinner (){
            if (getHumanScore >= 5 || getComputerScore >= 5) {
                const winnerMessage = getHumanScore > getComputerScore ? "Congratulations you are the winner!" : "Sorry! The Computer has won!"
                document.querySelector(".gameWinner").textContent = winnerMessage;
            }
        }

    




