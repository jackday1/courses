// if 
const number = 1
if (number === 1) {
  console.log("Number is 1")
} else if (number === 2) {
  console.log("Number is 2")
} else {
  console.log("Number is neither 1 nor 2")
}

// ternary operator
const pet = "Milu"
pet === "Milu" 
  ? console.log("Hello milu") 
  : console.log("Not my pet")

// switch case
const randomNumber = 5
switch (randomNumber) {
  case 1: 
    console.log("Number is 1")
    break
  case 2:
    console.log("Number is 2")
    break
  case 3:
  case 4:
    console.log("Number is 3 or 4")
    break
  default:
    console.log("Number is not 1, 2, 3, 4")
}