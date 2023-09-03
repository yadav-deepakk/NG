// data-type/type: string
let fName: string;
let lName: string;
fName = "Deepak";
lName = "Yadav";
let newFistName = fName.toUpperCase();
// console.log(newFistName + " " + lName);

// data-type: number
let num1: number, num2: number;
num1 = 10;
num2 = 24.54;
// console.log(num1 + " " + num2);

// data-type: boolean
let isTrue: boolean = true;
// console.log(isTrue);

// data-type/type: array
let arr1 : number[];
let arr2 : string[];
let arr3 : Array<number>;
let arr4 : Array<string>;
arr1 = [10, 20, 23, 41, 92, 34];
arr2 = ["Lakshman", "Ram", "Shyam", "Murlidhar"];
arr3 = [101.32, 20.2, 23.62, 41.21, 92.8, 34.1];
arr4 = ["TajMahal", "Statue of unity", "HawaMahal", "Aadiyogi"];

// arr1.forEach((n) => console.log(n));
let arr5 = arr1.filter(num => (num>50));
// arr5.forEach(num => console.log(num));

// data-type/type: any
// if no type is specified then by default it is treated as any type. 
