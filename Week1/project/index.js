const quotes = [
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: 'Mahatma Gandhi',
    },
    { 
        quote: 'Be yourself; everyone else is already taken.', 
        author: 'Oscar Wilde' },
    {
        quote:"That which does not kill us makes us stronger.",
        author: 'Friedrich Nietzsche',
    },
    {
        quote:"Be who you We must not allow other people’s limited perceptions to define us. ",
        author: 'Virginia Satir',
    },
    {
        quote: "Do what you can, with what you have, where you are",
        author: 'Theodore Roosevelt',
    },
    ];
  

function App(){
    document.querySelector('.btn').addEventListener('click', generateQuote);
    generateQuote(quotes);
}
  
function generateQuote() {
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    let index = Math.floor(Math.random() * quotes.length);
    const toShowQuote = quotes[index];
    quoteText.innerText = `${toShowQuote.quote}`;
    quoteAuthor.innerText = `- ${toShowQuote.author} -`;
}
