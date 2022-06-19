// promise
const shootPenalty = (name) => new Promise((resolve, reject) => {
  if (name === "CR7") {
    resolve("Goallll!")
  } else {
    reject("No goal!")
  }
})

shootPenalty("Messi")
  .then(data => console.log(data))
  .catch(err => console.log(err))

// async functions
const wait = (action = "nothing") => new Promise((resolve, reject) => {
  console.log(`waiting for ${action}...`)
  setTimeout(() => resolve(`Done with ${action}`), 5000)
})

const doThings = async () => {
  console.log("Get up")
  wait("getting up").then(() => console.log("Get up done! Go to eat breakfast"))
  console.log("Eat breakfast")
  wait("eating breakfast").then(() => console.log("Eat breakfast done! Now go to school!"))
  console.log("Go to school")
}

doThings()

// promise all
const waitAll = async () => {
  try {
    const res = await Promise.all([wait("1"), wait("2"), wait("3")])
    console.log({res})
  } catch(err) {
    console.error(err)
  }
}

waitAll()