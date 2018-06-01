'use strict';

const names = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

const uniq = names
  .map((name) => {
    return { count: 1, name: name }
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a;
  }, {});

const sorted = Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b])

console.log(sorted);
