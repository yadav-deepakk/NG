function greet(name: string): string {
    return "Hello " + name + "!";
}

function add(number1: number, number2: number): number {
    return number1 + number2;
}

let add2 = (num1: number, num2: number): number => num1 + num2;

function add3(num: Array<number>): number {
    let sum: number = 0;
    num.forEach((n) => (sum += n));
    return sum;
}

let add4 = (...numbers: Array<number>): number => {
    let sum: number = 0;
    numbers.forEach((num) => (sum += num));
    return sum;
};

// console.log(greet("Deepak"));
let arrNums: Array<number> = [43, 7, 23, 56];
let result: number = add4(...arrNums);
// console.log(result);

// Generics in Typscript
function getConcatenated<Type>(...items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult1 = getConcatenated(...[3, 54, 42, 27, 84, 98]);
let concatResult2 = getConcatenated(...["Ramu", "Damu", "Sonu", "Monu"]);

console.log(concatResult1);
console.log(concatResult2);
