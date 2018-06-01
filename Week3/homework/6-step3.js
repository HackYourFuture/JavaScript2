'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];

console.log(arr2d.join('\n') + '\n\n');

function arr3d(arr2d) {
  const rowCount = arr2d.length;
  const rowSizes = []

  for (let i = 0; i < rowCount; i++) {
    rowSizes.push(arr2d[i].length)
  }
  return [rowCount, Math.min.apply(null, rowSizes)]
}

arr3d([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]);
console.log('The length of array is : ' + (arr2d.length));
