console.log("Hello, World!")

// Get computer choice

const computerChoice = function getComputerChoice() {
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

//get human choice

const humanChoice = function getHumanChoice() {
    let userChoice = prompt("Choose Rock, Paper, or Scissor")
    return userChoice
}

console.log(computerChoice())
console.log(humanChoice())

// set scores to 0

let computerScore = 0
let humanScore = 0

console.log(computerScore)
console.log(humanScore)