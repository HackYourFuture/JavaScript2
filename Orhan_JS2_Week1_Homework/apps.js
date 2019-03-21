'use strict';

{
  /*cSpell:disable*/
  const bookTitles = [
    "puslu_kitalar_atlasi",
    "sherlock_holmes_adventures",
    "lord_of_the_rings",
    "the_fall_of_paris",
    "chess_story",
    "phantastische_nacht",
    "kuyucakli_yusuf",
    "kurk_mantolu_madonna",
    "one_hundred_years_of_solitude",
    "ports_of_call"
  ];

  const bookInfo = {
    puslu_kitalar_atlasi: {
      title: "Puslu Kitalar Atlasi",
      language: "Turkish",
      author: "Ihsan Oktay Anar"
    },
    sherlock_holmes_adventures: {
      title: "The Adventures of Sherlock Holmes",
      language: "English",
      author: "Arthur Conan Doyle"
    },
    lord_of_the_rings: {
      title: "The Lord of The Rings",
      language: "English",
      author: "J.R.R. Tolkien"
    },
    the_fall_of_paris: {
      title: "The Fall of Paris",
      language: "French",
      author: "Ilya Ehrenburg"
    },
    chess_story: {
      title: "Chess Story",
      language: "German",
      author: "Stefan Zweig"
    },
    phantastische_nacht: {
      title: "Phantastische Nacht",
      language: "German",
      author: "Stefan Zweig"
    },
    kuyucakli_yusuf: {
      title: "Kuyucakli Yusuf",
      language: "Turkish",
      author: "Sabahattin Ali"
    },
    kurk_mantolu_madonna: {
      title: "Kurk Mantolu Madonna",
      language: "Turkish",
      author: "Sabahattin Ali"
    },
    one_hundred_years_of_solitude: {
      title: "One Hundred Years of Solitude",
      language: "Spanish",
      author: "Gabriel Garcia Marquez"
    },
    ports_of_call: {
      title: "Ports of Call",
      language: "French",
      author: "Amin Maalouf"
    },
  };

  const bookCovers = {
    puslu_kitalar_atlasi: "./images/puslu.jpg",
    sherlock_holmes_adventures: "./images/sherlock.jpg",
    lord_of_the_rings: "./images/lord.jpg",
    the_fall_of_paris: "./images/fall.jpg",
    chess_story: "./images/chess.jpg",
    phantastische_nacht: "./images/phantastische.jpg",
    kuyucakli_yusuf: "./images/kuyucakli.jpg",
    kurk_mantolu_madonna: "./images/kurk.jpg",
    one_hundred_years_of_solitude: "./images/one.jpg",
    ports_of_call: "./images/ports.jpg",
  };

  /*cSpell:enable*/

  // This part is for assignment 1.3
  // function createList() {
  //   const root = document.getElementById("root");
  //   const ul = document.createElement("ul");
  //   root.appendChild(ul);
  //   for (let i = 0; i < bookTitles.length; i++) {
  //     const li = document.createElement("li");
  //     li.innerText = bookTitles[i];
  //     ul.appendChild(li);
  //   }
  // }

  function createBookList() {
    const root = document.getElementById("root");
    const ul = document.createElement("ul");
    root.appendChild(ul);
    const values = Object.keys(bookInfo);

    for (let i = 0; i < values.length; i++) {
      const li = document.createElement("li");
      li.setAttribute("id", values[i]);
      ul.appendChild(li);
      const h1 = document.createElement("h1");
      h1.innerText = bookInfo[values[i]].title;
      li.appendChild(h1);

      const h2 = document.createElement("h2");
      h2.innerText = bookInfo[values[i]].author;
      li.appendChild(h2);

      const h3 = document.createElement("h3");
      h3.innerText = bookInfo[values[i]].language;
      li.appendChild(h3);
    }
  }

  function addImage() {
    const values = Object.keys(bookCovers);
    for (let i = 0; i < values.length; i++) {
      const imageElem = document.createElement("img");
      imageElem.setAttribute("src", bookCovers[values[i]]);
      const liNewId = document.getElementById(values[i]);
      liNewId.appendChild(imageElem);

      console.log(imageElem);
      console.log(liNewId);
    }
  }

  // This function is for assignment 1.3
  // createList();

  createBookList();
  addImage();
}
