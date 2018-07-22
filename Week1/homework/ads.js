const bookTitles = {
    // Replace with your own book titles
    'titles': ["eat_cake_be_brave", "cottage_by_the_sea", "the_sinners", "the_other_woman", "measure_what_matters", "liars_leakers_and_liberals", "becoming", "you_are_on_an_airplane", "believe_me", "whiskey_in_a_teacup"],
    'languages': ["english", "spanish", "arabic", "english", "polish", "arabic", "russian", "armenian", "syrian", "hebrew"],
    'author': ["ahmad", "abdallah", "hisham", "koko", "kiki", "roula", "nana", "sally", "stella", "nina"],
};

// Replace with your own code

var list = document.createElement('section');
list.setAttribute('id', 'bookLists');
var ul = document.createElement('ul');
document.body.appendChild(list);
list.appendChild(ul);
for (var i = 0; i < 10; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
    var smth = '| title: ' + bookTitles.titles[i] + '| language: ' + bookTitles.languages[i] + '| author: ' + bookTitles.author[i]

    li.innerHTML += smth


}