'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];


// my solution: we should loop throw the first array then the second array then the third array to take the values of the final array. 



for (let i=0; i<arr3d.length; i++){

   // console.log(arr3d[i]);

    for (let x=0; x<arr3d.length; x++){

       // console.log(arr3d[i][x]);

       for (let y=0; y<arr3d.length; y++){
      
        console.log(arr3d[i][x][y]);

    }
    }
    }



