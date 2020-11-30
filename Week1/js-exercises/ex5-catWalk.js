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

// To avoid horizontal scroll bar when cat image goes beyond screen width
document.body.style.overflow = 'hidden';
// Selecting the cat image HTML element
const catImg = document.querySelector('img');
// Storing the original cat image source
const catImgSrcOriginal = catImg.src;
// Storing the dancing cat image source
const catImgSrcDancing = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

// Cat walk function
const catWalk = () => {
    // Finding the cat image position and converting from pixels to a number
    const catCurrPos = parseFloat(catImg.style.left);
    // Finding the center of screen and rounding off to nearest 10
    const middleScreen = Math.ceil((window.innerWidth/2) / 10) * 10;
    // Finding the half width of the cat image
    const middleCatPos = Math.ceil((catImg.width/2) / 10) * 10;
    // Moving the cat image to right by 10 pixels
    catImg.style.left = (catCurrPos + 10).toString().concat('px');
    
    // If the cat images reaches the end of the screen width then it start again from left of the screen
    if(catCurrPos > window.innerWidth) {
        catImg.style.left = '0px';
    }

    // If cat images is the center of the screen then this code runs
    if((catCurrPos + middleCatPos) === middleScreen) {
        // The catwalk interval function stops
        clearInterval(interval);
        // Changing the cat image source to dancing cat image
        catImg.src = catImgSrcDancing;
        // This function runs after 5 seconds
        setTimeout(function() {
            // Changing the dancing cat image source to original cat image
            catImg.src = catImgSrcOriginal;
            // Moving the cat image 10 pixel more to the right
            catImg.style.left = (catCurrPos + 10).toString().concat('px');
            // Starting the catwalk interval function again
            interval = setInterval(catWalk, 50);
        }, 5000);
    }
}

// Setting the cat image position to left most of the screen in the beginning
catImg.style.left = '0px';

// Calling the catwalk interval function first time (will be called every 50 milliseconds)
let interval = setInterval(catWalk, 50);