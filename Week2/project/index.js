/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const minutesLeft = document.getElementById('mins-left');
const secondsLeft = document.getElementById('secs-left');
const minutesMore = document.getElementById('more');
const minutesLess = document.getElementById('less');
const setMinutes = document.getElementById('set-minutes');
const notification = document.getElementById('notification');
const clock = document.getElementById('clock');
const timesUp = new Audio('./assets/times-up.mp3');

// by default the pause button doesn't appear
pauseButton.style.display = 'none';

// a callback function for the setInterval
const countDown = () => {
  if (secondsLeft.innerText <= 0) {
    secondsLeft.innerText = 60;
    minutesLeft.innerText--;
  }
  secondsLeft.innerText--;
  // in case both minutes and seconds are zero, then stop countdown and ...
  if (secondsLeft.innerText <= 0 && minutesLeft.innerText <= 0) {
    // 1) stops the countdown
    clearInterval(window.interval);
    // 2) plays the music
    timesUp.play();
    // 3) clock hides
    clock.style.display = 'none';
    // 4) notification of time's up appears
    notification.style.display = 'block'; // how to make the appearance smooth?
  }
};

const startTimer = () => {
  interval = setInterval(countDown, 1000);
  startButton.style.display = 'none';
  pauseButton.style.display = 'block';
  startButton.disabled = true;
  pauseButton.disabled = false;
  minutesMore.disabled = true;
  minutesLess.disabled = true;
};

const pauseTimer = () => {
  startButton.style.display = 'block';
  pauseButton.style.display = 'none';
  clearInterval(window.interval);
  pauseButton.disabled = true;
  startButton.disabled = false;
};

const resetTimer = () => {
  clearInterval(window.interval);
  secondsLeft.innerText = 0;
  minutesLeft.innerText = setMinutes.innerText;
  pauseButton.disabled = true;
  startButton.disabled = false;
  minutesMore.disabled = false;
  minutesLess.disabled = false;
  startButton.style.display = 'block';
  pauseButton.style.display = 'none';
  // invoking the function immediately
  (function stopAudio() {
    timesUp.pause();
    timesUp.currentTime = 0;
  })();
  // hiding the notification of "time's up" and bringing the clock back
  notification.style.display = 'none';
  clock.style.display = 'block';
};

const more = () => {
  setMinutes.innerText++;
  minutesLeft.innerText = setMinutes.innerText;
};

const less = () => {
  setMinutes.innerText--;
  if (setMinutes.innerText <= 1) {
    setMinutes.innerText = 1;
  }
  minutesLeft.innerText = setMinutes.innerText;
};
