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
    this.selection = ['stone', 'paper', 'scissors', 'stone', 'paper', 'scissors', 'stone', 'paper', 'scissors'];
}

let bufferSelection = {
    mySelection : '',
    opponentSelection : '',
    
}

function checkSelection(){
let check = setInterval(() => {
    if(bufferSelection.mySelection && bufferSelection.opponentSelection){
        judgement();
        showResult();
        opponentDisplay(bufferSelection.opponentSelection);
        clearInterval(check);
        setTimeout(resetBattle, 2000);
    }

}, 100);
    bufferSelection.mySelection = '';
    bufferSelection.opponentSelection = '';
};
checkSelection();

function resetBattle(){
    
    if(gameStatus.opponentScore === 3 ){
        setTimeout(() => {
            document.querySelector("#result").innerText = 'Game End: You Lose';
        }, 2000);
        return;
    }
    if(gameStatus.myScore === 3 ){
        setTimeout(() => {
            document.querySelector("#result").innerText = 'Game End: You Won';
        }, 2000);
        return;
    }

    document.querySelector("#opponentStatus").setAttribute('src','./images/loading.svg');
    Paper.display = 'block';
    Stone.display = 'block';
    Scissors.display = 'block';
    document.querySelector(".status-my").innerText = general.processing.proponent.make;
    document.querySelector(".status-opponent").innerText = general.processing.opponent.make;
    gameStatus.roundNumber++;
    document.querySelector("#roundNumber").innerText = gameStatus.roundNumber;
    setTimeout(selectionOpponent, Math.round(limit(2000,500)));
    checkSelection();
}

function resetWar(){
    resetScore();
    document.querySelector("#opponentStatus").setAttribute('src','./images/loading.svg');
    Paper.display = 'block';
    Stone.display = 'block';
    Scissors.display = 'block';
    document.querySelector(".status-my").innerText = general.processing.proponent.make;
    document.querySelector(".status-opponent").innerText = general.processing.opponent.make;
    gameStatus.roundNumber = 1;
    gameStatus.opponentScore = 0;
    gameStatus.myScore = 0;
    document.querySelector("#roundNumber").innerText = gameStatus.roundNumber;
    setTimeout(selectionOpponent, Math.round(limit(2000,500)));
    checkSelection();
}


let limit = (max, min) => Math.random() * (max - min) + min;
function selectionOpponent(){
    let opponentMove = new OpponentMove();
    let randomNumber = Math.round(limit(8,0));
    // console.log(randomNumber);
    console.log(opponentMove.selection[randomNumber]);
    document.querySelector(".status-opponent").innerText = general.processing.opponent.made;
    bufferSelection.opponentSelection = opponentMove.selection[randomNumber];
    // bufferSelection.draw();
    document.querySelector("#opponentStatus").setAttribute('src','./images/tick.png');
} 
setTimeout(selectionOpponent, Math.round(limit(2000,500)));
// console.log(buff)

function opponentDisplay(selection){
    let image = './images/' + selection + '.svg';
    document.querySelector("#opponentStatus").setAttribute('src',image);
    // console.log(image);
}

    
let Paper = document.querySelector("#paper").style ; 
let Scissors = document.querySelector("#scissors").style ;
let Stone = document.querySelector("#stone").style ;

