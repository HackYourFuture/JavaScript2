'use strict';

{


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


    // Replace with your own code
    //console.log(bookTitles);

    function makeUL(array) {
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

    // Add the contents of options[0] to #bookContainer in HTML file:
    document.getElementById('bookContainer').appendChild(makeUL(bookTitles));


    // This is a more elegant way but less intuitive:
    /*let str = '<ul>';

    bookTitles.forEach(function(book) {
        str += '<li>' + book + '</li>';
    });

    str += '</ul>';

    document.getElementById("bookContainer").innerHTML = str;*/

}