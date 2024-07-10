console.log("Hello, World!")

// Get computer choice

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "Rock"
    } 
        else if (randomChoice === 1) {
            return "Paper"
        }
        else {
            return "Scissor"
        }
}

//show computer's choice for testing

const computerChoice = getComputerChoice();
// console.log(computerChoice)

//get human choice

function getHumanChoice() {
    let userChoice = prompt("Choose Rock, Paper, or Scissor")
    return userChoice
}

const humanChoice = getHumanChoice();
// console.log(humanChoice)

// play a game of five rounds

function playGame() {

    // set scores to 0

    let computerScore = 0;
    let humanScore = 0;
    console.log("The computer's score is " + computerScore + ".")
    console.log("Your score is " + humanScore + ".")

    // play a Round Function

    function playRound(humanChoice, computerChoice) {
        lowerhuman = humanChoice.toLowerCase()
        lowercomputer = computerChoice.toLowerCase()

        console.log("The computer chose " + lowercomputer + " and you chose " + lowerhuman + ".")
    
        if (lowerhuman == lowercomputer) {
            console.log("Tie. Please choose again!")
            }
            else if (lowerhuman == "rock" && lowercomputer == "scissor") {
                console.log("Human wins a point!")
                return humanScore ++
            }
            else if (lowerhuman == "paper" && lowercomputer == "rock") {
                console.log("Human wins a point!")
                return humanScore ++
            }
            else if (lowerhuman == "scissor" && lowercomputer == "paper") {
                console.log("Human wins a point!")
                return humanScore ++
            }
            else {
                console.log("Computer wins a point!")
                return computerScore ++
            }
        
        console.log(computerScore)
        console.log(humanScore)    
    };

// play 5 rounds 

    playRound(humanChoice, computerChoice);

    const computerChoice2 = getComputerChoice();
    const humanChoice2 = getHumanChoice();

    playRound(humanChoice2, computerChoice2);

    const computerChoice3 = getComputerChoice();
    const humanChoice3 = getHumanChoice();

    playRound(humanChoice3, computerChoice3);

    const computerChoice4 = getComputerChoice()
    const humanChoice4 = getHumanChoice();

    playRound(humanChoice4, computerChoice4);

    const computerChoice5 = getComputerChoice()
    const humanChoice5 = getHumanChoice();

    playRound(humanChoice5, computerChoice5);

//return final score and announce winner    

    console.log("The final score is Computer: " + computerScore + ", Human: " + humanScore + ".")

    if (computerScore > humanScore) {
        console.log("Computer wins! Good luck next time!")
        }
        else if (computerScore < humanScore) {
            console.log("Human wins! You have a real talent for this!")
        }
        else {
            console.log("It looks like this round ended in a draw. Good luck next time!")
        }

}




playGame()
