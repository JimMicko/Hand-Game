const round = document.getElementById('round');
const header = document.getElementById('header');
const gameCount = document.getElementById('gameCount');
const result = document.getElementById('result');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const options = document.querySelectorAll("#options button");
const winner = document.getElementById("winner");
const finalResult = document.getElementById("finalResult");
const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const history = document.getElementById("history");

function newGame(){
    location.reload()
}
// function showHistory(){
//     if(history.style.display == "none")
//     history.style.display = "block"
//     else
//     history.style.display = "none"
// }

options.forEach((option) => {
    option.addEventListener("click", () => {
        player.src = "images/STONEPlayer.png"
        computer.src ="images/STONEComputer.png"
        player.classList.add("shakePlayer");
        computer.classList.add("shakeComputer");
        header.style.display = "block !important"

        setTimeout(() => {
            player.classList.remove("shakePlayer");
            computer.classList.remove("shakeComputer");

            player.src = "images/"+option.innerHTML+"Player.png"

            const choice = ["STONE","PAPER","SCISSORS"];
            let array = Math.floor(Math.random()*3);
            let computerChoice = choice[array];
            computer.src = "images/"+computerChoice+"Computer.png"
            
            let playerPoints = parseInt(playerScore.innerHTML);
            let computerPoints = parseInt(computerScore.innerHTML);
            let roundNo = parseInt(round.innerHTML)
            let gameCountNo = parseInt(gameCount.innerHTML)

            if(gameCount.innerHTML < 11){
                round.innerHTML = roundNo + 1;
                gameCount.innerHTML = gameCountNo + 1;
                if(option.innerHTML === "STONE"){
                    if(computerChoice === "PAPER"){
                        computerScore.innerHTML = computerPoints + 1;
                        result.innerHTML = "COMPUTER WINS";
                    }
                    else if(computerChoice === "SCISSORS"){
                        playerScore.innerHTML = playerPoints + 1;
                        result.innerHTML = "PLAYER WINS"
                    }
                    else result.innerHTML = "DRAW";
                    }
                    else if(option.innerHTML === "PAPER"){
                    if(computerChoice === "SCISSORS"){
                        computerScore.innerHTML = computerPoints + 1;
                        result.innerHTML = "COMPUTER WINS";
                    }
                    else if(computerChoice === "STONE"){
                        playerScore.innerHTML = playerPoints + 1;
                        result.innerHTML = "PLAYER WINS"
                    }
                    else result.innerHTML = "DRAW";
                    }
                    else if(option.innerHTML === "SCISSORS"){
                    if(computerChoice === "STONE"){
                        computerScore.innerHTML = computerPoints + 1;
                        result.innerHTML = "COMPUTER WINS";
                    }
                    else if(computerChoice === "PAPER"){
                        playerScore.innerHTML = playerPoints + 1;
                        result.innerHTML = "PLAYER WINS"
                    }
                    else result.innerHTML = "DRAW";
                }
            }
            else if(gameCount.innerHTML == 10){
                gameCount.innerHTML = gameCountNo + 1;
                if(option.innerHTML === "STONE"){
                    if(computerChoice === "PAPER"){
                        computerScore.innerHTML = computerPoints + 1;
                        result.innerHTML = "COMPUTER WINS";
                        history.innerHTML = history.innerHTML + "Round" + round.innerHTML
                        console.log(history.innerHTMLL)
                    }
                    else if(computerChoice === "SCISSORS"){
                        playerScore.innerHTML = playerPoints + 1;
                        result.innerHTML = "PLAYER WINS"
                    }
                    else result.innerHTML = "DRAW";
                    }
                    else if(option.innerHTML === "PAPER"){
                    if(computerChoice === "SCISSORS"){
                        computerScore.innerHTML = computerPoints + 1;
                        result.innerHTML = "COMPUTER WINS";
                    }
                    else if(computerChoice === "STONE"){
                        playerScore.innerHTML = playerPoints + 1;
                        result.innerHTML = "PLAYER WINS"
                    }
                    else result.innerHTML = "DRAW";
                    }
                    else if(option.innerHTML === "SCISSORS"){
                    if(computerChoice === "STONE"){
                        computerScore.innerHTML = computerPoints + 1;
                        result.innerHTML = "COMPUTER WINS";
                    }
                    else if(computerChoice === "PAPER"){
                        playerScore.innerHTML = playerPoints + 1;
                        result.innerHTML = "PLAYER WINS"
                    }
                    else result.innerHTML = "DRAW";
                }
                stone.setAttribute(disabled,"")
                paper.setAttribute(disabled,"")
                scissors.setAttribute(disabled,"")
            }
            if(gameCount.innerHTML > 10){
                finalResult.innerHTML = "GAME OVER";
                stone.setAttribute("disabled","");
                paper.setAttribute("disabled","");
                scissors.setAttribute("disabled","");
                if(playerScore.innerHTML > computerScore.innerHTML){
                    winner.innerHTML = "PLAYER WINS";         
                }
                else if(playerScore.innerHTML < computerScore.innerHTML){
                    winner.innerHTML = "COMPUTER WINS";
                }
                else if(playerScore.innerHTML === computerScore.innerHTML){
                    winner.innerHTML = "DRAW";
                }
            }
        }, 900);
    });
});
