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
        for (let todo of todos) {
            // todo.done != todo.done
            const listItem = document.createElement('li')
            listItem.innerText = todo.task
            container.appendChild(listItem)
            if (todo.done) {
                listItem.style.textDecoration = 'line-through'
            }
            listItem.addEventListener('click', function () {
                todo.done = !todo.done
                if (listItem.style.textDecoration === 'line-through') {
                    listItem.style.textDecoration = 'none'
                    listItem.style.color = 'crimson'

                } else {
                    listItem.style.textDecoration = 'line-through'
                    listItem.style.color = 'black'
                }
            })
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