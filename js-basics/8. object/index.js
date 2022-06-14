// object declaration
const person = {
  name: "Jack",
  age: 23
}

console.log(person)

// get value of a property from object
console.log(person.age)
console.log(person["age"])

// overwrite object prop
person.name = "Harry"
console.log(person)

// object methods
const student = {
  name: "Ruby",
  age: 24,
  weight: 55,
  eat: function() {
    this.weight++
  }
}

console.log(student)
student.eat()
console.log(student)

// Practice: Khai báo 1 object định nghĩa 1 con mèo với 4 props: name, age, color, weight và 2 methods: eat và poop
// - method eat là 1 hàm nhận tham số 1 cân nặng, làm tăng cân nặng của con mèo
// - method poop tương tự eat nhưng làm giảm cân nặng của mèo