'use strict';

{


    const bookTitles = [
        // Replace with your own book titles
        'the_age_of_the_five',
        'the-magicians_guild',
        'game_of_thrones',
        'shibumi',
        'pedro_paramo',
        'nordic_myths',
        'cosmos',
        'shantaram',
        'the_longest_ride',
        'ready_player_one'
    ];

    let books = { title: 'John', language: 24, author: '' };

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