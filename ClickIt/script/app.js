const btn_start = document.querySelector("#btn_start"),
    screens = document.querySelectorAll(".screen"),
    timeList = document.querySelector("#time_list"),
    difficultyList = document.querySelector("#difficulty_list"),
    board = document.querySelector("#board"),
    countdownSpan = document.querySelector("#time"),
    hitsSpan = document.querySelector("#hits"),
    missSpan = document.querySelector("#miss"),
    resultHits = document.querySelector("#resultHits"),
    resultMisses = document.querySelector("#resultMisses");

let time = 0, 
    unlimited = false,
    difficulty = 0,
    playing = false,
    hits = 0,
    misses = 0,
    interval;


btn_start.addEventListener("click", ()=>{
    screens[0].classList.add("up");
});

difficultyList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("btn_difficulty")){
        difficulty = parseInt(e.target.getAttribute("data-difficulty"));
        screens[1].classList.add("up")
    }
});

timeList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("btn_time")){
        time = parseInt(e.target.getAttribute("data-time"));
        unlimited = e.target.getAttribute("data-unlimited");
        screens[2].classList.add("up")
        startGame();
    }
});

board.addEventListener("click", (e)=>{
    if(e.target.classList.contains("circle")){
        hits++;
        hitsSpan.innerHTML = hits;
        e.target.remove();
        createRandomCircles();
    }
    else{
        misses++;
        missSpan.innerHTML = misses;
    }
});

function startGame(){
    playing = true;
    interval = setInterval(decreaseTime, 1000);
    createRandomCircles();
}


function decreaseTime(){
    if(unlimited){
        setTime("∞")
        return;
    }
    if(time == 0){
        finishGame();
    }

    let currentTime = --time;
    let miliseconds = time * 1000;
    let minutes = Math.floor(miliseconds / (1000 * 60));
    let seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    setTime(`${minutes}:${seconds}`);
}

function finishGame(){
    screens[3].classList.add("up")
    resultHits.innerHTML = hits;
    resultMisses.innerHTML = misses;
}

function setTime(time){
    countdownSpan.innerHTML = time;
}

function createRandomCircles() {
    
    const circle = document.createElement("div");
    const size = getRandomSize(30, 100);
    const colors = ["#03DAC6", "#FF0266", "ccff00"];
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomSize(0, width - size);
    const y = getRandomSize(0, height - size);
    let color = Math.floor(Math.random() * 3);


    circle.classList.add("circle");
    circle.style.width = `${size}px`,
    circle.style.height = `${size}px`,
    circle.style.top = `${y}px`,
    circle.style.left = `${x}px`
    circle.style.background = `${colors[color]}`;

    board.append(circle);
    setDifficulty(circle);
    
    circle.addEventListener("animationend", ()=>{
        circle.remove();
        createRandomCircles();
    });
}

function setDifficulty(circle){
    if(difficulty == 0){
        circle.style.animation = `circle 3s linear forwards`
    }
    else if(difficulty == 1){
        circle.style.animation = `circle 2s linear forwards`
    }
    else if(difficulty == 2){
        circle.style.animation = `circle 1s linear forwards`
    }
}

function getRandomSize(min, max){
    return Math.round(Math.random() * (max - min) + min);
}
