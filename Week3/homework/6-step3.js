'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
function print(element)
{
    let ans = "";
    if(Array.isArray(element))
    {
        ans = "[ ";
        element.forEach((x, i) => ans +=  print(x) + (i + 1 < element.length ? ", " : " "));
        ans += "]";
        return ans;
    }
    else
        return ans + element;
}

console.log(print(arr2d));
console.log(arr2d);
// console.log(arr3d);

