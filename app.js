var userScore = 0;
var compScore = 0;
const ChoicesArr = ["Rock", "Paper", "Scissor"];
//dom element
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");

const result_P = document.getElementById("res");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

// 0 = rock
// 1 = paper
// 2 = scissor
function getCompChoice(){
    var s = Math.floor(Math.random() * 3);
    return s;
}

// return winner
function game(userChoice){
    var compChoice = getCompChoice();
    if(userChoice > compChoice){
        if(compChoice == 0 && userChoice == 2){
           //computer wins
           lose(userChoice, compChoice);
           return;
        }
        else{
            //player wins
            win(userChoice, compChoice);
            return;
        }
    }
    else{
        if(compChoice == userChoice){
            draw(userChoice, compChoice);
            return;
        }
        if(userChoice == 0 && compChoice == 2){
            //player wins
            win(userChoice, compChoice);
            return;
         }
         else{
             //computer wins
             lose(userChoice, compChoice);
             return;
         }
    }
}

function win(userChoice, compChoice){
    userScore++;
    userScore_span.textContent=userScore;
    //console.log("WIN");
    result_P.innerHTML= ChoicesArr[userChoice] + " beats " + ChoicesArr[compChoice];
}

function lose(userChoice, compChoice){
    //compScore++;
    compScore++;
    compScore_span.textContent=compScore;
    //console.log("lose");
    result_P.innerHTML= ChoicesArr[compChoice] + " beats " + ChoicesArr[userChoice];
}

function draw(userChoice, compChoice){
    //console.log("draw");
    result_P.innerHTML= ChoicesArr[compChoice] + " draws " + ChoicesArr[userChoice];
}

function main(){
    //console.log(result_P);
    rock_div.addEventListener('click',function(){
        game(0);
    })
    
    paper_div.addEventListener('click',function(){
        game(1);
    })
    
    scissor_div.addEventListener('click',function(){
        game(2);
    })
}

main();