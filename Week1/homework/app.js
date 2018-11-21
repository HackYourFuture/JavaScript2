'use strict';

const bookTitles = [
   "harry_potter_philosophers_stone",
   "harry_potter_chamber_secrets",
   "harry_potter_prizoner_of_azkaban",
   "harry_potter_goblet_of_fire",
   "harry_potter_order_of_phoenix",
   "harry_potter_halfblood_prince",
   "harry_potter_deathly_hallows",
   "winds_of_winter",
   "hobbit",
   "master_and_margarita"
];


const myObj = {
   harry_potter_philosophers_stone: {
      title: "HP and the Philosophers Stone",
      language: "English",
      author: "JK Rowling"
   },
   harry_potter_chamber_secrets: {
      title: "HP and the Chamber of secrets",
      language: "English",
      author: "JK Rowling"
   },
   harry_potter_prizoner_of_azkaban: {
      title: "HP and the Prizoner of Azkaban",
      language: "English",
      author: "JK Rowling"
   },
   harry_potter_goblet_of_fire: {
      title: "HP and the Goblet of Fire",
      language: "English",
      author: "JK Rowling"
   },
   harry_potter_order_of_phoenix: {
      title: "HP and the Order of the Phoenix",
      language: "English",
      author: "JK Rowling"
   },
   harry_potter_halfblood_prince: {
      title: "HP and the Half-Blood Prince",
      language: "English",
      author: "JK Rowling"
   },
   harry_potter_deathly_hallows: {
      title: "HP and the Deathly Hallows",
      language: "English",
      author: "JK Rowling"
   },
   winds_of_winter: {
      title: "Winds of Winter",
      language: "English",
      author: "George Martin"
   },
   hobbit: {
      title: "The Hobbit, or There and Back Again",
      language: "English",
      author: "G.R.R. Tolkien"
   },
   master_and_margarita: {
      title: "Master and Margarita",
      language: "Russian",
      author: "Mikhail Bulgakov"
   }
}

//console.log(myObj);

const ulist = document.createElement("ul");
ulist.innerHTML = "Top 10 books";
const wrapper = document.getElementById("wrapper");
wrapper.appendChild(ulist);

//console.log(myObj);

function listItem(ulist) {
   // const ul = document.getElementsByTagName("ul");
   for (let i = 0; i < bookTitles.length; i++) {
      const li = document.createElement("li");
      li.setAttribute('id', 'list_item');
      ulist.appendChild(li);

      // li.innerHTML = bookTitles[i];
   }
}
listItem(ulist);

const bookImages = {
   harry_potter_philosophers_stone: "https://media.bloomsbury.com/rep/bj/9781526602381.jpeg",
   harry_potter_chamber_secrets: "https://media.bloomsbury.com/rep/bj/9781408855669.jpeg",
   harry_potter_prizoner_of_azkaban: "https://hpmedia.bloomsbury.com/rep/s/9780747560777_309834.jpeg",
   harry_potter_goblet_of_fire: "https://media.bloomsbury.com/rep/bj/9780747560821.jpg",
   harry_potter_order_of_phoenix: "https://hpmedia.bloomsbury.com/rep/s/9781408865439_309502.jpeg",
   harry_potter_halfblood_prince: "https://hpmedia.bloomsbury.com/rep/s/9780747581529_309975.jpeg",
   harry_potter_deathly_hallows: "https://images-na.ssl-images-amazon.com/images/I/51ALWqnWjkL._SX344_BO1,204,203,200_.jpg",
   winds_of_winter: "https://imagesvc.timeincapp.com/v3/fan/image?url=https://winteriscoming.net/wp-content/blogs.dir/385/files/2016/01/Winds-of-Winter-cover.jpg&c=sc&w=939&h=1427",
   hobbit: "https://cdn.pastemagazine.com/www/system/images/photo_albums/hobbit-book-covers/large/photo_5653_0-5.jpg?1384968217",
   master_and_margarita: "https://images.penguinrandomhouse.com/cover/9780143108276"
};


const keys = Object.keys(bookImages); //this var consist of array
const values = Object.values(bookImages);
const li = document.getElementById('list_item');

for (let i = 0; i < bookTitles.length; i++) {
   
   const image = document.createElement("img");
   const divImage = document.createElement('div');
   const id = bookTitles[i];
   const book = myObj[id];
   console.log(id);

   const header = document.createElement('h1')
   header.innerText = [book.title + ' Author: ' + book.author + ' Language: ' + book.language];
   li.appendChild(header);

   image.src = values[i];
   image.setAttribute('id', (keys[i]));
   divImage.appendChild(image);
   li.appendChild(divImage);
} 
