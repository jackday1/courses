const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - run a function for all item in array, return a new array that is modified
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

// find - return the first item that makes function return true
const evenNumber = numbers.find((number) => number % 2 === 0);
console.log(evenNumber);

// filter - return an array includes all item that make function return true
const allEvenNumbers = numbers.filter((item) => item % 2 === 0);
console.log(allEvenNumbers);

// sort - sort array
const strings = ["a", "g", "b", "d"];
strings.sort();
console.log(strings);

// reduce - loop through every item in array
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);
