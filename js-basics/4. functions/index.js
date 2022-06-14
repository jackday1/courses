const printNumber = number => {
  console.log(number)
}
printNumber(3)

// default parameter
const printName = (name = "Default name") => console.log(name)
printName()

// function declaration
function print(name) {
  console.log(name)
}

// Practice: Write a function has weight of a student (number) as a paramter 
// - if weight >=80 return "Danger: Too heavy"
// - if 60 <= weight < 80 return "Warning"
// - if 40 <= weight < 60 return "Normal"
// - if weight < 40 return "Danger: Too light"

const checkWeight = weight => {

}

checkWeight(40) // --> expect: Normal
checkWeight(90) // --> expect: Danger: Too heavy