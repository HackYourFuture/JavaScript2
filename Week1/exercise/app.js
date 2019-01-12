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

    for (let i of todos) {
        const list = document.createElement ('li');
        list.innerText = i.task;
        container.appendChild (list);
    
    if (i.done) {
     list.style.textDecoration = 'line-through';
    }
    list.addEventListener ('click', function () {
        if (list.style.textDecoration === 'line-through') {
            list.style.textDecoration = 'none';
            list.done = !list.done;
        } else {
            list.style.textDecoration = 'line-through';
        }
    }
    )
  }
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