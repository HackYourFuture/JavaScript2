'use strict';
{
  const bookTitles = [
    "crime_and_punisment",
    "zorba",
    "siddhartha",
    "white_fang",
    "poor_folk",
    "white_nights",
    "sorrows_yougn_werther",
    "sweet_orange_tree",
    "what_men_live_by",
    "the_alchemist"
  ];

  function printBookTitles(placeId, myArr) {
    let div = document.getElementById(placeId);

    let ul = document.createElement('ul');

    div.appendChild(ul);

    for (let k = 0; k < myArr.length; k++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML = myArr[k];
    }
  }

  printBookTitles("div1", bookTitles);

  const bookShelf = {
    "crime_and_punisment": { title: "Crime and Punisment", author: "Dostoyevski", language: "Russian" },
    "zorba": { title: "Zorba", author: "Nikos Kazancakis", language: "Greek" },
    "siddhartha": { title: "Siddhartha", author: "Hermann Hesse", language: "German" },
    "white_fang": { title: "White Fang", author: "Jack London", language: "English" },
    "poor_folk": { title: "Poor Folk", author: "Dostoyevski", language: "Russian" },
    "white_nights": { title: "White Nights", author: "Dostoyevski", language: "Russian" },
    "sorrows_yougn_werther": { title: "The Sorrows of Young Werther", author: "Goethe", language: "German" },
    "sweet_orange_tree": { title: "My Sweet Orange Tree", author: "Vasconcelos", language: "Portuguese" },
    "what_men_live_by": { title: "What Men Live By?", author: "Tolstoy", language: "Russian" },
    "the_alchemist": { title: "The Alchemist", author: "Paulo Coelho", language: "Portuguese" }
  };



  function printBookDetails(placeId, myObj) {
    let div = document.getElementById(placeId);

    function size(obj) {
      let size = 0, key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };

    for (let a = 0; a < size(myObj); a++) {
      let h2 = document.createElement("h2");

      div.appendChild(h2);

      h2.innerHTML = myObj[Object.keys(myObj)[a]].title;

      h2.setAttribute('id', Object.keys(myObj)[a]);

      let ul = document.createElement('ul');

      div.appendChild(ul);

      for (let k = 1; k < 3; k++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = (Object.keys(myObj[Object.keys(myObj)[a]])[k] + ": " + Object.values(myObj[Object.keys(myObj)[a]])[k]);
      }
    }
  }

  printBookDetails("div2", bookShelf);

}
