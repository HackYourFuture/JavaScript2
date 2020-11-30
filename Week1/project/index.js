// your code goes in here

const quotes = [
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        author: "Neil Gaiman",
    },
    {
        quote: "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
        author: "Dr. Seuss",
    },
    {
        quote: "Logic will get you from A to Z; imagination will get you everywhere.",
        author: "Albert Einstein",
    },
];

// Get random item from array
const randomArrItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

// Getting random quote object from the quotes array
let randomQuote = randomArrItem(quotes);
// Show random quote with its author on the DOM
document.querySelector(".quoteText").innerText = randomQuote.quote;
document.querySelector(".quoteAuthor").innerText = randomQuote.author;

// Upon clicking the new quote button
document.querySelector(".quoteNew").addEventListener("click", (e) => {
    // Prevent any default functionality of the new quote button
    e.preventDefault();
    // Getting a new random quote object from the quotes array
    let newRandomQuote = randomArrItem(quotes);
    // Loop to check if the new quote is not the same as the existing quote showing on the DOM
    while (quotes.indexOf(randomQuote) === quotes.indexOf(newRandomQuote)) {
        newRandomQuote = randomArrItem(quotes);
    }
    // When the loop ends, put the new random quote in the original variable of random quote
    randomQuote = newRandomQuote;
    // Show the new quote with its author on the DOM
    document.querySelector(".quoteText").innerText = randomQuote.quote;
    document.querySelector(".quoteAuthor").innerText = randomQuote.author;
});

// To share the quote on Twitter
document.querySelector(".shareTwitter").addEventListener("click", function(e) {
    e.preventDefault();
    const quoteText = document.querySelector(".quoteText").innerText;
    const quoteAuthor = document.querySelector(".quoteAuthor").innerText;
    window.open(`https://twitter.com/intent/tweet?text=\"${quoteText}\" – ${quoteAuthor}`);
});

// To share the quote on Facebook
document.querySelector(".shareFacebook").addEventListener("click", function(e) {
    e.preventDefault();
    const quoteText = document.querySelector(".quoteText").innerText;
    const quoteAuthor = document.querySelector(".quoteAuthor").innerText;
    window.open(`https://www.facebook.com/share.php?u=www.hackyourfuture.net&quote=\"${quoteText}\" – ${quoteAuthor}`);
});