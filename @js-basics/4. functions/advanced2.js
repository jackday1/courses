// setTimeout - setInterval

const timeout = setTimeout(() => console.log("setTimeout function"), 2000)
clearTimeout(timeout)

const interval = setInterval(() => console.log("setInterval function"), 2000)
clearInterval(interval)
