//Quesion Number #1
//creating arrey
const belgiumHistoricalTimeLine = [1830, 1914, 1920, 1930, 1940, 1944, 1950];
//function return n number of data
const belgiumProfile = n => console.log(belgiumHistoricalTimeLine.slice(0, n));

belgiumProfile();

//Quesion Number #2

//function convert given number to string and digit

function numberFilter(num) {
  const newNumstring = num.toString().split('');
  const newNumDigits = newNumstring.map(Number);

  const numOutPutDigits = [];
  // a loop check the number is even or odd
  for (let i = 0; i < newNumDigits.length; i++) {
    if (newNumDigits[i] % 2 === 1 && newNumDigits[i + 1] / 2 === 1) {
      numOutPutDigits.push(newNumDigits[i]);
      numOutPutDigits.push('-');
    } else {
      numOutPutDigits.push(newNumDigits[i]);
    }
  }

  return numOutPutDigits;
}
//numberFilter(userNumber);

//Quesion Number #3
const arr1 = [
  'Dell',
  'Huawei',
  'HP',
  'Apple',
  'Huawei',
  'Asus',
  'Dell',
  'Asus',
  'Asus',
  'Apple',
  'Dell',
  'Dell',
];

let numFrequency = 1;
let count = 0;
let mostFrequentlyUsed;
arr1.forEach(function(val, i) {
  arr1.forEach(function(val, j = i) {
    if (arr1[i] == arr1[j]) count++;
    if (numFrequency < count) {
      numFrequency = count;
      mostFrequentlyUsed = arr1[i];
    }
  });
  count = 0;
});
console.log('mostFrequentlyUsed:' + mostFrequentlyUsed + '-' + numFrequency);
//Quesion Number #4
