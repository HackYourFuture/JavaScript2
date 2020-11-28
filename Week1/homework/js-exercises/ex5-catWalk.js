var catEl = document.getElementById("cat");
var newLeft = -270;
//catEl.style.left = "0px"
//var startTime = new Date().getTime();
var walkTheCat = function () {
  //var currTime = new Date().getTime();
  //var secondsElapsed = ((currTime - startTime) / 1000);
  //var newLeft = secondsElapsed * 500

  newLeft += 5;
  catEl.style.left = newLeft + "px"
  if (Math.abs(newLeft) >= 1200) {
    newLeft = -270;
  }
  // else if (newLeft = 465) {

  //   catEl.src = "https://tenor.com/StFI.gif";
  // };



  window.requestAnimationFrame(walkTheCat);
};
walkTheCat()