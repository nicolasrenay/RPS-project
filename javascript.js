// when human click on a button - OK
// value of the id is store in a variable - OK
// new text is created with the value of the variable - OK
// AND 
// Machine random choice is created
// Machine choice is store in a variable
// new text is created with the value store in a variable
// function will compare the two result to provide the status: Null / win / lose
// status will be display
// according to this status point will be enrich to human or machin
// 
// an the end of 5 round a winer will be design

/* EXEMPLE
let body = document.querySelector("body")
        let h1 = document.createElement("h1");
        h1.textContent = "You win";
        body.appendChild(h1);
let divMachine = document.createElement("div");
let h1 = document.createElement("h1");
*/

let humanChoice;
let machineChoice;

let result;

let buttonRock = document.getElementById('rock');
let buttonPaper = document.getElementById('paper');
let buttonScissor = document.getElementById('scissor');
let spanHumanChoice = document.getElementById('human-choice');
let spanMachineChoice = document.getElementById('machine-choice');
let spanResult = document.getElementById('result');

let spanHumanScore = document.getElementById('humanScore');
let spanMachineScore = document.getElementById('machinScore');


let rock = 'Rock';
let paper = 'Paper';
let scissor = 'Scissor';

let humanScore = 0;
let MachineScore = 0;

let pointScore;

let test;
//HUMAN CHOICE
//btn rock
buttonRock.addEventListener('click', (event) => {
    humanChoice = rock;
    spanHumanChoice.textContent = rock;
    machineChoice = getComputerChoice();
    spanMachineChoice.textContent = machineChoice;
    
    spanResult.textContent =  compareResult(humanChoice, machineChoice);
    test = compareResult(humanChoice, machineChoice)
    getPoint(test);
})

//btn paper
buttonPaper.addEventListener('click', (event) => {
    humanChoice = paper;
    spanHumanChoice.textContent = paper;
    machineChoice = getComputerChoice();
    spanMachineChoice.textContent = machineChoice;
    
    spanResult.textContent =  compareResult(humanChoice, machineChoice);
    pointScore = compareResult(humanChoice, machineChoice);
    test = compareResult(humanChoice, machineChoice)
    getPoint(test);
})

//btn scissor
buttonScissor.addEventListener('click', (event) => {
    humanChoice = scissor;
    spanHumanChoice.textContent = scissor;
    machineChoice = getComputerChoice();
    spanMachineChoice.textContent = machineChoice;
    
    spanResult.textContent =  compareResult(humanChoice, machineChoice);    
    test = compareResult(humanChoice, machineChoice)
    getPoint(test);
})

//MACHINE CHOICE
function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3);
    let machineChoice = convertionComputer(ComputerChoice);

    return machineChoice;
}
    
function convertionComputer (P1) {
    if (P1 === 0) {
        return rock;
    } else if (P1 === 1) {
        return paper;
    } else {
        return scissor;
    }
}

function compareResult(human, machine) {
    if (human === machine) {
        return "Null! 😑";
    } else if ((human === rock && machine === scissor) || 
               (human === paper && machine === rock) ||
               (human === scissor && machine === paper)) {
        return "You Win! 🥳";
    } else {
        return "You Loose! 🥲";
    }
}

function getPoint(result) {
    if (result === "You Win! 🥳") {
        humanScore += 1;
        spanHumanScore.textContent = humanScore;
        return humanScore
    } else if (result === "You Loose! 🥲") {
        MachineScore += 1;
        spanMachineScore.textContent = MachineScore;
        return MachineScore
    } else {
        return;
    }
}
