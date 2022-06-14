let numbers = [1, 2]

// !!add an item to the end of array
numbers.push(3)
console.log(numbers)

// remove an item from the end of array
numbers.pop()
console.log(numbers)

// add an item to the beginning of array
numbers.unshift(3)
console.log(numbers)

// remove a item from the beginning of array
numbers.shift()
console.log(numbers)

// get the first index of an item in array
const names = ["Jack", "Harry"]
console.log(names.indexOf("Jack"))

// remove items in array
const pets = ["cat", "dog", "bird", "lion", "mouse"]
pets.splice(0, 2)
console.log(pets)
 
// !!cut array
const fruits = ["orange", "banana", "apple", "pine apple"]
const newFruits = fruits.slice(0, 1)
console.log(newFruits)

// Practice: Write a function has a number and an array as parameters and return all indexes of this number in the array

const numberArrays = [1, 2, 3, 4, 2, 5, 1, 7, 2, 1, 3, 4, 6, 7, 7, 9]

const checkIndex = (num, arr) => {

}

checkIndex(1, numberArrays) // --> expect: 0, 6, 9