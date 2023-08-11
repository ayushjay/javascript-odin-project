

function game(playerSelection, computerSelection){
    for (i = 0;i<5;i++){
        let playerSelection = alert("Choose rock, paper or scissors");
        
        const computerSelection = getComputerChoice()
        if ( playerSelection == "rock" && computerSelection == "scissors"){
            return "You beat rock with scissors!";
        } else if(playerSelection == "rock" && computerSelection == "paper"){
            return "You lost to paper!";
        } else if (playerSelection == "rock" && computerSelection == "rock"){
            return "it's a draw!";
        } else if (playerSelection == "paper" && computerSelection == "rock"){
            return "You beat rock!";
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            return "You lost to scissors!";
        } else if(playerSelection == "paper" && computerSelection == "paper"){
            return "Its a draw!";
            
        } else if(playerSelection == "scissors" && computerSelection == "scissors"){
            return "Its a draw!";
        }else if (playerSelection == "scissors" && computerSelection == "rock"){
            return "You lost to rock";
        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            return "You won to paper";
        } else{
            return "error!";
        }
            
            
        }
    }




function getComputerChoice(){
    let choice = ['rock','paper', 'scissors'];
    randomNumTill2 = Math.floor(Math.random() * 2);
    return choice[randomNumTill2];

}

game();
   