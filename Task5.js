// 5. Task: Array Reduction

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumOfEvenNumbers = arr => arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);

console.log(sumOfEvenNumbers(numbers)); // 20
