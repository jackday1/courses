const student = { 
  firstName: "Nguyen", 
  name: "Jack", 
  age: 12 
}
const teacher = { 
  subject: "Informatic", 
  school: "HUST" 
}

// spread
const combinedObject = {...student, ...teacher}
console.log(combinedObject)

// destructuring
const { name: x, age: y } = student
console.log({ x, y })

// rest
const { age, ...rest } = student
console.log(age, rest)