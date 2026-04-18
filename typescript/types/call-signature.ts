type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b) => a * b;

console.log(multiply(5, 4));
