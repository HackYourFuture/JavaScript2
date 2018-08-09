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
    Court_of_the_Stone_Children: {
        title: "Court of the Stone Children",
        language: "English",
        author: "Cameron, Eleanor",

    },
    Alices_Adventures_in_Wonderland: {
        title: "Alice's Adventures in Wonderland",
        language: "English",
        author: "Carroll, Lewis",

    },
    Through_the_Looking_Glass: {
        title: "Through the Looking Glass",
        language: "English",
        author: "Carroll, Lewis",

    },
    What_Am_I: {
        title: "What Am I?",
        language: "English",
        author: "Charles, N. N.",

    },
    The_City_of_Gold_and_Lead: {
        title: "The City of Gold & Lead",
        language: "English",
        author: "Christopher, John",

    },
    The_Pool_of_Fire: {
        title: "The Pool of Fire",
        language: "English",
        author: "Christopher, John",

    },
    The_White_Mountains: {
        title: "The White Mountains",
        language: "English",
        author: "Christopher, John",

    },
    The_Dark_is_Rising: {
        title: "The Dark is Rising",
        language: "English",
        author: "Cooper, Susan",

    },
    Charlie_and_the_Chocolate_Factory: {
        title: "Charlie and the Chocolate Factory",
        language: "English",
        author: "Dahl, Roald",

    },
    James_and_the_Giant_Peach: {
        title: "James and the Giant Peach",
        language: "English",
        author: "Dahl, Roald",

    }
};


// Replace with your own code
function bookInfo() {
    const list = document.createElement("section");
    list.setAttribute("id", "bookLists");
    const ul = document.createElement("ul");
    document.body.appendChild(list);
    list.appendChild(ul);
    for (let i = 0; i < Object.keys(bookTitles).length; i++) {
        const myObj = Object.keys(bookTitles);
        const bookName = myObj[i];
        const bookDetails = bookTitles[bookName];

        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        h1.setAttribute("class", "heading");
        const p = document.createElement("p");
        p.setAttribute("class", "language");

        const p2 = document.createElement("p");
        p2.setAttribute("class", "author");

        const img = document.createElement("img");
        img.setAttribute("class", "imglist");


        ul.appendChild(li);
        li.appendChild(h1);
        li.appendChild(img);
        img.setAttribute("src", "booksimg/" + [i] + ".jpg");
        li.appendChild(p);
        li.appendChild(p2);


        // const img = "|images: " + bookTitles[i];

        h1.innerHTML += bookDetails['title'];
        p.innerHTML += bookDetails['language'];
        p2.innerHTML += bookDetails['author'];

    }

}
bookInfo();