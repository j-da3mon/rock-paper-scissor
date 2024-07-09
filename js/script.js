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
console.log(computerChoice)

//get human choice

function getHumanChoice() {
    let userChoice = prompt("Choose Rock, Paper, or Scissor")
    return userChoice
}

const humanChoice = getHumanChoice();
console.log(humanChoice)

// set scores to 0

let computerScore = 0
let humanScore = 0

// play a round

function playRound(humanChoice, computerChoice) {
    lowerhuman = humanChoice.toLowerCase()
    lowercomputer = computerChoice.toLowerCase()

    if (lowerhuman == lowercomputer) {
        console.log("Tie. Please choose again!")}
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

}

playRound(humanChoice, computerChoice)

// play a game of five rounds

console.log(computerScore)
console.log(humanScore)