// 4. Task: Sorting Objects
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2010 },
  { make: 'Honda', model: 'Accord', year: 2015 },
  { make: 'Ford', model: 'Focus', year: 2008 },
];

const sortCarsByYear = arr => arr.sort((a, b) => a.year - b.year);

console.log(sortCarsByYear(cars));


