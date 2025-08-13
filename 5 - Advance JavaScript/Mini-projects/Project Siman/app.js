let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".pad");

let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btncolor = ["red", "green", "yellow", "blue"];
let score = 0;
h2.textContent = `Highest Score:- ${score}`;

let startbtn = document.querySelector(".center");
startbtn.addEventListener("click", function () {
    startbtn.textContent = "Simon";
    if (started == false) {
        started = true;
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h3.textContent = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * 3);
    let randColor = btncolor[randIndex];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnflash(randbtn);
}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
}

function checkAns(indx) {
    if (userSeq[indx] === gameSeq[indx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
            if (score <= level) {
                h2.textContent = `Highest Score:- ${level}`;
            }
        }
    } else {
        h3.innerHTML = `Game Over! <b> Your score = ${level - 1} </b>
        <br> Press start new game to play.`;

        reset();
    }
}

function btnPress() {
    let btn = this;
    btnflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    startbtn.textContent = "Start";
}
