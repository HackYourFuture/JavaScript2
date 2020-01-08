const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];


const list = document.createElement('ul');
const jsTag = document.getElementsByTagName('script');
document.body.insertBefore(list, jsTag[0]);

function addToList(Arr) {
  Arr.forEach(element => {
    const elTag = document.createElement('li');
    const textNode = document.createTextNode(element);
    elTag.appendChild(textNode);
    list.appendChild(elTag)
  });
}
addToList(myHobbies);

