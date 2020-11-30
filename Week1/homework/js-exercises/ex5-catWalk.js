let catEl = document.getElementById("cat");
const catSize = catEl.width

function startPoint() {
  catEl.style.left = "0px";
}
startPoint();

let walkTheCat = function () {
  let position = parseFloat(catEl.style.left);

  catEl.style.left = (position + 10).toString().concat("px");

  let screenMiddle = (window.innerWidth - catEl.width) / 2;

  if (position < screenMiddle - 10 || position > screenMiddle + 10) {
    catEl.style.left = (position + 10).toString().concat("px");
  } else {
    clearInterval(interval);
    catEl.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424"

    setTimeout(function () {
      catEl.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
      catEl.style.left = (position + 20).toString().concat("px");
      interval = setInterval(walkTheCat, 50)
    }, 5000);
  }

  if (position > window.innerWidth) {
    startPoint();
  }
}

let interval = setInterval(walkTheCat, 50);
