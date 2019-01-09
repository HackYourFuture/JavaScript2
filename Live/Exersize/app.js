'use strict';

{
  const todos = [
    {
      task: 'Write a summary HTML/CSS',
      done: false
    },
    {
      task: 'Some web development',
      done: true
    },
    {
      task: 'Fix homework for class10',
      done: false
    },
    {
      task: 'Talk to a lot of people',
      done: false
    },
    {
      task: 'Keep writing summary',
      done: false
    },
    {
      task: 'Some more web development',
      done: false
    },
    {
      task: 'Staring out the window',
      done: false
    },
    {
      task: 'Talk to a lot of people',
      done: false
    },
    {
      task: 'Look at application assignments new students',
      done: false
    }
  ];

  function render(container) {
    // add your code here

    const li = document.createElement('li');
    li.setAttribute('class', 'todo');
    li.innerText = 'Write a summary HTML/css';
    li.addEventListener('click', function() {
      li.style.textDecoration = 'line-through';
    });

    const li1 = document.createElement('li');
    li1.setAttribute('class', 'todo');
    li1.innerText = 'Some Web Development';

    const li2 = document.createElement('li');
    li2.setAttribute('class', 'todo');
    li2.innerText = 'Fix homework for class 19';

    container.appendChild(li);
    container.appendChild(li1);
    container.appendChild(li2);
  }

  function main() {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.innerText = 'Maartjes work';
    root.appendChild(h1);
    const ul = document.createElement('ul');
    root.appendChild(ul);

    render(ul);
  }

  window.addEventListener('load', main);
}
