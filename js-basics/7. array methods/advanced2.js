const numbers = [1, 2, 3, 4]
const string = ["Hello", "world"]

// spread
const combinedArray = [...numbers, ...string]
console.log(combinedArray)

// destructuring
const [a, b, c, d, e] = numbers
console.log(a, b, c, d, e)

// rest
const [x, y, ...rest] = numbers
console.log(x, y, rest)