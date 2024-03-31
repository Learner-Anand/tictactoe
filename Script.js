let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset_btn");
let continueGame = document.querySelector("#continueGame");
let restart = document.querySelector("#restart");
let winner_div = document.querySelector("#winner_div");
let msg = document.querySelector("#msg");
let playerX = document.querySelector("#playerX");
let playerO = document.querySelector("#playerO");

let playerX_win=0;
let playerO_win=0;
let clicks=0;
let turn="Player O";
const winKey=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
            ]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(clicks==8){
            box.innerText="X";
            playerX.style.color= "red";
            playerO.style.color= "rgb(122, 122, 122)";
            box.style.color="red"
            msg.innerText=`Oops, It's a Draw`;
            winner_div.classList.remove("hide");
            console.log("It's a draw");
        }
        else if(turn=="Player O"){
            box.innerText="X";
            turn="Player X";
            box.style.color="red"
            playerX.style.color= "red";
            playerO.style.color= "rgb(122, 122, 122)";
            clicks++;
        }
        else{
            turn="Player O";
            box.innerText="O";
            box.style.color= "rgb(122, 122, 122)";
            playerX.style.color= "red";
            playerO.style.color= "rgb(122, 122, 122)";
            clicks++;
        }
        box.disabled=true;
        checkWinner();
    })
    reset.addEventListener("click",()=>{
        box.innerText="";
        clicks=0;
        box.disabled=false;
    })
    continueGame.addEventListener("click",()=>{
        box.innerText="";
        clicks=0;
        box.disabled=false;
        winner_div.classList.add("hide");
    })
    restart.addEventListener("click",()=>{
        playerO_win=0;
        clicks=0;
        playerX_win=0;
        box.innerText="";
        box.disabled=false;
        winner_div.classList.add("hide");
    })
})

let checkWinner = () => {
    for(key of winKey){
        if(boxes[key[0]].innerText != "" && boxes[key[1]].innerText != "" && boxes[key[2]].innerText != ""){
            if(boxes[key[0]].innerText == boxes[key[1]].innerText && boxes[key[2]].innerText == boxes[key[1]].innerText){
                boxes.forEach((box)=>{
                    box.disabled=true;
                })
                winner_div.classList.remove("hide")
                msg.innerText=`Congratulations, Winner is ${turn}`;

                if(turn=="Player X"){
                    playerX_win++;
                    playerX.innerText="Player X = "+playerX_win;
                    playerO.innerText="Player O = "+playerO_win;
                    break;
                }
                else{
                    playerO_win++;
                    playerX.innerText="Player X = "+playerX_win;
                    playerO.innerText="Player O = "+playerO_win;
                    break;
                }

            }
        }
    }
}


// else if(boxes.forEach((box)=()=>{
//     if(box.innerText != ""){
//         console.log("It's Draw");
//     }
// }))