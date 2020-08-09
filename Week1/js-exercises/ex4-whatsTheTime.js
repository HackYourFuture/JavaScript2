 function displayCurrentTime() {
  let theDate = new Date();
  let theTime = `${theDate.getHours()}:${theDate.getMinutes()}:${theDate.getSeconds()}`
  console.log(theTime);
} 

window.addEventListener("load",setInterval(displayCurrentTime, 1000));