const books = [
    {
    title : 'An Artist of the Floating World',
    author : 'Kazuo Ishiguro',
    alreadyRead :false,
    imgSrc : 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/ArtistOfTheFloatingWorld.jpg/220px-ArtistOfTheFloatingWorld.jpg'

    },
    {
    title : 'Underworld',
    author : 'Don DeLillo',
    alreadyRead :true,   
    imgSrc : 'http://xoxoafterdark.com/wp-content/uploads/2014/10/Delillo-Underworld.jpg'

    },
    {
    title : 'أطفال مزعجون',
    author : 'مصطفى أبو سعد',
    alreadyRead :true,
    imgSrc : 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1244583516i/6536897._UY341_SS341_.jpg'
    }
];

    const ul = document.createElement('ul');
    // 1
   
    for (let obj of books) {
    // 2
        const p = document.createElement('p');
        p.innerText = `${obj.title} was written by ${obj.author}`;

        const img = document.createElement('img');
        img.innerHTML = obj.imgSrc;
        
    // 5

        //let color =p.style.color;  // it's not work :( 
        let style = p.style;
        if (obj.alreadyRead === true ? style.color = 'green': style.color = 'red'); 
        

    // 3     
        const li = document.createElement('li');  
        ul.appendChild(li);
        li.appendChild(p);
        li.appendChild(img);
        document.body.appendChild(ul);
    }
    
    // 4
   /*
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');
   
    img1.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/ArtistOfTheFloatingWorld.jpg/220px-ArtistOfTheFloatingWorld.jpg';
    img2.src = 'http://xoxoafterdark.com/wp-content/uploads/2014/10/Delillo-Underworld.jpg';
    img3.src = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1244583516i/6536897._UY341_SS341_.jpg';

    let lis = document.querySelectorAll('li');
    lis[0].appendChild(img1);
    lis[1].appendChild(img2);
    lis[2].appendChild(img3);
   */