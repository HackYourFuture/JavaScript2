{
  /* const bookTitles = [
    'charlottes_web',
    'mieko_and_the_fifth_treasure',
    'the_outsiders',
    'the_house_on_mango_street',
    'thirteen_reasons_why',
    'peter_pan',
    'the_old_man_and_the_sea',
    'the_giver',
    'number_the_stars',
    'a_wrinkle_in_time',
  ]; */
  const objectOfBooks = {
    charlottes_web: {
      Title: 'Charlotte’s Web',
      Language: 'English',
      Author: 'E.B. White',
    },
    mieko_and_the_fifth_treasure: {
      Title: 'Mieko and the Fifth Treasure',
      Language: 'English',
      Author: 'Eleanor Coerr',
    },
    the_outsiders: {
      Title: 'The Outsiders',
      Language: 'English',
      Author: 'S.E. Hinton',
    },
    the_house_on_mango_street: {
      Title: 'The House On Mango Street',
      Language: 'English',
      Author: 'Sandra Cisneros',
    },
    thirteen_reasons_why: {
      Title: 'Thirteen Reasons Why',
      Language: 'English',
      Author: 'Jay Asher',
    },
    peter_pan: {
      Title: ' Peter Pan',
      Language: 'English',
      Author: 'J.M. Barrie',
    },
    the_old_man_and_the_sea: {
      Title: ' The Old Man and the Sea',
      Language: 'English',
      Author: 'Ernest Hemmingway',
    },
    the_giver: {
      Title: 'The Giver',
      Language: 'English',
      Author: ' Lois Lowry',
    },
    number_the_stars: {
      Title: 'Number the Stars',
      Language: 'English',
      Author: 'Lois Lowry',
    },
    a_wrinkle_in_time: {
      Title: 'A Wrinkle In Time',
      Language: 'English',
      Author: 'Madeline L’engle',
    },
  };
  const bookImages = {
    charlottes_web: '../img/charlotte.jpg',
    mieko_and_the_fifth_treasure: '../img/mieko.jpg',
    the_outsiders: '../img/outsiders.jpg',
    the_house_on_mango_street: '../img/thehouse.jpg',
    thirteen_reasons_why: '../img/thirteenreason.jpg',
    peter_pan: '../img/peterpan.jpg',
    the_old_man_and_the_sea: '../img/theold.jpg',
    the_giver: '../img/giver.jpg',
    number_the_stars: '../img/numberstars.jpg',
    a_wrinkle_in_time: '../img/wrinkle.jpg',
  };

  // function render(ul) {
  // for (let i = 0; i < bookTitles.length; i++) {
  // const item = bookTitles[i];
  // const li = document.createElement('li');
  // ul.appendChild(li);
  // li.textContent = item;
  // li.className = item;
  // console.log(li);}  }

  function render(ul) {
    Object.entries(objectOfBooks).forEach(entry => {
      const key = entry[0];
      const li = document.createElement('li');
      ul.appendChild(li);
      li.id = key;
      Object.entries(entry[1]).forEach(item => {
        const innerKey = item[0];
        const innerValue = item[1];
        const myContent = document.createElement('p');
        myContent.textContent = `${innerKey}: ${innerValue}`;
        li.appendChild(myContent);
      });
    });
  }

  const addImage = () => {
    Object.entries(bookImages).forEach(i => {
      const altInfo = i[0];
      const urlInfo = i[1];
      const myImage = document.createElement('img');
      myImage.setAttribute('src', urlInfo);
      myImage.setAttribute('alt', altInfo);
      const li = document.getElementById(altInfo);
      li.appendChild(myImage);
    });
  };

  function main() {
    const myMain = document.getElementById('main');
    const ul = document.createElement('ul');
    myMain.appendChild(ul);
    render(ul);
    addImage();
  }
  window.onload = () => main();
}
