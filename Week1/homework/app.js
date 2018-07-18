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
    var div = document.getElementById(placeId);

    var ul = document.createElement('ul');

    div.appendChild(ul);

    for (let k = 0; k < myArr.length; k++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML = myArr[k];
    }
  }

  printBookTitles("div1", bookTitles);

  const bookShelf = {
    "crime_and_punisment": { author: "dostoyevski", language: "russian" },
    "zorba": { author: "nikos kazancakis", language: "greek" },
    "siddhartha": { author: "hermann hesse", language: "german" },
    "white_fang": { author: "jack london", language: "english" },
    "poor_folk": { author: "dostoyevski", language: "russian" },
    "white_nights": { author: "dostoyevski", language: "russian" },
    "sorrows_yougn_werther": { author: "goethe", language: "german" },
    "sweet_orange_tree": { author: "vasconcelos", language: "portuguese" },
    "what_men_live_by": { author: "tolstoy", language: "russian" },
    "the_alchemist": { author: "paulo coelho", language: "portuguese" }
  };
}
