'use strict';

const setTime = document.querySelector('.set');
const plusIcon = document.querySelector('.fa-plus');
const minIcon = document.querySelector('.fa-minus');
const start = document.querySelector('.fa-play');
const timeDisplay = document.querySelector('.timeDown');
const stop = document.querySelector('.fa-stop');

// registers what the time the user wants
let num = 0;
plusIcon.addEventListener('click', incNum);
minIcon.addEventListener('click', decNum);

let modal = document.querySelector('.modal');

function incNum() {
  if (num < 59) {
    num++
    setTime.innerText = num;
    document.getElementsByClassName('clockNum')[0].style.color = 'red';
  }
}
function decNum() {
  if (num > 0) {
    num--
    setTime.innerText = num;
    document.getElementsByClassName('clockNum')[0].style.color = 'red';
  }
}

//starts the timer after play
start.addEventListener('click', startTimer)
let counter = 0;
let interval;
function startTimer() {
  let timeFromUser = setTime.innerText;
  if (timeFromUser > 0) {
    interval = setInterval(timeIt, 100);
    function timeIt() {
      let timerTime = (timeFromUser * 60) - counter;
      if (timerTime >= 0) {
        counter++
        timeDisplay.innerText = convertToSeconds(timerTime);
      } else {
        clearInterval(interval);
        stopTimer();
        modal.style.display = 'inline-block';
      }
    }
    function convertToSeconds(s) {
      let min = Math.floor(s / 60);
      let min0 = min.toLocaleString(undefined, { minimumIntegerDigits: 2 });
      let seconds = s % 60;
      let seconds0 = seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 });
      return min0 + ':' + seconds0;
    }
    document.getElementsByClassName('clockNum')[1].style.color = 'red';
    disableBtns();

    if ((timeFromUser * 60) - counter === 0) {
      clearInterval(interval);
    }
  }
}
function disableBtns() {
  start.removeEventListener('click', startTimer, false);
  plusIcon.removeEventListener('click', incNum, false);
  minIcon.removeEventListener('click', decNum, false);
}
console.log(interval);

// Stop the timer when stop is clicked
stop.addEventListener('click', stopTimer)
function stopTimer() {
  //timeDisplay.innerText = '00:00';
  clearInterval(interval);
  plusIcon.addEventListener('click', incNum);
  minIcon.addEventListener('click', decNum);
  start.addEventListener('click', startTimer)
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
window.addEventListener('click', clearModal);