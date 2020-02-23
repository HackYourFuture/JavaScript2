const hourSection = document.getElementById("hour");
const minSection = document.getElementById("min");
const secondSection = document.getElementById("second");

function time() {
  const now = new Date();
  const hour = now.getHours();
  if (hour < 10) {
    hourSection.innerText = '0' + hour
  } else {
    hourSection.innerText = hour
  }

  const min = now.getMinutes();
  minSection.innerText = min;
  const second = now.getSeconds();

  if (second < 10) {
    secondSection.innerText = '0' + second
  } else {
    secondSection.innerText = second
  }
}
setInterval(time, 1000);