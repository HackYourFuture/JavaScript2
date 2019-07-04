{
  const addHeading = () => {    
    const heading = document.createElement('h2');             // CREATE a new heading element
    heading.innerText = 'Hello Class 22';                   // CHANGE innerText to element
    console.log(heading);                                 // LOG image element
    heading.style.color = 'red';                        // CHANGE style of heading color to Red
    console.log(heading.style);
    const main = document.getElementById('main');     // FIND main element where we need to add heading
    console.log(main);
    main.appendChild(heading);                       // ADD heading to main element
    // main.removeChild(heading);                   // REMOVE heading from main element
  };

  const addImage = () => {
    const myimage = document.createElement('img')              // CREATE a new img element
    myimage.setAttribute('src', IMG_SRC);                     // CHANGE src and alt attribute of img element
    myimage.setAttribute('alt', 'Hack Your Future');
    const main = document.getElementById('main');          // FIND main element where we need to add heading
    main.appendChild(myimage);                           // APPEND heading to main element
    //main.removeChild(myimage);                        // REMOVE heading from main element
    console.log(myimage);                              // Log image elemnent
                             
  };

  const main = () => {
    addHeading();
    addImage();
  };

  const IMG_SRC = 'https://media.licdn.com/dms/image/C4E0BAQE2ExOXfXGutA/company-logo_200_200/0?e=2159024400&v=beta&t=eAeVuAIMkoOHhcpiyJTegYSNJIai9vtQYl5CW9UJ9u8';

window.onload = () => main();
}