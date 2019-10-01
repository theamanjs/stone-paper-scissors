//"use strict()";

function GameStatus(){
    this.roundNumber = 1;
    this.myScore = 0;
    this.opponentScore = 0;
} 
 
function MyMove(selection){
    this.selection = selection;
}

function selectedItem(selection){
    let move = new MyMove(selection);
    let hidePaper = document.querySelector(".paper").style ; 
    let hideScissors = document.querySelector(".scissors").style ;
    let hideStone = document.querySelector(".stone").style ;
    console.log(move.selection);
    if(move.selection === "stone"){
        hidePaper.display = 'none';
        hideScissors.display = 'none';
    }
    if(move.selection === "paper"){
        hideStone.display = 'none';
        hideScissors.display = 'none';
    }
    if(move.selection === "scissors"){
        hidePaper.display = 'none';
        hideStone.display = 'none';
    }
    document.querySelector(".status-my").innerText = general.processing.proponent.made;


    console.log(move.selection);
}

const gameStatus = new GameStatus();

const gameInfo = {
    general:{
        resultTag:{
            won: "You Won",
            loss: "You Loss",
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




// console.log(gameInfo.user.round);