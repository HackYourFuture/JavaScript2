'use strict';
{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'desert_solitaire',
    'geek_love',
    'gilead',
    'disgrace',
    'infinite_jest',
    'lolita',
    'maus',
    'poems',
    'things_fall_apart'
  ];
  console.log(bookTitles);

  //2.3 

  /*  // hold this function  based on request 2.5 

  function createAndAppend(titles) {
    const ul = document.createElement("ul"),
      root = document.getElementById("root");
    root.appendChild(ul);

    for (let i = 0; i < titles.length; i++) {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.setAttribute('id', titles[i]);
    }
  }

  createAndAppend(bookTitles);

  */

  // 2.4  
  const booksDetails = {
    'harry_potter_chamber_secrets': { title: 'harry potter chamber secrets', language: "English", author: "J. K. Rowling" },
    'desert_solitaire': { title: 'desert solitaire', language: "English", author: "Edward Abbey" },
    'geek_love': { title: 'geek love', language: "English", author: "Katherine Dunn" },
    'gilead': { title: 'gilead', language: "English", author: "Marilynne Robinson" },
    'disgrace': { title: 'disgrace', language: "English", author: "J. M. Coetzee" },
    'infinite_jest': { title: 'infinite jest', language: "English", author: "David Foster Wallace" },
    'lolita': { title: 'lolita', language: "English", author: "Vladimir Nabokov" },
    'maus': { title: 'maus', language: "English", author: "Art Spiegelman" },
    'poems': { title: 'poems', language: "English", author: "Elizabeth Bishop" },
    'things_fall_apart': { title: 'things fall apart', language: "English", author: "Chinua Achebe" }
  };

  // just check
  console.log(booksDetails);
  for (const key in booksDetails) {
    console.log(key);
    const x = booksDetails[key];
    console.log(x);

    for (const prop in x) {
      console.log(prop + " : " + x[prop]);
    }
  }

  // 2.5

  function createAndAppend(details) {
    const h1 = document.createElement("h1"),
      ul = document.createElement("ul"),
      root = document.getElementById("root");
    h1.innerHTML = "10 Books to read before you die";
    root.appendChild(h1);
    root.appendChild(ul);

    for (const key in details) {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.setAttribute('id', key);
      const obj = details[key];
      const h3 = document.createElement('h3');
      h3.innerHTML = obj.title;
      li.appendChild(h3);
      const childUl = document.createElement("ul");
      li.appendChild(childUl);
      for (const key2 in obj) {
        const childLi = document.createElement("li");
        childLi.innerText = key2 + " : " + obj[key2];
        childUl.appendChild(childLi);
        key2 + ' : ' + obj[key2];
      }

    }
  }
  createAndAppend(booksDetails);

  // 2.6  in CSS file

  // 2.7 

  const booksCovers = {
    'harry_potter_chamber_secrets': 'images/Harry potter.jpeg',
    'desert_solitaire': 'images/desert solitaire.jpg',
    'geek_love': 'images/geek love.jpg',
    'gilead': 'images/gilead.jpg',
    'disgrace': 'images/disgrace.jpg',
    'infinite_jest': 'images/infinite jest.jpg',
    'lolita': 'images/lolita.jpg',
    'maus': 'images/maus.jpg',
    'poems': 'images/poems.jpg',
    'things_fall_apart': 'images/Things Fall Apart.jpg'
  };
  const arr = [];
  for (const j in booksCovers) {
    arr.push(j);
  }
  console.log(arr);

  function createImg(val) {
    for (const j in val) {
      const getId = document.getElementById(j);
      const img = document.createElement("img");
      img.setAttribute("src", booksCovers[j]);
      img.setAttribute("width", "300");
      img.setAttribute("height", "300");
      img.setAttribute("alt", "The Pulpit Rock");
      getId.appendChild(img);
    }
  }
  createImg(booksCovers);

}

