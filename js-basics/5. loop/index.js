// for loop
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// while loop
let number = 0
while (number < 5) {
  number++
}

console.log(number)

// Practice: Write a function has a number as parameter
// - if number < 0, log "Invalid"
// - if number <= 20, log all the numbers from 1 to this number
// - if number > 20, log all the numbers from 1 to 20

const renderNumbers = number => {

}

renderNumbers(34) // --> expect: 1, 2, 3,..., 20
renderNumbers(14) // --> expect: 1, 2, 3,..., 14
renderNumbers(-3) // --> expect: Invalid