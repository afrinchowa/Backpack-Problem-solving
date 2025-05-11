// 3. Task: Function Composition
const square = x => x * x;
const double = x => x * 2;
const addFive = x => x + 5;

const composedFunction = x => addFive(double(square(x)));

console.log(composedFunction(3)); // ((3^2) * 2) + 5 = 23
