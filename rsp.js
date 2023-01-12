let result=0
let computerScore=0
let playerScore=0
let buttons=document.querySelectorAll('button')
function playRound(playerSelection,computerSelection) {
    const ps=playerSelection.toUpperCase();
    const cs=computerSelection.toUpperCase()
    if(ps=== "ROCK" && cs==="PAPER" ||ps=== "PAPER" && cs==="SCISSORS"||ps=== "SCISSORS" && cs==="ROCK"||ps=== "SCISSORS" && cs==="ROCK"){
        computerScore+=1
        return `You loose! computer chose ${cs}`
    }
    else if(ps==cs)
    {
        return `It's a Tie Round u chose ${ps}`
    }
    else{
        playerScore+=1
        return `You won! cp chose ${cs}`
        
    }
    
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
            playRound(playerSelection,computerSelection)
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
(game())
