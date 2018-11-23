const companies = [{
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
/*
for (i = 0; i < companies.length; i++){
  console.log(i, companies[i]);
  
 }

companies.forEach(company => { console.log(company)
  
});

companies.forEach(function (company, index, companies) {
  console.log(index, company)
});

//Filter
const canDrink = ages.filter(age => age >=21);
console.log(canDrink)

//Filter Companies

const retailCompnanies = companies.filter(function (company) {
  if (company.category === 'Retail') {
    return true;
  }
});


const retailCompnanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompnanies)


const eigtiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
console.log(eigtiesCompanies);

const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10)
console.log(lastedTenYears.length) 


const companyNames = companies.map(function (company) {
  return `${company.name} [${company.start} - ${company.end}]`
})

console.log(companyNames)

const agessqrt = ages.map(age => Math.sqrt(age))
console.log(agessqrt)



const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1
  } else {
    return -1
  }
})

const sortedCompanies = companies.sort((a, b) => (a > b ? 1 : -1));

console.log(sortedCompanies)

const sortAges = ages.sort((a,b)=> a-b)
console.log(sortAges)

let agesSum = 0;
for (element of ages) {
  agesSum += element;
}
console.log(agesSum)

const ageSum = ages.reduce(function (total, age) {
  return total + age
}, 0);

const ageSum = ages.reduce((total, age) => total + age, 0)
console.log(ageSum)
*/
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  //.sort((a, b) => a - b)
  //.reduce((a,b)=> a+b, 0)
console.log(combined)