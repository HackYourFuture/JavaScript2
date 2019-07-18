'use strict';

const flattenArray2d = [[1, 2], [3, 4], [5, 6]];
const flattenArray3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

for (let i = 0; i < flattenArray2d.length; i++) {
  for (let z = 0; z < flattenArray2d[i].length; z++) {
    console.log(flattenArray2d[i][z]);
  }
}

for (let i = 0; i < flattenArray3d.length; i++) {
  for (let z = 0; z < flattenArray3d[i].length; z++) {
    for (let j = 0; j < flattenArray3d[i].length; j++) {
      console.log(flattenArray3d[i][z][j]);
    }
  }
}
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
