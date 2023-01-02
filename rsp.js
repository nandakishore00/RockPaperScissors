let result=0
let csr=0
let=psr=0
function playRound(playerSelection,computerSelection) {
    const ps=playerSelection.toUpperCase();
    const cs=computerSelection.toUpperCase()
    if(ps=== "ROCK" && cs==="PAPER" ||ps=== "PAPER" && cs==="SCISSORS"||ps=== "SCISSORS" && cs==="ROCK"||ps=== "SCISSORS" && cs==="ROCK"){
        csr+=1
        return `You loose! ${cs} beat ${ps}`
    }
    else if(ps==cs)
    {
        return "It's a tie puta"
    }
    else{
        return `You won! cp chose ${cs}`
        psr+=1
    }
    
  }
let options=["rock","paper","scissors"]
function getComputerChoice(){
    return options[Math.floor(Math.random()*3)]
}
function game(){
    for(let i=0;i<5; i++){
        
        let computerSelection= getComputerChoice();
        let playerSelection=prompt("Choose Rock paper Scissors");
        
         console.log(playRound(playerSelection,computerSelection))

        
    }
    console.log("Game over")
    if(psr>csr){
        result="player won"
    }
    else if(csr>psr){
        result="Computer Won"
    }
    else{
        result="its a tie"
    }
    return result
} 
console.log(game())
