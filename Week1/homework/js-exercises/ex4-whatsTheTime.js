let currentTime = document.getElementById("current-time")
function displayCurrentTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let timeOutput = `${h}:${m}:${s}`;
  currentTime.innerHTML = timeOutput;
}
setInterval(displayCurrentTime, 1000);
