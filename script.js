function getComputerChoice(){
    let x = Math.random();
    if(x<0.33){
        return "Rock";
    }else if(x<0.66){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let input = prompt("Enter your choice: ");

    if(input.toLowerCase()=="rock"){
        return "Rock";
    } else if(input.toLowerCase()=="paper"){
        return "Paper";
    } else if(input.toLowerCase()=="scissors"){
        return "Scissors";
    } else{
        return ;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
    if(humanChoice==computerChoice){
        return "no Winner";
    }else if(humanChoice=="Paper" && computerChoice=="Scissors"){
        computerScore++;
        return "You lose! Scissors beats Paper."
    }else if(humanChoice=="Scissors" && computerChoice=="Rock"){
        computerScore++;
        return "You lose! Rock beats Scissors."
    }else if(humanChoice=="Rock" && computerChoice=="Paper"){
        computerScore++;
        return "You lose! Paper beats Rock."
    }else if(humanChoice=="Scissors" && computerChoice=="Paper"){
        humanScore++;
        return "You won! Scissors beats Paper."
    }else if(humanChoice=="Paper" && computerChoice=="Rock"){
        humanScore++;
        return "You won! Paper beats Rock."
    }else if(humanChoice=="Rock" && computerChoice=="Scissors"){
        humanScore++;
        return "You won! Rock beats Scissors."
    }else{
        return;
    }
  }



function playGame(){
    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore>computerScore){
        return "You won! Congratulations.";
    }else if(humanScore<computerScore){
        return "You Lose! Computer won.";
    }else{
        return "Draw!"
    }
}

alert(playGame());




