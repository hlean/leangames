const btn_start = document.querySelector("#btn_start"),
    screens = document.querySelectorAll(".screen"),
    timeList = document.querySelector("#time_list"),
    difficultyList = document.querySelector("#difficulty_list"),
    board = document.querySelector("#board"),
    countdownSpan = document.querySelector("#time"),
    hitsSpan = document.querySelector("#hits"),
    missSpan = document.querySelector("#miss");

let time = 0, 
    unlimited = false,
    difficulty = 0,
    playing = false,
    hits = 0,
    miss = 0,
    interval;


btn_start.addEventListener("click", ()=>{
    screens[0].classList.add("up");
});

difficultyList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("btn_difficulty")){
        time = parseInt(e.target.getAttribute("data-difficulty"));
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
        alert("00:00")
        return;
    }

    let currentTime = --time;
    let miliseconds = time * 1000;
    let minutes = Math.floor(miliseconds / (1000 * 60));
    let seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    setTime(`${minutes}:${seconds}`);
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


    circle.classList.add("circle");
    circle.style.width = `${size}px`,
    circle.style.height = `${size}px`,
    circle.style.top = `${y}px`,
    circle.style.left = `${x}px`
    

    let color = Math.floor(Math.random() * 3);
    circle.style.background = `${colors[color]}`;

    board.append(circle);
}

function getRandomSize(min, max){
    return Math.round(Math.random() * (max - min) + min);
}
