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
            
            computer = getComputerChoice();
            console.log("You chose " + humanChoice);
            console.log("The Computer chose " + computer)
            if (humanChoice == computer){
                console.log("Your score is " + getHumanScore)
                console.log("The Computers score is " + getComputerScore)
                return 'It is a Tie!'
                    
            } else if (humanChoice == 'rock'){
                if (computer == 'paper') {
                    getComputerScore++;
                    console.log("Your score is " + getHumanScore)
                    console.log("The Computers score is " + getComputerScore)
                    return 'The Computer Wins!'
                    
                } else {
                    getHumanScore++;
                    console.log("Your score is " + getHumanScore)
                    console.log("The Computers score is " + getComputerScore)
                    return 'You Win!'
                    
                }
            } else if (humanChoice == 'paper'){
                if (computer == 'scissors'){
                    getComputerScore++;
                    console.log("Your score is " + getHumanScore)
                    console.log("The Computers score is " + getComputerScore)
                    return 'The Computer Wins!'
                    
                } else {
                    getHumanScore++;
                    console.log("Your score is " + getHumanScore)
                    console.log("The Computers score is " + getComputerScore)
                    return 'You Win!'
                    
                }
            } else if (humanChoice == 'scissors'){
                if (computer == 'rock'){
                    getComputerScore++;
                    console.log("Your score is " + getHumanScore)
                    console.log("The Computers score is " + getComputerScore)
                    return 'The Computer Wins'
                    
                } else {
                    getHumanScore++;
                    console.log("Your score is " + getHumanScore)
                    console.log("The Computers score is " + getComputerScore)
                    return 'You Win!'
                    
                }
            }
         }
         ;

    
    /*if (getHumanScore == getComputerScore){
        console.log("You and the Computer Tie")
    } else if (getHumanScore > getComputerScore){
        console.log("You have beaten the Computer!")
    } else {
        console.log("The computer has Won!")
    }*/

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




