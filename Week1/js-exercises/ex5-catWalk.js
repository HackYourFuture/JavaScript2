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
// Catch the img element and make sure it start from position 0 let 
let myImg = document.querySelector('img');
myImg.style.left = '0px';

// Creat variable to get the current time in milliseconds 
//let startTime = new Date().getTime();
//console.log(startTime);

let pos = 0;

let movement =setInterval( function (){
    // Store the moment that this function start every time  
    //let currentTime = new Date().getTime();
    //let secondsElapsed = ((currentTime - startTime)/1000); // every seconds = 1000 milliseconds
    //let newPosition = pos + 10;
    myImg.style.transform = "translateX(" + pos +"px)";
    pos+=10;
    //window.cancelAnimationFrame(movement);
        if( pos > screen.width ){   
            pos = -250; 
        }//else if(pos == screen.width/2){
           // myImg.src = 'tenor.gif';
           // clearInterval(movement);
        //}       
          //  clearInterval(movement);                                 
        // } //window.cancelAnimationFrame(catWalk)
     //   }else if (! newPosition == screen.width/2){
     //       window.cancelAnimationFrame(movement);
        //else if(pos == screen.width){
        //myImg.style.left = '0px';
        //window.cancelAnimationFrame(movement);
    //}    
},50);
//myImg.src= 'tenor.gif';
//console.log(myImg.src);
//console.log(screen.width);
//catWalk();
//setInterval(catWalk,50);




//myImg.style.left = '10px';
//window.requestAnimationFrame(catWalk);
//console.log(myImg.style.left);
//catWalk();
//catWalk();
 // if(newPosition <= ((screen.width/2)-250)){
    //  window.requestAnimationFrame(catWalk);
   // }
   // if(newPosition == ((screen.width/2)-200)){
   //     myImg.style.visibility = 'none';
   // }
    //window.requestAnimationFrame(catWalk);
    //console.log(window.innerWidth/2);
   // console.log(screen.width/2);
   // console.log(window.width)
