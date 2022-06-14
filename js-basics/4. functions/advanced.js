// callback function - higher order function

// higher order function
const modifyNumber = (number, callback) => {
  const newNumber = number + 1
  return callback(newNumber)
}

// callback function
const multipleByTwo = number => number * 2

modifyNumber(2, multipleByTwo)