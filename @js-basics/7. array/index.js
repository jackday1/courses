// length of an array
const numbers = [1, 2, 3, 4]
console.log(numbers.length)

// get an item in an array
console.log(numbers[0])
console.log(numbers[numbers.length - 1])

// loop through array items
for (const item of array) {
  console.log(item)
}

// overwrite an item in array
numbers[1] = 6
console.log(numbers)

numbers[4] = 7
console.log(numbers)
console.log(numbers.length)

// Practice: Write a function has an array as parameter:
// - if the length of array < 5, add 1 to the array until its length = 5 and return this array after modification
// - if the length of array = 5 return string "Array length is big enough"

const updateArray = array => {

}

updateArray([1, 2, 3]) // --> expect: [1, 2, 3, 1, 1]
updateArray([1, 2, 3, 4, 5]) // --> expect: Array length is big enough