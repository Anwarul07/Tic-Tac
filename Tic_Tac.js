let over = new Audio("project folder/gameover.mp3");
let audioTurn = new Audio("project folder/ting.mp3");
let music = new Audio("project folder/music.mp3");

let turn = "x";

// function change turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x"
}

// winning listener
const checkWin = () => {


}


//game logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("won")[0].innerText = "Turn for " + turn;
        } else {

        }
    })
})


let button=document.getElementById("reset");
button.addEventListener("click",()=>{
    
})