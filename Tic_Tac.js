let over = new Audio("project folder/gameover.mp3");
let audioTurn = new Audio("project folder/ting.mp3");
let music = new Audio("project folder/music.mp3");
let isgameover = false;

let turn = "x";

// function change turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x"
}

// winning listener
const checkWin = () => {
    let boxtext = document.querySelector(".boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector(".won").innerText = boxtext[e[0]].innerText + "won";
            isgameover = true;
        }
    })

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


let button = document.getElementById("reset");
button.addEventListener("click", () => {

})