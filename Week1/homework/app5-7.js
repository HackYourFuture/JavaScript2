'use strict'
const books =[
    "the_crimson_iver",
    "hobbit",
    "1984",
    "the_return_of_the_king",
    "the_ruins_of_gorlan ",
    "a_clash_of_kings",
    "the_forty_rules_of_love",
    "my_name_is_red",
    "the_new_york_triology",
    "the_tale_of_two_cities"

];
const bookInfo ={
    the_crimson_river : {
        title : "The crimson River",
        author: "Jean-Christophe Grangé",
        language : "Frech"
    
    },
    hobbit:{
        title : "Hobbit",
        author : "J.J.Tolkein",
        language : "English"

    },
    1984:{
        title : "1984",
        author : "George Orwel",
        language : "English"

    },

    the_return_of_the_king:{
        title : "The Return of the King",
        author : "J.J.Tolkein",
        language : "English"
    },

    the_ruins_of_gorlan:{
        title : "The Ruins of Gorlan",
        author : "John Flanagan",
        language : "English"
    },
    a_clash_of_kings:{
        title : "A Clash of Kings",
        author : "J. R. Martin",
        language : "English"
    },
    the_forty_rules_of_love:{
        title : "The Forthy Rules of Love",
        author : "Elif Safak",
        language : "Turkish"
    },
    my_name_is_red:{
        title : "my Name is Red",
        author : "Orhan Pamuk",
        language : "Turkish"
    },
    the_new_york_triology:{
        title : "The New York Triology",
        author :"Paul Auster",
        language : "English"
    },
    the_tale_of_two_cities:{
        title : "The Tale of Two Cities",
        author : "Charles Dickens",
        language : "English"
    }
}   

function bookDetails(){
    const ul = document.createElement("ul");
    
    for (let i in books){
              
        let bookLabel = books[i];
        let li = document.createElement("li")
        li.innerHTML=bookLabel;

        
        let bookHead = document.createElement("h2");
        bookHead.innerHTML=bookLabel.title;
        

        let bookAuthor = document.createElement("p");
        bookAuthor.innerHTML = bookLabel.author
        
                
        let bookLanguage = document.createElement("p")
        bookLanguage.innerHTML=bookLabel.language;

        li.appendChild(ul);
        bookHead.appendChild(li);
        bookAuthor.appendChild(li);
        bookLanguage.appendChild(li);


    }
    document.getElementById("show").appendChild(ul);
}
window.addEventListener("load",bookDetails)







//const ul = document.createElement("ul")
/*function bookList(){
    for (let i=0; i<bookInfo.title.length; ++i){
    let li = document.createElement("li");
    let bookTitel = document.createElement("h2");   
    let bookAuthor = document.createElement("h3");  
    let bookLanguage = document.createElement("h4");
    li.innerHTML=bookInfo.title[i];
    ul.appendChild(li)
    }
    
    document.getElementById("show").appendChild(ul);
}
//window.addEventListener('load',bookList)*/
/*function bookLabel(){
    
    
    
    
    const ul = document.createElement('ul')
    for ( var k in bookInfo){
        let book = bookInfo[k];
        let li = document.createElement("li");
        
        let bookTitel = document.createElement("h2");
        bookTitel.innerHTML=book.title;
        
        

        let bookAuthor = document.createElement("p"); 
        bookAuthor.innerHTML=book.author;

        let bookLanguage = document.createElement("p")
        bookLanguage.innerHTML=book.language;

        li.appendChild(bookTitel);
        li.appendChild(bookAuthor);
        li.appendChild(bookLanguage);
        ul.appendChild(li);
    }
    return ul;
    document.getElementById("show").appendChild(ul);
}

window.addEventListener('load',bookLabel)*/
