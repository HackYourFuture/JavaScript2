const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

  // creat h1
  const head=document.createElement("h1");
  head.innerText="My Hobbies List";
  const body=document.querySelector("body");
  body.appendChild(head);
  body.style.cssText="color:purple";
  // creat ul
  const uList = document.createElement('ul')
   body.appendChild(uList);
   uList.style.listStyle = 'none'

  // creat list

  /*for (let i = 0; i <myHobbies.length; i++) {
    const list = document.createElement('li');
   uList.appendChild(list);
  list.innerHTML = myHobbies[i]};*/

  myHobbies.forEach(element => { const list = document.createElement('li');
  uList.appendChild(list);
 list.innerHTML = element
 list.style.color="red"
 list.style.fontSize="20px"
  });




  
   
