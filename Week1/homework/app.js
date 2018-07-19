const bookKeys = [
    "tales",
    "oliver_twist",
    "hamlet",
    "monte_cristo",
    "king_lir",
    "mysterious_island",
    "nora",
    "dorian_gray ",
    "intrigue ",
    "search_castaways,"
];


const bookTitles = {
    tales: { title: "Black cat", language: "english", author: "Edgar Po" },
    oliver_twist: { title: "Oliver Twist", language: "english", author: "Charles Dickens" },
    hamlet: { title: "Hamlet", language: "english", author: "Shakespeare" },
    monte_cristo: { title: "The Count of Monte Cristo", language: "french", author: "Alexandre Dumas" },
    king_lir: { title: "King Lir", language: "armenian", author: "Shakespeare" },
    mysterious_island: { title: "The Mysterious Island", language: "russian", author: "Jules Verne" },
    nora: { title: "Nora", language: "russian", author: "Henrik Ibsen" },
    dorian_gray: { title: "the Picture of Dorian Gray", language: "armenian", author: "Oscar Wilde" },
    intrigue: { title: "Intrigue and Love", language: "german", author: "Friedrich Schiller" },
    search_castaways: { title: "Search of the castaways", language: "french", author: "Jules Verne" }

};


function showBook() {
    for (var [k, v] of Object.entries(bookTitles)) {



        var list = document.createElement("LI");
        var header_1 = document.createElement("h1");
        var textnode = document.createTextNode(k + " -- " + v.title + " -- " + v.language + "  " + v.author);
        list.appendChild(textnode);
        list.appendChild(header_1);
        document.getElementById("myBookList").appendChild(list);
    }
};