
document.body.style.fontFamily=`Arial,sans-serif`;

document.querySelector('#nickname').innerText='David';
document.querySelector('#fav-food').innerText='Charcoal grilled meat';
document.querySelector('#hometown').innerText='London';

const items=document.querySelectorAll('ul li');
items.forEach(item=> {item.classList.add('list-item')})


const styleTag=document.createElement('style');
document.querySelector("head").appendChild(styleTag);
document.querySelector('style').innerText= '.list-item {color:red}'

const img = document.createElement('img');
img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9585883-0c30-448b-8cee-6eac6d5c695f/d80kp71-a8d13ec7-6e9a-4268-9312-222184443314.png/v1/fill/w_1024,h_576,q_75,strp/real_madrid_david_beckham_wallpaper_by_sameerhd-d80kp71.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9kOTU4NTg4My0wYzMwLTQ0OGItOGNlZS02ZWFjNmQ1YzY5NWYvZDgwa3A3MS1hOGQxM2VjNy02ZTlhLTQyNjgtOTMxMi0yMjIxODQ0NDMzMTQucG5nIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTU3NiJ9XV19.DsmMSnKtljCP7zEAAUsax4S3Lf9oASSChxWHmyPAT0g'
document.body.appendChild(img);