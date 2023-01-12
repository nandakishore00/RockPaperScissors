let result=0
let computerScore=0
let playerScore=0
let score=document.querySelector('.score')
let buttons=document.querySelectorAll('button')
let output=document.querySelector('.output')
score.innerText= `playerScore: ${playerScore} ComputerScore:${computerScore}`
function playRound(playerSelection,computerSelection) {
    
    const ps=playerSelection.toUpperCase();
    const cs=computerSelection.toUpperCase();
    if(ps=== "ROCK" && cs==="PAPER" ||ps=== "PAPER" && cs==="SCISSORS"||ps=== "SCISSORS" && cs==="ROCK"||ps=== "SCISSORS" && cs==="ROCK"){
        computerScore+=1
        let p=document.createElement('p')
        p.innerText=`You loose! computer chose ${cs}`
        output.appendChild(p)
    }
    else if(ps==cs)
    {
        let p=document.createElement('p')
        p.innerText=`It's a Tie Round u chose ${ps}`
        output.appendChild(p)
    }
    else{
        playerScore+=1
        let p=document.createElement('p')
        p.innerText=`You won! cp chose ${cs}`
        output.appendChild(p)
    }
    
  }
function scores(playerScore,computerScore){
    score.innerText= `playerScore: ${playerScore} ComputerScore:${computerScore}`
}
function chooseWinner(playerScore,computerScore){
    let h1=document.createElement('h1')
    if(computerScore==5){
        
        h1.innerText=` ${computerScore}:${playerScore} U lost the game`
        
        
    }
    else if(playerScore==5){
        h1.innerText=`${playerScore}:${computerScore} U won the game`
        
    }
    
    output.appendChild(h1)
}
let options=["rock","paper","scissors"]
function getComputerChoice(){
    return options[Math.floor(Math.random()*3)]
}
function game(){
    buttons.forEach(button=>{
        button.addEventListener("click",function(){
            let playerSelection=`${(this.textContent)}`
            let computerSelection= getComputerChoice();
            
            playRound(playerSelection,computerSelection);
            scores(playerScore,computerScore)
            chooseWinner(playerScore,computerScore)
            if(playerScore==5 || computerScore==5){
                playerScore=0
                computerScore=0
            }
        })  
    })
}
//console.log("Game over")
//if(psr>csr){
//    result=`Player wins ${psr} rounds and computer wins ${csr} rounds`
//}
//else if(csr>psr){
//    result=`computer wins ${csr} rounds and Player wins ${psr} rounds`
//}
//else{
//    result="its a tie"
//}
//return result
game()
