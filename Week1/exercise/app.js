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
    for (const i of todos) {
      const Item = document.createElement('li');
      Item.innerText = i.task;
      container.appendChild(Item);
      if (todos.done) {
        Item.style.textDecoration = 'line-through';
      }
    }
    // add your code here
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
