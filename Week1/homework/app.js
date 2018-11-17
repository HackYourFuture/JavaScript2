const bookTitles = [
    'the_hitchhiker_s_guide_to_the_galaxy',
    'harry_potter_chamber_secrets',
    'something_wicked_this_way_comes',
    'i_was_told_there_will_be_cake',
    'to_kill_a_mockingbird',
    'the_unbearable_lightness_of_being',
    'the_perks_of_being_a_wallflower',
    'the_man_without_qualities',
    'me_talk_pretty_one_day',
    'one_hundred_years_of_solitude'
];
//-------------------

function bookName() {
    let bookUl = document.createElement('ul');
    for (let i = 0; i < bookTitles.length; i++) {
        let bookLi = document.createElement('li');
        bookUl.appendChild(bookLi);
        bookLi.innerHTML = bookTitles[i];
    }
    console.log(bookUl);
}
bookName();

//---------------------
const bookInfo = {
    the_hitchhiker_s_guide_to_the_galaxy: {
        Photo: "img/11.jpg",
        Title: "The Hitchhiker's Guide to the Galaxy",
        Author: "By Douglas Adams",
        Language: "English",
    },
    harry_potter_chamber_secrets: {
        Photo: 'img/22.jpg',
        Title: "Harry potter chamber secrets",
        Author: "By J. K. Rowling",
        Language: "English",
    },
    something_wicked_this_way_comes: {
        Photo: "img/33.jpg",
        Title: "Something Wicked This Way Comes ",
        Author: "By Ray Bradbury",
        Language: "English",
    },
    i_was_told_there_will_be_cake: {
        Photo: "img/44.jpg",
        Title: "I Was Told There'd Be Cake",
        Author: "By Sloane Crosley",
        Language: "English",
    },
    to_kill_a_mockingbird: {
        Photo: "img/55.jpg",
        Title: "To Kill a Mockingbird ",
        Author: "By Harper Lee",
        Language: "English",
    },
    the_unbearable_lightness_of_being: {
        Photo: "img/66.jpg",
        Title: "The Unbearable Lightness of Being ",
        Author: "By Milan Kundera",
        Language: "English",
    },
    the_perks_of_being_a_wallflower: {
        Photo: "img/77.jpg",
        Title: "The Perks of Being a Wallflower ",
        Author: "By Stephen Chbosky  ",
        Language: "English",
    },
    the_man_without_qualities: {
        Photo: "img/88.jpg",
        Title: "The Man Without Qualities",
        Author: "By Robert Musil",
        Language: "English",
    },
    me_talk_pretty_one_day: {
        Photo: "img/99.jpg",
        Title: "Me Talk Pretty One Day",
        Author: "By David Sedaris",
        Language: "English",
    },
    one_hundred_years_of_solitude: {
        Photo: "img/10.jpg",
        Title: "One Hundred Years of Solitude",
        Author: "By Gabriel García Márquez",
        Language: "English",
    }

};
//------------------------

let postersForBooks = {
    the_hitchhiker_s_guide_to_the_galaxy: "img/11.jpg",
    harry_potter_chamber_secrets: "img/22.jpg",
    something_wicked_this_way_comes: "img/33.jpg",
    i_was_told_there_will_be_cake: "img/44.jpg",
    to_kill_a_mockingbird: "img/55.jpg",
    the_unbearable_lightness_of_being: "img/66.jpg",
    the_perks_of_being_a_wallflower: "img/77.jpg",
    the_man_without_qualities: "img/88.jpg",
    me_talk_pretty_one_day: "img/99.jpg",
    one_hundred_years_of_solitude: "img/10.jpg"
};

//----------------------

function bookName1() {
    let list = document.createElement('ul');
    document.body.appendChild(list);
    for (let bookAddress in bookInfo) {
        let bookLi = document.createElement('li');
        bookLi.setAttribute("class", bookAddress);
        list.appendChild(bookLi);
        let booksImg = document.createElement("img");
        bookLi.appendChild(booksImg);
        booksImg.src = postersForBooks;
        booksImg.innerHTML = bookInfo[bookAddress].Photo;
        let newH = document.createElement("h2");
        bookLi.appendChild(newH);
        newH.innerHTML = bookInfo[bookAddress].Title;
        let newBy = document.createElement("p");
        bookLi.appendChild(newBy);
        newBy.innerHTML = bookInfo[bookAddress].Author;
        let newP = document.createElement("p");
        bookLi.appendChild(newP);
        newP.innerHTML = bookInfo[bookAddress].Language;
    };

}
console.log(bookName1());