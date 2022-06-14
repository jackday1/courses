// JS built-in objects

// Math
const number = Math.PI
console.log({ number })

console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.pow(number, 2))

// Date
const now = new Date()
const date = now.getDate()
const month = now.getMonth()
const year = now.getFullYear()
const miliseconds = now.getTime()

console.log({ now, date, month, year, miliseconds })

const oneDayBeforeMiliseconds = miliseconds - 24*60*60*1000
const oneDayBefore = new Date(oneDayBeforeMiliseconds)
console.log({ oneDayBefore })
