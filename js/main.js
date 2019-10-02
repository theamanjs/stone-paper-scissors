//"use strict()";

function GameStatus(){
    this.roundNumber = 1;
    this.myScore = 0;
    this.opponentScore = 0;
} 
const gameStatus = new GameStatus();

 
function MyMove(selection){
    this.selection = selection;
}

function OpponentMove(){
    this.selection = ['stone', 'paper', 'scissors'];
}

let bufferSelection = {
    mySelection : '',
    opponentSelection : '',
    draw(){
        console.log(result)
    }
}
~(function checkSelection(){
let check = setInterval(() => {
    if(bufferSelection.mySelection && bufferSelection.opponentSelection){
        judgement();
        showResult();
        clearInterval(check);
    }
}, 100);
})();


let limit = (max, min) => Math.random() * (max - min) + min;
function selectionOpponent(){
    let opponentMove = new OpponentMove();
    let randomNumber = Math.round(limit(2,0));
    // console.log(randomNumber);
    console.log(opponentMove.selection[randomNumber]);
    bufferSelection.opponentSelection = opponentMove.selection[randomNumber];
    // bufferSelection.draw();
    document.querySelector("#opponentStatus").setAttribute('src','./images/tick.png');
    opponentDisplay(opponentMove.selection[randomNumber]);
} 
setTimeout(selectionOpponent, Math.round(limit(3000,500)));
// console.log(buff)

function opponentDisplay(selection){
    let image = './images/' + selection + '.svg';
    document.querySelector("#opponentStatus").setAttribute('src',image);
    // console.log(image);
}


function selectedItem(selection){
    let move = new MyMove(selection);
    let Paper = document.querySelector(".paper").style ; 
    let Scissors = document.querySelector(".scissors").style ;
    let Stone = document.querySelector(".stone").style ;
    // console.log(move.selection);
    bufferSelection.mySelection = move.selection;
    // bufferSelection.draw();

    if(move.selection === "stone"){
        Paper.display = 'none';
        Scissors.display = 'none';
    }
    if(move.selection === "paper"){
        Stone.display = 'none';
        Scissors.display = 'none';
    }
    if(move.selection === "scissors"){
        Paper.display = 'none';
        Stone.display = 'none';
    }
    document.querySelector(".status-my").innerText = general.processing.proponent.made;


    // console.log(move.selection);
}


const gameInfo = {
    general:{
        resultTag:{
            won: "You Won",
            loss: "You Loss",
            tie: "Tie",
            null: ""
        },
        processing:{
            proponent:{
                make: "Make a pick",
                made: "You made a pick"
            },
            opponent:{
                make: "Opponent is making a pick",
                made: "Opponent made a pick"
            }
        },

    },
    user:{
        
    },
    opponent: {

    }
};

//Manipulation of DOM for frontend
let general = gameInfo.general;
document.querySelector("#roundNumber").innerText = gameStatus.roundNumber;
document.querySelector(".status-my").innerText = general.processing.proponent.make;
document.querySelector(".status-opponent").innerText = general.processing.opponent.make;
document.querySelector("#result").innerText = general.resultTag.null;

function checkScore(){
    if(gameStatus.myScore === 1){
        document.querySelector("#myScoreOne").classList.add("fas");
        document.querySelector("#myScoreOne").classList.remove("far");
        return;
    }
    if(gameStatus.myScore === 2){
        document.querySelector("#myScoreSecond").classList.add("fas");
        document.querySelector("#myScoreSecond").classList.remove("far");
        return;
    }
    if(gameStatus.myScore === 3){
        document.querySelector("#myScoreThird").classList.add("fas");
        document.querySelector("#myScoreThird").classList.remove("far");
        return;
    }
    if(gameStatus.opponentScore === 1){
        document.querySelector("#opponentScoreOne").classList.add("fas");
        document.querySelector("#opponentScoreOne").classList.remove("far");
        return;
    }
    if(gameStatus.opponentScore === 2){
        document.querySelector("#opponentScoreSecond").classList.add("fas");
        document.querySelector("#opponentScoreSecond").classList.remove("far");
        return;
    }
    if(gameStatus.opponentScore === 3){
        document.querySelector("#opponentScoreThird").classList.add("fas");
        document.querySelector("#opponentScoreThird").classList.remove("far");
        return;
    }
    
}

function judgement(){
    if(bufferSelection.mySelection === 'stone' && bufferSelection.opponentSelection === 'stone'){
        console.log(general.resultTag.tie);
        document.querySelector("#result").innerText = general.resultTag.tie;
        return;
    }
    if(bufferSelection.mySelection === 'stone' && bufferSelection.opponentSelection === 'scissors'){
        console.log(general.resultTag.won);
        gameStatus.myScore++;
        document.querySelector("#result").innerText = general.resultTag.won;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'stone' && bufferSelection.opponentSelection === 'paper'){
        console.log(general.resultTag.loss);
        gameStatus.opponentScore++;
        document.querySelector("#result").innerText = general.resultTag.loss;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'paper' && bufferSelection.opponentSelection === 'paper'){
        console.log(general.resultTag.tie);
        document.querySelector("#result").innerText = general.resultTag.tie;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'paper' && bufferSelection.opponentSelection === 'stone'){
        console.log(general.resultTag.won);
        gameStatus.myScore++;
        document.querySelector("#result").innerText = general.resultTag.won;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'paper' && bufferSelection.opponentSelection === 'scissors'){
        console.log(general.resultTag.loss);
        gameStatus.opponentScore++;
        document.querySelector("#result").innerText = general.resultTag.loss;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'scissors' && bufferSelection.opponentSelection === 'scissors'){
        console.log(general.resultTag.tie);
        document.querySelector("#result").innerText = general.resultTag.tie;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'scissors' && bufferSelection.opponentSelection === 'stone'){
        console.log(general.resultTag.loss);
        gameStatus.opponentScore++;
        document.querySelector("#result").innerText = general.resultTag.loss;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'scissors' && bufferSelection.opponentSelection === 'paper'){
        console.log(general.resultTag.won);
        gameStatus.myScore++;
        document.querySelector("#result").innerText = general.resultTag.won;
        checkScore();
        return;
    }
    // console.log("My ",gameStatus.myScore);
    // console.log("Opponent ",gameStatus.opponentScore);
   
}

function showResult(){
    setTimeout(() => {
            document.querySelector("#result").innerText = general.resultTag.null;
        }, 3000);
        // clearInterval(showResult);
}
// console.log(gameInfo.user.round);