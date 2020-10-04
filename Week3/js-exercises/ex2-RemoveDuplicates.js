/**
 
 ** Exercise 2: The lottery machine **
 Write a function called removeDuplicates. This function accept an array as an argument
 does not return anything but removes any duplicate elements from the array.

 The function should remove duplicate elements. So the result should be:
 ['a', 'b', 'c', 'd', 'e', 'f']

 */

/**
 * Checks your solution against correct solution
 * @param {Array} array your solution
 * @returns boolean
 */
function checkSolution(array) {
  const solution = ['a', 'b', 'c', 'd', 'e', 'f'];
  if (array == null) return false;
  if (array.length !== solution.length) return false;

  for (let i = 0; i < solution.length; i++) {
    if (array[i] !== solution[i]) return false;
  }
  return true;
}

// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
removeDuplicates(letters);

if (checkSolution(letters)) {
  console.log("Hooray!");
}