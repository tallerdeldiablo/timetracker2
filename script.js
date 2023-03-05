const clockDisplay = document.getElementById("clock-display");
const clockInButton = document.getElementById("clock-in");
const clockOutButton = document.getElementById("clock-out");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");

let startTime = null;
let endTime = null;
let elapsedTime = 0;
let timerInterval = null;

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    clockDisplay.innerText = formatTime(elapsedTime);
  }, 1000);
}

function stopTimer() {
  endTime = Date.now();
  clearInterval(timerInterval);
  elapsedTime = endTime - startTime;
  clockDisplay.innerText = formatTime(elapsedTime);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resumeTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    clockDisplay.innerText = formatTime(elapsedTime);
  }, 1000);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600000).toString().padStart(2, "0");
