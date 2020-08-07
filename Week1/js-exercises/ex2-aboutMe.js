const body = document.querySelector('body');
body.style.fontFamily = "Arial, sans-serif";
const ul = body.children[1].children;
let myInfo = ['Sadeq', 'Pizza','Nieuwkoop']

for (let i = 0; i < ul.length; i++) {
  ul[i].setAttribute('class', "list-item");
  ul[i].children[0].innerText = myInfo[i];
}

const img = document.createElement('img');
img.style.width = '300px';
img.src = "https://babeltechreviews.com/wp-content/uploads/2018/07/rendition1.img_.jpg";
body.appendChild(img);