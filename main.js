const round = document.getElementById('round');
const gameCount = document.getElementById('gameCount');
const result = document.getElementById('result');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const options = document.querySelectorAll("#options button");

options.forEach((option) => {
    option.addEventListener("click", () => {
        player.src = "images/stonePlayer.png"
        computer.src ="images/stoneComputer.png"
        player.classList.add("shakePlayer");
        computer.classList.add("shakeComputer");

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

            if(round.innerHTML < 10){
                round.innerHTML = roundNo + 1;
                gameCount.innerHTML = gameCountNo + 1;
                if(option.innerHTML === "STONE"){
                    if(computerChoice === "PAPER"){
                        computerScore.innerHTML = computerPoints + 1;
                        result.innerHTML = "COMPUTER WINS";
                        console.log(option)
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
                        console.log(option)
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
                        console.log(option)
                    }
                    else if(computerChoice === "PAPER"){
                        playerScore.innerHTML = playerPoints + 1;
                        result.innerHTML = "PLAYER WINS"
                    }
                    else result.innerHTML = "DRAW";
                }
            }
            if(gameCount.innerHTML > 10){
                document.getElementById("finalResult").innerHTML = "GAME OVER";
                if(playerScore.innerHTML > computerScore.innerHTML){
                    document.getElementById("winner").innerHTML = "PLAYER WINS";         
                }
                else if(playerScore.innerHTML < computerScore.innerHTML){
                    document.getElementById("winner").innerHTML = "COMPUTER WINS";
                }
                else if(playerScore.innerHTML === computerScore.innerHTML){
                    document.getElementById("winner").innerHTML = "DRAW";
                }
            }
        }, 900);
    });
});