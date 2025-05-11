// 2. Task: Object Manipulation
const books = [
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury', year: 1953 },
];

const getBookTitles = (arr) => arr.map(book => book.title);

console.log(getBookTitles(books)); // ['1984', 'Brave New World', 'Fahrenheit 451']
