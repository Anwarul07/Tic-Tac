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
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector(".won").innerText = boxtext[e[0]].innerText + " won";
            isgameover = true;
            document.querySelector(".gif").style.opacity = 1
            music.play();
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            // document.querySelector(".line").style.width = "20vw";
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
            if (!isgameover) {
                document.getElementsByClassName("won")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//reset button

let button = document.getElementById("reset");
let reset = button.addEventListener("click", () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(e => {
        e.innerText = ''
    });
    turn = 'x';
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("won")[0].innerText = "Turn for " + turn;
    document.querySelector(".gif").style.opacity = 0
    music.pause();
})