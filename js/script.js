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

let userCounter = document.querySelector(".user-counter");
let compCounter = document.querySelector(".comp-counter");
let userCount = 0;
let compCount = 0;
let choiceAnnounce = document.querySelector(".choice-announce");
let winnerAnnounce = document.querySelector(".winner-announce");

// function for round of play logic

function playRound(humanChoice, computerChoice) {
    lowerhuman = humanChoice.toLowerCase()
    lowercomputer = computerChoice.toLowerCase()

    choiceAnnounce.innerHTML = ("The computer chose " + lowercomputer + " and you chose " + lowerhuman + ".")

    if (lowerhuman == lowercomputer) {
        winnerAnnounce.innerHTML = ("Tie. Please choose again!")
        }
        else if (lowerhuman == "rock" && lowercomputer == "scissor") {
            winnerAnnounce.innerHTML = ("Human wins a point!")
            userCount ++;
            userCounter.innerHTML = userCount;
        }
        else if (lowerhuman == "paper" && lowercomputer == "rock") {
            winnerAnnounce.innerHTML = ("Human wins a point!")
            userCount ++;
            userCounter.innerHTML = userCount;
        }
        else if (lowerhuman == "scissor" && lowercomputer == "paper") {
            winnerAnnounce.innerHTML = ("Human wins a point!")
            userCount ++;
            userCounter.innerHTML = userCount;
        }
        else {
            winnerAnnounce.innerHTML = ("Computer wins a point!")
            compCount ++;
            compCounter.innerHTML = compCount;
        }

    if (userCount == 5) {
        winnerAnnounce.innerHTML = ("Human wins!! Great Game!")
    }
    if (compCount == 5) {
        winnerAnnounce.innerHTML = ("Computer wins!! Great Game!")
    }

    console.log("The computer's score is " + computerScore + ".")
    console.log("Your score is " + humanScore + ".") 
};

// Click to play a round using the playRound function logic

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

// set scores to 0