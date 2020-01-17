/* Constants */


const breakColor = "#fbbdc0";
const startTitle = "Press Start";
const workTitle = "Pomodoro is working";
const breakTitle = "Pomodoro is on a break";
const startButton = "<span aria-label='Start timer'>Start</span>";
const stopButton = " <span id='stop' aria-label='Stop timer'>Stop</span>";
const clockId = document.querySelector("#clock");
const workTimeId =  document.querySelector("#wtime")
const breakTimeId = document.querySelector("#btime");
const h1Tag = document.getElementsByTagName("h1")[0];
const maxWork = 99;
const maxBreak = 99;

/* Variables */

let workTime = 25;
let breakTime = 5;
let sec;
let timer;

clearAll();
updateTime();

/* Functions */

function clearAll() {
  /* Reset timer back to starting state */
  timerState = "start";
  sec = 0;
  clearInterval(timer);
  h1Tag.innerHTML = startTitle;
  clockId.innerHTML = startButton;
  clockId.style.animation = "none";
  clockId.style.background = "none";
}

function clickTimer() {
  /* Event handler for onClick of timer */
  if (timerState == "start") {
    onWork();
  } else if (timerState == "working" || timerState == "break") {
    clearInterval(timer);
    clearAll();
  }
}

function clickBtn(interval, fn) {
  /* Event handler for interval change buttons */
  changeTime(interval, fn);
}

function changeTime(interval, fn) {
  if (fn == "dec") {
    if (interval == "wtime" && workTime > 1) {
      workTime--;
    } else if (interval == "btime" && breakTime > 1) {
      breakTime--;
    }
  } else if (fn == "inc") {
    if (interval == "wtime" && workTime < maxWork) {
      workTime++;
    } else if (interval == "btime" && breakTime < maxBreak) {
      breakTime++;
    }
  }
  updateTime();
}

function updateTime() {
  /* Update displayed intervals */
  workTimeId.innerHTML = workTime;
  breakTimeId.innerHTML = breakTime;
}

function toggleTimer() {
  /* toggles timer between working and break states */
  if (timerState == "working") {
    onBreak();
  } else {
    onWork();
  }
}

function onWork() {
  /* Runs countdown for work time */
  clearInterval(timer);
  sec = workTime * 60;
  timerState = "working";
  h1Tag.innerHTML = workTitle;
  timer = setInterval(function() {
    countdown();
  }, 1000);
}

function onBreak() {
  /* Runs countdown for break time */
  clearInterval(timer);
  sec = breakTime * 60;
  timerState = "break";
  h1Tag.innerHTML = breakTitle;
  timer = setInterval(function() {
    countdown();
  }, 1000);
}

function countdown() {
  /* Creates countdown, toggles timer state when timer reaches 0 */
  let html = "<span id='countdown'>" + toMin(sec) + "</span>";
  html += stopButton;
  clockId.innerHTML = html;
  sec--;
  if (sec < 10 && sec > -1) {
    clockId.style.animation =
      "clockbg 0.5s ease-in infinite alternate";
  } else {
    clockId.style.animation = "none";
    clockId.style.background = "none";
  }
  if (sec === -1) {
    toggleTimer();
  }
}

function toMin(sec) {
  /* Converts seconds to m:s */
  let m = Math.floor(sec / 60);
  let s = sec % 60;
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  return m + ":" + s;
}
