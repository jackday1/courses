const students = require("./students.json")

console.log(students)

// JSON methods
const person = { 
  name: "Steve Job",
  company: "Apple"
}

const stringPerson = JSON.stringify(person)
console.log({ stringPerson }, typeof stringPerson)

const parsedPerson = JSON.parse(stringPerson)
console.log({ parsedPerson })