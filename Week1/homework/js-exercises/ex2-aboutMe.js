document.body.style.fontFamily = "Arial, sans-serif";


const myImage = document.createElement("img");
myImage.src = "decent-pic.jpeg";
document.body.appendChild(myImage);


const lis = document.querySelectorAll("ul > li")
for (let i = 0; i < 3; i++) {
  const li = lis[i];
  li.classList.add("list-item");
}


// i cant understand why the div bellow didnt work :(
// for (i = 0; i < 3; i++) {
// document.querySelector("li:nth-child(i)").classList.add("list-item");
// }
