'use strict'

const catImage=document.querySelector('img')
const catWalking = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const catDancIng = 'https://media2.giphy.com/media/3mXcJgVhPxWZa/giphy.gif';


function catwalk() {

    let position= 0
    setInterval(frame,50)

    function frame() {

        // I asked a question for it on Stackover flow on how to get the variable to rerun. Inline for the save, equivallent to a lambda expression. 
        position = position > 1080 ? 0 : position;

        catImage.style.left=position+'px'
        
        if (position==540) {
            if (catImage.src !=catDancIng) {
                catImage.src=catDancIng;

                //Here too. Didn't know you could timeout multiple items at the same time. 
                setTimeout( () => {catImage.src=catWalking; position+=10},3000)
            }
            
        } else {
            catImage.style.left = position + 'px';
            position += 10;
        }

    }
}


catwalk()








// function catwalk() {

//     let position= 0
//     let walk=setInterval(frame,50)

//     function frame() {
//         if (position==1080) {
//             clearInterval(walk)
//         }else if (position =='540') {
//             catImage.src='https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'
//         }else{
//             position+=10
//             catImage.style.left=position+'px'
//         }
//     }

// }








// function catWalk() {

//     let maxWalk=catImage.style.left='1080px'

//     setInterval(function() {


//         // while (catImage.style.left<=maxWalk){
//         // }
//         for (let i=0) {

//         }
//         catImage.style.left=pixNum+'px'
        
//         while (catImage.style.left =='540px') {
//             catImage.src='https://tenor.com/StFI.gif'
//         }

//     }
//     , 50)
// }
// setInterval('catWalk()', 50)


// let movement= setInterval(function () {

        
// },50)
