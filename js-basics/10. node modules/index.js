const fs = require("fs")

const readFile = (filePath) => {
  const content = fs.readFileSync(filePath, { encoding: "utf-8" })
  return content
}

console.log(readFile("./reminder.txt"))

const writeFile = (filePath, content) => {
  fs.writeFileSync(filePath, content, { encoding: "utf-8" })
}

writeFile("./reminder2.txt", "Go running!")