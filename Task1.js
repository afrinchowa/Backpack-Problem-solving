const people = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 28, gender: 'male' },
  { name: 'Diana', age: 22, gender: 'female' },
];

const getMaleNames = (arr) => {
  return arr.filter(person => person.gender !== 'female').map(person => person.name);
};

console.log(getMaleNames(people)); // ['Bob', 'Charlie']
