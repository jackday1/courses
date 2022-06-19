// there are 8 main data types in JavaScript
// value types: number, string, boolean, undefined, null
// reference types: array, object, function

// value types: JavaScript will use its value
// reference types JavaScript will use its location in RAM

// number
console.log("NUMBER");
const number = 3;
console.log(number);
console.log(typeof number);

console.log("\n ===== \n");

// string
console.log("STRING");
const string = "Hello world";
console.log(string);
console.log(typeof string);

console.log("\n ===== \n");

// boolean
console.log("BOOLEAN");
const boolean = true;
console.log(boolean);
console.log(typeof boolean);

console.log("\n ===== \n");

// undefined
console.log("UNDEFINED");
let undf;
console.log(undf);
console.log(typeof undf);

console.log("\n ===== \n");

// null
console.log("NULL");
const aNull = null;
console.log(aNull);
console.log(typeof aNull);

console.log("\n ===== \n");

// array
console.log("ARRAY");
const arr = [1, 2, 3, 4];
console.log(arr);
console.log(typeof arr);

console.log("\n ===== \n");

// object
console.log("OBJECT");
const person = {
  name: "Developer",
  age: 23,
};

console.log(person);
console.log(typeof person);

console.log("\n ===== \n");

// function
console.log("FUNCTION");
const add = (a, b) => a + b;
console.log(add);
console.log(typeof add);
