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
}
