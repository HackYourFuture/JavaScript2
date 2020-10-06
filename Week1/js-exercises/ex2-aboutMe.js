window.onload = load;

function load() {
    const body = document.body;
    body.style.fontFamily = 'Arial, sans-serif';
    document.getElementById('nickname').innerText = 'Tarook';
    document.getElementById('fav-food').innerText = 'Pizza';
    document.getElementById('hometown').innerText = 'Damascus';
    const listItems = document.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].className = 'list-item';
    }
    const newImage = document.createElement('img');
    newImage.src = 'pic.png';
    body.appendChild(newImage);
}