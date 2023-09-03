"use strict";
function greet(name) {
    return "Hello " + name + "!";
}
function add(number1, number2) {
    return number1 + number2;
}
let add2 = (num1, num2) => num1 + num2;
function add3(num) {
    let sum = 0;
    num.forEach((n) => (sum += n));
    return sum;
}
let add4 = (...numbers) => {
    let sum = 0;
    numbers.forEach((num) => (sum += num));
    return sum;
};
// console.log(greet("Deepak"));
let arrNums = [43, 7, 23, 56];
let result = add4(...arrNums);
// console.log(result);
// Generics in Typscript
function getConcatenated(...items) {
    return new Array().concat(items);
}
let concatResult1 = getConcatenated(...[3, 54, 42, 27, 84, 98]);
let concatResult2 = getConcatenated(...["Ramu", "Damu", "Sonu", "Monu"]);
console.log(concatResult1);
console.log(concatResult2);
