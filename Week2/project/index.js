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

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const minutesLeft = document.getElementById('mins-left');
const secondsLeft = document.getElementById('secs-left');
const minutesMore = document.getElementById('more');
const minutesLess = document.getElementById('less');
const setMinutes = document.getElementById('set-minutes');
const notification = document.getElementById('notification');
const clock = document.getElementById('clock');
const timesUp = new Audio('./assets/times-up.mp3');

let interval;

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
    clearInterval(interval);
    // 2) plays the music
    timesUp.play();
    // 3) clock hides
    clock.style.display = 'none';
    // 4) notification of time's up appears
    notification.style.display = 'block'; // how to make the appearance smooth?
  }
};

startButton.addEventListener('click', () => {
  interval = setInterval(countDown, 1000);
  startButton.style.display = 'none';
  pauseButton.style.display = 'block';
  startButton.disabled = true;
  pauseButton.disabled = false;
  minutesMore.disabled = true;
  minutesLess.disabled = true;
});

pauseButton.addEventListener('click', () => {
  clearInterval(interval);
  startButton.style.display = 'block';
  pauseButton.style.display = 'none';
  pauseButton.disabled = true;
  startButton.disabled = false;
});

resetButton.addEventListener('click', () => {
  clearInterval(interval);
  secondsLeft.innerText = 0;
  minutesLeft.innerText = setMinutes.innerText;
  pauseButton.disabled = true;
  startButton.disabled = false;
  minutesMore.disabled = false;
  minutesLess.disabled = false;
  startButton.style.display = 'block';
  pauseButton.style.display = 'none';
  // reseting the timer completely;
  timesUp.pause();
  timesUp.currentTime = 0;
  // hiding the notification of "time's up" and bringing the clock back;
  notification.style.display = 'none';
  clock.style.display = 'block';
});

minutesMore.addEventListener('click', () => {
  setMinutes.innerText++;
  minutesLeft.innerText = setMinutes.innerText;
  // saving the time in localStorage for the next usage;
  localStorage.setItem('setMinutes', setMinutes.innerText);
});

minutesLess.addEventListener('click', () => {
  setMinutes.innerText--;
  // saving the time in localStorage for the next usage;
  localStorage.setItem('setMinutes', setMinutes.innerText);
  // the value of the minutes can't go less than one;
  if (setMinutes.innerText <= 1) {
    setMinutes.innerText = 1;
  }
  minutesLeft.innerText = setMinutes.innerText;
});

// On load getting the time from the local storage;
const setAndGetTimeFromStorage = () => {
  // if the key 'setMinutes' exists,
  if (localStorage.setMinutes) {
    // then set the minutes equal to the value of the local storage;
    setMinutes.innerText = localStorage.getItem('setMinutes');
  }
  // if the key 'setMinutes' doesn't exist in the local storage,
  if (!localStorage.setMinutes) {
    // then a pair of key-value is created in the local storage;
    localStorage.setItem('setMinutes', setMinutes.innerText);
  }
  // onload the time of the clock always equals to the 'setMinutes';
  minutesLeft.innerText = setMinutes.innerText;
};
window.addEventListener('load', setAndGetTimeFromStorage);
