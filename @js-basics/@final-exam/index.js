const fs = require("fs");
const readlineSync = require("readline-sync");
const { printTable } = require("console-table-printer");
const { nanoid } = require("nanoid");
const validator = require("validator");

const main = () => {
  const options = ["CREATE", "READ", "UPDATE", "DELETE"];

  const index = readlineSync.keyInSelect(options, "Choose an option?");

  const option = options[index];

  console.clear();
  switch (option) {
    case "CREATE":
      create();
      break;
    case "READ":
      read();
      break;
    case "UPDATE":
      update();
      break;
    case "DELETE":
      remove();
      break;
    default:
      return;
  }

  main();
};

const create = () => {
  const usersString = fs.readFileSync("./db.json", { encoding: "utf8" });
  const users = JSON.parse(usersString);

  let email = readlineSync.question("Please fill in user's email? ");
  while (
    !validator.isEmail(email) ||
    users.find((user) => user.email === email)
  ) {
    const errorMessage = !validator.isEmail(email)
      ? "Email is invalid!"
      : "User with this email is existed!";

    console.log(errorMessage);

    email = readlineSync.question("Please fill in user's email? ");
  }

  let name = readlineSync.question("Plase fill in user's name? ");
  while (validator.isEmpty(name.trim())) {
    console.log("Name is empty!");
    name = readlineSync.question("Plase fill in user's name? ");
  }

  const newUser = {
    id: nanoid(8),
    email,
    name,
  };
  users.push(newUser);

  const newUsersString = JSON.stringify(users);
  fs.writeFileSync("./db.json", newUsersString, { encoding: "utf8" });
  console.log("User is added successfully!");
};

const read = () => {
  const usersString = fs.readFileSync("./db.json", { encoding: "utf8" });
  const users = JSON.parse(usersString);

  if (!users.length) {
    console.log("No user found!");
    return;
  }

  printTable(users);
};

const update = () => {
  const email = readlineSync.question("Please fill in user's email? ");
  const usersString = fs.readFileSync("./db.json", { encoding: "utf8" });
  const users = JSON.parse(usersString);

  const user = users.find((item) => item.email === email);
  if (!user) {
    console.log("Not found!");
    return;
  }

  let newEmail = readlineSync.question(
    "Please fill in new user's email? (Leave blank to keep the current email) "
  );
  while (
    !validator.isEmpty(newEmail.trim()) &&
    (!validator.isEmail(newEmail) ||
      users.find((user) => user.email === newEmail))
  ) {
    const errorMessage = !validator.isEmail(newEmail)
      ? "Email is invalid!"
      : "User with this email is existed!";

    console.log(errorMessage);

    newEmail = readlineSync.question(
      "Please fill in new user's email? (Leave blank to keep the current email) "
    );
  }

  let newName = readlineSync.question(
    "Please fill in new user's name? (Leave blank to keep the current name) "
  );
  while (validator.isEmpty(newName.trim())) {
    console.log("Name is empty!");
    newName = readlineSync.question(
      "Please fill in new user's name? (Leave blank to keep the current name)"
    );
  }

  user.email = newEmail || user.email;
  user.name = newName || user.name;

  const newUsersString = JSON.stringify(users);
  fs.writeFileSync("./db.json", newUsersString, { encoding: "utf8" });
  console.log("User is updated successfully!");
};

const remove = () => {
  const email = readlineSync.question("Please fill in user's email? ");
  const usersString = fs.readFileSync("./db.json", { encoding: "utf8" });
  const users = JSON.parse(usersString);

  const user = users.find((item) => item.email === email);
  if (!user) {
    console.log("Not found!");
    return;
  }

  console.log(`1 user found. Username: ${user.name}`);
  const confirm = readlineSync.keyInYN(
    "Are you sure you want to delete this user? "
  );
  if (confirm) {
    const newUsers = users.filter((item) => item.id !== user.id);
    const newUsersString = JSON.stringify(newUsers);
    fs.writeFileSync("./db.json", newUsersString, { encoding: "utf8" });
    console.log("User is deleted successfully!");
  }
};

main();
