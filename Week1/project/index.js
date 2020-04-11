// your code goes in here
let quotes = [{
        name: 'I think, so I am here.',
        author: '--Hercules',
    },
    {
        name: 'I am the best',
        author: '--Hassan',
    },
    {
        name: 'I will show you how great I am ',
        author: '--Mohammad ali',
    },
    {
        name: 'work harder than any other human being',
        author: '--Elon musk',
    },
    {
        name: 'I refuse to lose',
        author: '--Mike tyson',
    },
    {
        name: 'stupidity is doing the same thing more than one time',
        author: '--Albert einstein',
    },
    {
        name: 'I am the eagle between those cheeps',
        author: '--Unknown',
    },
];

const randomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomName = `<br> ${quotes[randomNumber].name} <br> ${quotes[randomNumber].author} <br>`;
    document.getElementById('random-quote').innerHTML = randomName;
    console.log(randomName);
    if (!randomQuote) return;
};