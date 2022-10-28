let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("usr-score");
const computerScore_span=document.getElementById("cmptr-score");
// const result_div_p=document.getElementById("results");
const result_div_p=document.querySelector(".result > p")
const choiceRock_div=document.getElementById("rock");
const choicePaper_div=document.getElementById("paper");
const choiceScissor_div=document.getElementById("scissor");

function getComputerChoice(){
    const choices=["r",'p',"s"];
    const computerChoice=Math.floor(Math.random()*3);
    return choices[computerChoice];
}
function convertChoiceToWord(choice){
    if(choice==="r") return "Rock";
    if(choice==="p") return "Paper";
    return "Scissor"

}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    result_div_p.innerHTML=`${convertChoiceToWord(userChoice)}(user) beats ${convertChoiceToWord(computerChoice)}(comp) 'You win!'`;
    // for border animation
    document.getElementById(userChoice).classList.add('green-glow');
}
function lose(userChoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_div_p.innerHTML=`${convertChoiceToWord(computerChoice)}(user) beats ${convertChoiceToWord(userChoice)}(comp) 'You Lose!'`;
}

function draw(userChoice,computerChoice){
    result_div_p.innerHTML=`${convertChoiceToWord(userChoice)}(user) vs ${convertChoiceToWord(computerChoice)}(comp) 'Its a DRAW!'`;
}


function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case "pr":
        case "sp":
        case "rs":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":    
        case "ss":
            draw(userChoice,computerChoice);
            break;                      
    }


    
}



function main(){
 choiceRock_div.addEventListener("click",function(){
   game("r")
 });
 choicePaper_div.addEventListener("click",function(){ 
  game("p")
 });
 choiceScissor_div.addEventListener("click",function(){
    game("s")
 });
}
main()
