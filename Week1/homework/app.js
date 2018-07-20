'use strict';
{
  /*
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
  */

  const bookShelf = {
    "crime_and_punisment": { title: "Crime and Punisment", author: "Dostoyevski", language: "Russian", publisher: "Oxford", "first edition": 1895 },
    "zorba": { title: "Zorba", author: "Nikos Kazancakis", language: "Greek", publisher: "Can", "first edition": 1955 },
    "siddhartha": { title: "Siddhartha", author: "Hermann Hesse", language: "German", publisher: "Inkilap", "first edition": 1895 },
    "white_fang": { title: "White Fang", author: "Jack London", language: "English", publisher: "Isbankasi", "first edition": 1905 },
    "poor_folk": { title: "Poor Folk", author: "Dostoyevski", language: "Russian", publisher: "YKK", "first edition": 1867 },
    "white_nights": { title: "White Nights", author: "Dostoyevski", language: "Russian", publisher: "Kobo Co", "first edition": 1854 },
    "sorrows_young_werther": { title: "The Sorrows of Young Werther", author: "Goethe", language: "German", publisher: "Bordo&Siyah", "first edition": 1882 },
    "sweet_orange_tree": { title: "My Sweet Orange Tree", author: "Vasconcelos", language: "Portuguese", publisher: "Can Publisher", "first edition": 1986 },
    "what_men_live_by": { title: "What Men Live By?", author: "Tolstoy", language: "Russian", publisher: "Oxford", "first edition": 1878 },
    "the_alchemist": { title: "The Alchemist", author: "Paulo Coelho", language: "Portuguese", publisher: "Metis", "first edition": 2005 }
  };

  const bookCover = {
    "crime_and_punisment": "https://is1-ssl.mzstatic.com/image/thumb/Publication/v4/c7/5f/93/c75f93e2-9f03-82a0-3970-332d46ce3b26/source/1200x630bb.jpg",
    "zorba": "https://images-na.ssl-images-amazon.com/images/I/81znZ1KoT6L._SY445_.jpg",
    "siddhartha": "https://images-na.ssl-images-amazon.com/images/I/51giy3zae6L._SX329_BO1,204,203,200_.jpg",
    "white_fang": "https://images-na.ssl-images-amazon.com/images/I/41E5RNrSKhL._SX331_BO1,204,203,200_.jpg",
    "poor_folk": "https://images-na.ssl-images-amazon.com/images/I/51iPBDEi1SL.jpg",
    "white_nights": "https://images-na.ssl-images-amazon.com/images/I/51Rzum6TgBL._SX331_BO1,204,203,200_.jpg",
    "sorrows_young_werther": "https://images-na.ssl-images-amazon.com/images/I/51fBHrUsMNL.jpg",
    "sweet_orange_tree": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/My_Sweet_Orange_Tree_2012_poster.jpg/220px-My_Sweet_Orange_Tree_2012_poster.jpg",
    "what_men_live_by": "https://images-na.ssl-images-amazon.com/images/I/412JkTATtBL._SX331_BO1,204,203,200_.jpg",
    "the_alchemist": "https://images.gr-assets.com/books/1483412266l/865.jpg"
  };



  function printBookDetails(placeId, myObj, cover) {
    let div = document.getElementById(placeId);

    function size(obj) {
      let size = 0, key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    };

    for (let a = 0; a < size(myObj); a++) {
      let myDiv = document.createElement("div");

      div.appendChild(myDiv);

      myDiv.setAttribute("class", "myDiv");

      let h2 = document.createElement("h2");

      myDiv.appendChild(h2);

      h2.innerHTML = myObj[Object.keys(myObj)[a]].title

      h2.setAttribute('id', Object.keys(myObj)[a]);

      let ul = document.createElement('ul');

      myDiv.appendChild(ul);

      ul.setAttribute("id", Object.keys(myObj)[a]);

      let img = document.createElement("img");

      myDiv.appendChild(img);

      img.setAttribute("src", Object.values(cover)[a]);

      img.setAttribute("alt", myObj[Object.keys(myObj)[a]].title);

      for (let k = 1; k < 5; k++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = (Object.keys(myObj[Object.keys(myObj)[a]])[k] + ": " + Object.values(myObj[Object.keys(myObj)[a]])[k]);
      };
    }
  }

  printBookDetails("div2", bookShelf, bookCover);

}