function selectedItem(selection){
    let move = new MyMove(selection);
    let Paper = document.querySelector("#paper").style ; 
    let Scissors = document.querySelector("#scissors").style ;
    let Stone = document.querySelector("#stone").style ;
    console.log(move.selection);
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
            lose: "You Lose",
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
        // return;
    }
    if(gameStatus.myScore === 2){
        document.querySelector("#myScoreSecond").classList.add("fas");
        document.querySelector("#myScoreSecond").classList.remove("far");
        // return;
    }
    if(gameStatus.myScore === 3){
        document.querySelector("#myScoreThird").classList.add("fas");
        document.querySelector("#myScoreThird").classList.remove("far");
        console.log('Game End: You Won');
        // return;
    }
    if(gameStatus.opponentScore === 1){
        document.querySelector("#opponentScoreOne").classList.add("fas");
        document.querySelector("#opponentScoreOne").classList.remove("far");
        // return;
    }
    if(gameStatus.opponentScore === 2){
        document.querySelector("#opponentScoreSecond").classList.add("fas");
        document.querySelector("#opponentScoreSecond").classList.remove("far");
        // return;
    }
    if(gameStatus.opponentScore === 3){
        document.querySelector("#opponentScoreThird").classList.add("fas");
        document.querySelector("#opponentScoreThird").classList.remove("far");
        // return;
        console.log('Game End: You Lose');
    }
    
}

function resetScore(){
        document.querySelector("#myScoreOne").classList.add("far");
        document.querySelector("#myScoreOne").classList.remove("fas");
        // return;
        document.querySelector("#myScoreSecond").classList.add("far");
        document.querySelector("#myScoreSecond").classList.remove("fas");
        // return;
        document.querySelector("#myScoreThird").classList.add("far");
        document.querySelector("#myScoreThird").classList.remove("fas");

        document.querySelector("#opponentScoreOne").classList.add("far");
        document.querySelector("#opponentScoreOne").classList.remove("fas");

        document.querySelector("#opponentScoreSecond").classList.add("far");
        document.querySelector("#opponentScoreSecond").classList.remove("fas");
        // return;
        document.querySelector("#opponentScoreThird").classList.add("far");
        document.querySelector("#opponentScoreThird").classList.remove("fas");
        // return;
    
}

function judgement(){
    if(bufferSelection.mySelection === 'stone' && bufferSelection.opponentSelection === 'stone'){
        //console.log(general.resultTag.tie);
        document.querySelector("#result").innerText = general.resultTag.tie;
        return;
    }
    if(bufferSelection.mySelection === 'stone' && bufferSelection.opponentSelection === 'scissors'){
        //console.log(general.resultTag.won);
        gameStatus.myScore++;
        document.querySelector("#result").innerText = general.resultTag.won;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'stone' && bufferSelection.opponentSelection === 'paper'){
        //console.log(general.resultTag.Lose);
        gameStatus.opponentScore++;
        document.querySelector("#result").innerText = general.resultTag.lose;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'paper' && bufferSelection.opponentSelection === 'paper'){
        //console.log(general.resultTag.tie);
        document.querySelector("#result").innerText = general.resultTag.tie;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'paper' && bufferSelection.opponentSelection === 'stone'){
        //console.log(general.resultTag.won);
        gameStatus.myScore++;
        document.querySelector("#result").innerText = general.resultTag.won;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'paper' && bufferSelection.opponentSelection === 'scissors'){
        //console.log(general.resultTag.Lose);
        gameStatus.opponentScore++;
        document.querySelector("#result").innerText = general.resultTag.lose;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'scissors' && bufferSelection.opponentSelection === 'scissors'){
        //console.log(general.resultTag.tie);
        document.querySelector("#result").innerText = general.resultTag.tie;
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'scissors' && bufferSelection.opponentSelection === 'stone'){
        //console.log(general.resultTag.Lose);
        gameStatus.opponentScore++;
        document.querySelector("#result").innerText = general.resultTag.lose;
        //console.log("Lose")
        checkScore();
        return;
    }
    if(bufferSelection.mySelection === 'scissors' && bufferSelection.opponentSelection === 'paper'){
        //console.log(general.resultTag.won);
        gameStatus.myScore++;
        document.querySelector("#result").innerText = general.resultTag.won;
        checkScore();
        return;
    }
    // //console.log("My ",gameStatus.myScore);
    // console.log("Opponent ",gameStatus.opponentScore);
   
}

function showResult(){
    setTimeout(() => {
            document.querySelector("#result").innerText = general.resultTag.null;
        }, 3000);
        // clearInterval(showResult);
}
// console.log(gameInfo.user.round);