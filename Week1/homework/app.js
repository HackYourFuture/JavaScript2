const bookTitles2 = [
    // Replace with your own book titles
    "Court of the Stone Children",
    "Alice's Adventures in Wonderland",
    "Through the Looking Glass",
    'What Am I?',
    'The City of Gold & Lead',
    'The Pool of Fire',
    'The White Mountains',
    'The Dark is Rising',
    'Charlie and the Chocolate Factory',
    'James and the Giant Peach'
];

const bookTitles = {
    0: {
        title: "Court of the Stone Children",
        language: "English",
        author: "Cameron, Eleanor",

    },
    1: {
        title: "Alice's Adventures in Wonderland",
        language: "English",
        author: "Carroll, Lewis",

    },
    2: {
        title: "Through the Looking Glass",
        language: "English",
        author: "Carroll, Lewis",

    },
    3: {
        title: "What Am I?",
        language: "English",
        author: "Charles, N. N.",

    },
    4: {
        title: "The City of Gold & Lead",
        language: "English",
        author: "Christopher, John",

    },
    5: {
        title: "The Pool of Fire",
        language: "English",
        author: "Christopher, John",

    },
    6: {
        title: "The White Mountains",
        language: "English",
        author: "Christopher, John",

    },
    7: {
        title: "The Dark is Rising",
        language: "English",
        author: "Cooper, Susan",

    },
    8: {
        title: "Charlie and the Chocolate Factory",
        language: "English",
        author: "Dahl, Roald",

    },
    9: {
        title: "James and the Giant Peach",
        language: "English",
        author: "Dahl, Roald",

    }
};


// Replace with your own code
function bookInfo() {
    var list = document.createElement("section");
    list.setAttribute("id", "bookLists");
    var ul = document.createElement("ul");
    document.body.appendChild(list);
    list.appendChild(ul);
    for (var i = 0; i < Object.keys(bookTitles).length; i++) {
        var li = document.createElement("li");
        var h1 = document.createElement("h1");
        h1.setAttribute("class", "heading");
        var p = document.createElement("p");
        p.setAttribute("class", "language");

        var p2 = document.createElement("p");
        p2.setAttribute("class", "author");

        var img = document.createElement("img");
        img.setAttribute("class", "imglist");




        ul.appendChild(li);
        li.appendChild(h1);
        li.appendChild(img);
        img.setAttribute("src", "booksimg/" + [i] + ".jpg");
        li.appendChild(p);
        li.appendChild(p2);


        var img = "|images: " + bookTitles[i];
        h1.innerHTML += bookTitles[i].title;

        p.innerHTML += bookTitles[i].language;
        p2.innerHTML += bookTitles[i].author;

    }
}
bookInfo();