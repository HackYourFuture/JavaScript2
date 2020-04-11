/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/

var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';

function catWalk() {
    var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft + 10 + 'px';
    if (currentLeft > window.innerWidth - img.width) {
        img.style.left = '0px';
    }
    let middleScreen = window.innerWidth / 2 - img.width / 2;
    if (currentLeft >= middleScreen) {
        img.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
        setTimeout(function() {
            img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';

        }, 1000);

    }
}
window.setInterval(catWalk, 50);