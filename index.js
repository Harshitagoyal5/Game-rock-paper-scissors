let userScore=0;

let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("h2");
let msgUserScore=document.querySelector("#user_score");
let msgCompScore=document.querySelector("#comp_score");

const funUserWin=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msgUserScore.innerText=userScore;
        msg.innerText=`Congrats! You won, ${userChoice} beat ${compChoice} `;
        msg.style.color="green";
    }else{
        compScore++;
        msgCompScore.innerText=compScore;
        msg.innerText=`Sorry,you lost ! ${compChoice} beat ${userChoice}  `;
        msg.style.color="red";
    }
};

//comp generated choices
const funCompChoice=()=>{
    let list=["rock","paper","scissors"];
    let ranNum=Math.floor(Math.random()*3);
    return list[ranNum];
}
//draw game
const drawgame=()=>{
    msg.innerText="game is drawn! Play again";
    msg.style.color="yellow";
}

//function for printing user choice
const playGame=(userChoice)=>{
    console.log("userChoice : ",userChoice);
    const compChoice=funCompChoice();

    if(userChoice===compChoice){
        //draw game
        drawgame();
    }else{
        let userWin=true;
        //rock,paper,scissors
        if(userChoice==="rock"){
            userWin= compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"? false:true;
        }
        else {
            userWin= compChoice==="rock"? false:true;
        }
        funUserWin(userWin,userChoice,compChoice);
    }
};



//function for after on clicking
choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

