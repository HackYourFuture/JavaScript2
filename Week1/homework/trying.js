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


for (const key of Object.keys(bookShelf)) {
    console.log(bookShelf[key]);
}

console.log(Object.keys(bookShelf)[0]);

function size(obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

console.log(size(bookShelf));

console.log(bookShelf[Object.keys(bookShelf)[0]].author);

var obje = {
    "a": { 123: 1233, 234: 2344, 345: 3455 },
    "b": { 321: 3211, 432: 4322, 543: 5433 }
}

console.log(Object.keys(obje[Object.keys(obje)[0]])[1] + ": " + Object.values(obje[Object.keys(obje)[0]])[1]);
console.log(Object.keys(obje)[0]);

//Object.keys(myObj.Object.keys(myObj)[a])[k]/* + ": " + Object.values(myObj.Object.keys(myObj)[a])[k]*/;
