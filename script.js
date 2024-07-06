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
 -play 5 rounds by calling playGame 5 times */ 

 getHumanScore = 0;
 getComputerScore = 0;

 function getComputerChoice () {
    let number = 0;
    number = Math.floor(Math.random() * (3 - 1 + 1)) +1;
    console.log(number)

    switch (number){
        case 1:
            number == 1;
            return 'rock'
            break;
        case 2:
            number == 2;
            return 'paper'
            break;
        case 3:
            number == 3;
            return 'scissors'
            break;
    }

 }


 function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper or Scissors");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
 }


 function playRound (humanChoice, computerChoice) {

    getHumanChoice();
    getComputerChoice();
    if (humanChoice === computerChoice){
        return 'It is a Tie!'
    } else if (humanChoice == 'rock'){
        if (computerChoice == 'paper') {
            return 'The Computer Wins!'
        } else {
            return 'You Win!'
        }
    } else if (humanChoice == 'paper'){
        if (computerChoice == 'scissors'){
            return 'The Computer Wins!'
        } else {
            return 'You Win!'
        }
    } else if (humanChoice == 'scissors'){
        if (computerChoice == 'rock'){
            return 'The Computer Wins'
        } else {
            return 'You Win!'
        }
    }
 }
