// your code goes in here
let quotes = [{
        quote: 'I try to create sympathy for my characters, then turn the monsters loose.',
        person: '- Stephen King',
    },
    {
        quote: 'It is perfectly okay to write garbage—as long as you edit brilliantly.',
        person: '- C. J. Cherryh',
    },
    {
        quote: 'Prose is architecture, not interior decoration.',
        person: '- Ernest Hemingway',
    },
    {
        quote: "It's none of their business that you have to learn to write. Let them think you were born that way.",
        person: '- Ernest Hemingway',
    },
    {
        quote: 'Most writers regard the truth as their most valuable possession, and therefore are most economical in its use.',
        person: '- Mark Twain',
    },
    {
        quote: 'To produce a mighty book, you must choose a mighty theme.',
        person: '- Herman Melville',
    },
];

function randomQuote() {
    let random = Number.parseInt(Math.random() * quotes.length + 1);
    document.getElementById('quotes').innerHTML = quotes[random].quote;
    document.getElementById('quote-creator').innerHTML = quotes[random].person;
}
document.getElementById('btn').addEventListener('click', randomQuote);
randomQuote();