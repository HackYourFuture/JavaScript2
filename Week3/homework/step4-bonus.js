'use strict';

{
  const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

  function removeDuplicates(array) {
    const unique = [];
    for (let i = 0; i < array.length; i++) {
      if (unique.indexOf(array[i]) === -1) {
        unique.push(array[i]);
      }
    }
    return unique;
  }

  const uniqueValues = removeDuplicates(values);

  console.log(uniqueValues);
}

{
  const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

  function removeDuplicates(array) {
    return array.filter(function (val) {
      return !this[val] ? this[val] = true : false;
    }, {});
  }
  const uniqueValues = removeDuplicates(values);

  console.log(uniqueValues);
}

{
  const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
  function removeDuplicates() {
    const unique = {};
    values.forEach(function (i) {
      if (!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

  const uniqueValues = removeDuplicates(values);

  console.log(uniqueValues);

}

{
  const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

  const unique = [...new Set(values)];

  console.log(unique);
}


// Note: This step was made with EXTREME googling :)
