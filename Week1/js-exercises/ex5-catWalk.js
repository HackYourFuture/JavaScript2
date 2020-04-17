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

// create a reference to the img
const img = document.getElementsByTagName('img')[0];
// set the img left style to zero
img.style.left = '0px';
// a variable that has the current left value of the img
let currentLeft;
// a boolean variable that indicates wheter the img is the walking one or the dancing one
let dancingCat = false;
// a function that moves the img 10 px left
function move(){
    img.style.left = currentLeft +10 +"px" ;
}

function catWalk() {
    currentLeft = parseInt(img.style.left);
    //check if the img out of the screen 
    if (currentLeft > (window.screen.width)) {
        img.style.left = 0;
    }
    // check if the img in the middle of the screen
    else if(currentLeft === window.screen.width/2 - img.width/2 +8){
        // change the img to the dancing one and set the dancingCat to true
        img.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
        dancingCat = true;
        move();
        // alter the img to the walking one after 5 seconds and set the dancingCat to false
        window.setTimeout(function() {
            img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
            dancingCat = false;
        }, 5000);
    }
    // keep moving if the flag flag(dancingCat) is false 
    else !dancingCat && move();
    
}

let intervalID = window.setInterval(catWalk, 50)
