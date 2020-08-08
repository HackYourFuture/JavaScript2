//  Create a variable to store the img.
const img = document.querySelector('img');
//  Create a variable to store a reference to the img.
const referenceOfImage = img.src;
//  Change the style of the img
let imgLeft = 0;
img.style.left = `${imgLeft}px`;

//  Create a  function called catWalk()

// ----------------------------------------------------------------------------------------------
const catWalk = function () {
  if (img.offsetLeft < window.innerWidth - img.width) {
    //  run firstWalkCat() function to  walk the cat.
    imgLeft += 10;
    img.style.left = `${imgLeft}px`;
  }
  // -----------------------------------
  if (img.offsetLeft > (window.innerWidth - img.width) / 2) {
    // stop run firstWalkCat() function to stop walking.
    window.clearInterval(firstWalkCat);
    // change to the second gif.
    img.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';
    // change back to the first gif after five seconds.
    window.setTimeout(function () {
      img.src = referenceOfImage;
      // run secondWalkCat() function to walk the cat again.
      secondWalkCatID = setInterval(secondWalkCat, 50);
    }, 5000);
  }
};
// ----------------------------------------------------------------------------------------------
let firstWalkCat;
if (img.style.left == '0px') {
  // if the Left of image is "0px" run the catWalk().
  firstWalkCat = window.setInterval(catWalk, 50);
}

const secondWalkCat = function () {
  // to walk the cat again.
  imgLeft += 10;
  img.style.left = `${imgLeft}px`;

  if (img.offsetLeft > window.innerWidth - img.width) {
    window.clearInterval(secondWalkCatID);
    // the cat comes back to the most window left.
    GoCatBack();
    // if the Left of image is "0px" run the catWalk().
    if (img.style.left == '0px') {
      firstWalkCat = window.setInterval(catWalk, 50);
    }
  }
};
// the cat comes back to the most window left.
const GoCatBack = function () {
  imgLeft = 0;
  img.style.left = `${imgLeft}px`;
};
