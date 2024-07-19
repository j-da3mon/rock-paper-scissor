console.log("Get ready for Rock, Paper, Scissor! You have 5 rounds to play! Good luck!")

// set initial scores to zero

let computerScore = 0;
let humanScore = 0;

// function for random computer choice

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

// function for round of play logic

function playRound(humanChoice, computerChoice) {
    lowerhuman = humanChoice.toLowerCase()
    lowercomputer = computerChoice.toLowerCase()

    console.log("The computer chose " + lowercomputer + " and you chose " + lowerhuman + ".")

    if (lowerhuman == lowercomputer) {
        console.log("Tie. Please choose again!")
        }
        else if (lowerhuman == "rock" && lowercomputer == "scissor") {
            console.log("Human wins a point!")
            humanScore ++
        }
        else if (lowerhuman == "paper" && lowercomputer == "rock") {
            console.log("Human wins a point!")
            humanScore ++
        }
        else if (lowerhuman == "scissor" && lowercomputer == "paper") {
            console.log("Human wins a point!")
            humanScore ++
        }
        else {
            console.log("Computer wins a point!")
            computerScore ++
        }

    console.log("The computer's score is " + computerScore + ".")
    console.log("Your score is " + humanScore + ".") 
};

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    let humanChoice = "Rock"
    let compChoice = getComputerChoice()
    playRound(humanChoice, compChoice)
})
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    let humanChoice = "Paper"
    let compChoice = getComputerChoice()
    playRound(humanChoice, compChoice)
})
const scissorButton = document.querySelector("#scissor");
scissorButton.addEventListener("click", () => {
    let humanChoice = "Paper"
    let compChoice = getComputerChoice()
    playRound(humanChoice, compChoice)
})

function playGame() {

    // set scores to 0




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