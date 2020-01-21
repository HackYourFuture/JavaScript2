
let image;




window.onload = () => {
    image = document.querySelector("img");

    let distance = 0;
    let screenWidth = window.innerWidth;
    let body = document.querySelector("body")



    function catWalk() {
        image.style.left = `${distance}px`;
        distance += 10;
        console.log(image);
        console.log(distance);





        if (distance > screenWidth) {
            distance = 0;
        }


    }



    //catWalk();

    //catDance();


    //setInterval(catWalk, 50);


}

