"# Stop-Watch" 
A basic functional stopwatch programme, with three main buttons start, pause and reset.

## Features
- Start: This start button starts adding time to our stopwatch once we have clicked the button using an Eventlistener. The timerDisplay is updated every 1000 ms.
- Pause: Once we click on the pause buttons we obviously pause the timer by clearing the interval and returning the current time by using Date.now
- Reset: The moment we no longer need the timer or want to reuse we are able to reset the button by clearing the interval and setting every "let variable" back to its original value.

Basic example of how this stop watch was implemented:

let timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;


startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(update, 1000)
    }
})
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime
        clearInterval(intervalId);
    }
})
resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    paused = true;
    intervalId;
    hrs = 0;
    mins = 0;
    secs = 0;
    timerDisplay.textContent = "00:00:00"
})

Javascript

function update(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    hrs = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);

    secs = addZeroes(secs);
    mins = addZeroes(mins);
    hrs = addZeroes(hrs);


    return timerDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function addZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}
