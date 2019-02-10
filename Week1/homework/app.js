'use strict';

{

    // array with book titles:
    const bookTitles = [
        // Replace with your own book titles
        'the_age_of_the_five',
        'the-magicians_guild',
        'game_of_thrones',
        'shibumi',
        'pedro_paramo',
        'norse_mythology',
        'cosmos',
        'shantaram',
        'the_longest_ride',
        'ready_player_one'
    ];
    // Replace with your own code
    //console.log(bookTitles);


    // object with book titles and info about the books:
    let ourBookTitles = {
        "the_age_of_the_five": {
            "title": "The age of the five",
            "language": "English",
            "author": "Trudi Canavan"
        },
        "the-magicians_guild": {
            "title": "The magicians guild",
            "language": "English",
            "author": "Trudi Canavan"
        },
        "game_of_thrones": {
            "title": "Game of thrones",
            "language": "English",
            "author": "George R. R. Martin"
        },
        "shibumi": {
            "title": "Shibumi",
            "language": "English",
            "author": "Trevanian"
        },
        "pedro_paramo": {
            "title": "Pedro Paramo",
            "language": "Spanish",
            "author": "Juan Rulfo"
        },
        "norse_mythology": {
            "title": "Norse mythology",
            "language": "English",
            "author": "Neil Gaiman"
        },
        "cosmos": {
            "title": "Cosmos",
            "language": "English",
            "author": "Carl Sagan"
        },
        "shantaram": {
            "title": "Shantaram",
            "language": "English",
            "author": "Gregory David Roberts"
        },
        "the_longest_ride": {
            "title": "The longest ride",
            "language": "English",
            "author": "Nicholas Sparks"
        },
        "ready_player_one": {
            "title": "Ready player one",
            "language": "English",
            "author": "Ernest Cline"
        },
    };

    // object with book covers:
    let coverBook = {
        "the_age_of_the_five": "./images/ageoffive.jpg",
        "the-magicians_guild": "./images/magiciansguild.jpeg",
        "game_of_thrones": "./images/gameofthrones.jpeg",
        "shibumi": "./images/shibumi.jpg",
        "pedro_paramo": "./images/pedroparamo.jpg",
        "norse_mythology": "./images/norsemythology.jpeg",
        "cosmos": "./images/cosmos.jpeg",
        "shantaram": "./images/shantaram.jpg",
        "the_longest_ride": "./images/thelongestride.jpg",
        "ready_player_one": "./images/readyplayerone.jpeg",
    }


    //const types = Object.keys(ourBookTitles);
    //console.log(types);
    // types will be equal to 
    // Array ["the_age_of_the_five", "the-magicians_guild", "game_of_thrones", "shibumi", "pedro_paramo", "norse_mythology", "cosmos", "shantaram", "the_longest_ride", "ready_player_one"]



    // we get the same result with:
    //console.log(Object.getOwnPropertyNames(ourBookTitles));
    // expected output: Array ["the_age_of_the_five", "the-magicians_guild", "game_of_thrones", "shibumi", "pedro_paramo", "norse_mythology", "cosmos", "shantaram", "the_longest_ride", "ready_player_one"]



    // function that makes a list of the books with their corresponding information:
    let str = '<ul>';
    Object.keys(ourBookTitles).forEach(function(key) {
        let title = "Title: " + ourBookTitles[key].title;
        let language = "LANGUAGE: " + ourBookTitles[key].language;
        let author = "AUTHOR: " + ourBookTitles[key].author;
        str += '<h3>' + title + '</h3>' + '<li>' + language + '</li>' + '<li>' + author + '</li>' + '<div id=' + key + '>' + ' ' + '</div>';
    });

    str += '</ul>';
    document.getElementById("booksContainer").innerHTML = str;



    for (let key2 in ourBookTitles) {
        for (let key in coverBook) {
            // console.log(key2 + key);
            if (key2 === key) {
                let img = document.createElement("img");
                img.src = coverBook[key];
                let idBook = key;
                let src = document.getElementById(idBook);
                src.appendChild(img);

            }
        }

    }





    // when the key of books is the same as the key of covers
    // then find the id tag in the list and put there the book cover

    //array with key of books:
    //Object.keys(ourBookTitles)

    // key of Books one by one
    /*Object.keys(ourBookTitles).forEach(function(key) {
        console.log(key); // key is the key
        console.log(ourBookTitles[key]); // x[key] is the value
    });*/
    /*for (let key in ourBookTitles) {
        console.log(key); // key is the key
        console.log(ourBookTitles[key]); // x[key] is the value
    }*/

    //array with key of covers:
    //Object.keys(coverBook)

    // key of covers one by one:
    /*Object.keys(coverBook).forEach(function(key) {
        console.log(key); // key is the key
        console.log(coverBook[key]); // x[key] is the value
    });*/
    /*for (let key in coverBook) {
        console.log(key); // key is the key
        console.log(coverBook[key]); // x[key] is the value
    }*/

    //path to image:
    /*for (let key in coverBook) {
        console.log(coverBook[key]);
    }*/

    // insert an image in javascript:
    /*var img = new Image();
    var div = document.getElementById('x');


    img.onload = function () {

      div.innerHTML += '<img src="' + img.src + '" />';

    };


    img.src = 'image.jpg';*/

    //Another way:
    /*var img = new Image();
    var div = document.getElementById('foo');

    img.onload = function () {
      div.appendChild(img);
    };

    img.src = 'path/to/image.jpg' */






    /*for (let key in coverBook) {
        console.log(key.toUpperCase() + ':', coverBook[key]);
    }*/


    //*************************************************/


    // This was for creating a list out of an array, point 1.3 from homework:
    /* function makeUL(array) {
         // Create the list element:
         let list = document.createElement('ul');

         for (let i = 0; i < array.length; i++) {
             let book = array[i];

             // Create the list item:
             let item = document.createElement('li');

             item.appendChild(document.createTextNode(book));

             // Add it to the list:
             list.appendChild(item);
         }

         // Finally, return the constructed list:
         return list;
     }

     // Add the contents to #bookContainer in HTML file:
     document.getElementById('bookContainer').appendChild(makeUL(bookTitles));*/


    // This is a more elegant way but less intuitive:
    /*let str = '<ul>';

    bookTitles.forEach(function(book) {
        str += '<li>' + book + '</li>';
    });

    str += '</ul>';

    document.getElementById("bookContainer").innerHTML = str;*/

}