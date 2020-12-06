/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

'use strict';

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const minutesLeft = document.getElementById("mins-left");
const secondsLeft = document.getElementById("secs-left");
const minutesMore = document.getElementById("more");
const minutesLess = document.getElementById("less");
const setMinutes = document.getElementById("set-minutes");

// a callback function for the setInterval
const countDown = function () {
  if (secondsLeft.innerText <= 0) {
    secondsLeft.innerText = 60;
    minutesLeft.innerText--;
  };
  secondsLeft.innerText--;
  // in case both minutes and seconds are zero, then stop countdown
  if (secondsLeft.innerText <= 0 && minutesLeft.innerText <= 0) {
    clearInterval(window.interval);
    alert("hehe");
  };
};

const startTimer = function () {
  interval = setInterval(countDown, 1000);
  startButton.disabled = true;
  pauseButton.disabled = false;
  minutesMore.disabled = true;
  minutesLess.disabled = true;
};

const pauseTimer = function () {
  clearInterval(window.interval);
  pauseButton.disabled = true;
  startButton.disabled = false;
}

const resetTimer = function () {
  clearInterval(window.interval);
  secondsLeft.innerText = 00;
  minutesLeft.innerText = setMinutes.innerText;
  pauseButton.disabled = true;
  startButton.disabled = false;
  minutesMore.disabled = false;
  minutesLess.disabled = false;
}

const more = function () {
  setMinutes.innerText++;
  minutesLeft.innerText = setMinutes.innerText;
}

const less = function () {
  setMinutes.innerText--;
  if (setMinutes.innerText <= 1) {
    setMinutes.innerText = 1;
  }
  minutesLeft.innerText = setMinutes.innerText;
}