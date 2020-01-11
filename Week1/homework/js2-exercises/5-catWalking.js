const img = document.querySelector('img');
const srcCatWalking = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const srcCatDancIng = 'https://media2.giphy.com/media/3mXcJgVhPxWZa/giphy.gif';
let left = 0

function catWalk() {
    setInterval(frame, 50)
    function frame() {
      left = left > 1280 ? 0 : left;
      img.style.left = left + 'px';

      if (left === 640) {
          if (img.src != srcCatDancIng){
              setTimeout(() => { img.src = srcCatWalking; left += 10 }, 5000)
              img.src = srcCatDancIng;
          }
      }else {
          img.style.left;
          left += 10;
      }
    }
}
catWalk();