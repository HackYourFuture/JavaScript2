/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
const pomodoroTimer = document.querySelector('#pomodoro-timer');
const startButton = document.querySelector('#pomodoro-start');
const pauseButton = document.querySelector('#pomodoro-pause');
const stopButton = document.querySelector('#pomodoro-stop');
const timeSessionDisplay = document.querySelector("#time-session-display");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");

let isClockRunning = false;
let isPause = false;
// in seconds = 25 mins 
// set the default value to 25 mins
let workSessionDuration = 1500;
let currentTimeLeftInSession = 1500 ;
//show the timer 
timeSessionDisplay.innerHTML = currentTimeLeftInSession / 60;

//increase the timer when it's stoped or paused
plus.addEventListener("click", () =>{
  if (!isClockRunning && !isPause){
    addMinus();
    timeSessionDisplay.innerHTML = currentTimeLeftInSession / 60;
    workSessionDuration = currentTimeLeftInSession;
    displayCurrentTimeLeftInSession();
  }
})
//decrease the timer when it's stoped or paused
minus.addEventListener("click", ()=>{
  if(!isClockRunning && !isPause){
    addMinus("minus");
  timeSessionDisplay.innerHTML = currentTimeLeftInSession / 60;
  displayCurrentTimeLeftInSession();
  }
})
let addMinus = (flag) =>{
  if(flag === "minus"){
    let result = currentTimeLeftInSession /60 ;
    result--;
    currentTimeLeftInSession = result * 60;
  }else{
    let result = currentTimeLeftInSession /60 ;
    result++;
    currentTimeLeftInSession = result * 60;
  }
}

// pause
pauseButton.addEventListener('click', () => {
  toggleClock();
})

// stop
stopButton.addEventListener('click', () => {
  toggleClock(true);
})

const toggleClock = (reset) => {
  if (reset) {
    // stop the timer when reset is true
    stopClock();
    isPause = false
  } else {
    if (isClockRunning === true) {
      // pause the timer when the clock is running 
      isClockRunning = false;
      isPause = true;
      clearInterval(clockTimer);
      pauseButton.innerHTML = "Start";
    } else {
      // start the timer 
      isClockRunning = true;
      clockTimer = setInterval(() => {
        currentTimeLeftInSession--;
        displayCurrentTimeLeftInSession();
      }, 1000);
      pauseButton.innerHTML = "Pause";
    }
  }
}

// To display the timer 
const displayCurrentTimeLeftInSession = () => {
  const secondsLeft = currentTimeLeftInSession;
  let result = '';
  // To get seconds
  const seconds = secondsLeft % 60;
  // To get the minutes
  const minutes = parseInt(secondsLeft / 60) % 60;
  // To get the hours
  let hours = parseInt(secondsLeft / 3600);
  // add leading zeroes if it's less than 10
  function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time
  }
  // add hours once the minutes bigger than 60
  if (hours > 0) result += `${hours}:`
  result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
  pomodoroTimer.innerText = result.toString();
}

const stopClock = () => {
  // reset the timer 
  clearInterval(clockTimer);
  isClockRunning = false;
  // reset the time left in the session to its original state
  currentTimeLeftInSession = workSessionDuration;
  // update the timer displayed
  displayCurrentTimeLeftInSession();
}


