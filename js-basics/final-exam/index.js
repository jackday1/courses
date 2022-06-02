const fs = require("fs");
const readlineSync = require("readline-sync");
const { printTable } = require("console-table-printer");
const { nanoid } = require("nanoid");

const main = () => {
  const options = ["CREATE", "READ", "UPDATE", "DELETE"];

  const index = readlineSync.keyInSelect(options, "Choose an option?");

  const option = options[index];

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
  }
};

const create = () => {
  const email = readlineSync.question("Please fill in user's email? ");
  const name = readlineSync.question("Plase fill in user's name? ");

  const usersString = fs.readFileSync("./db.json", { encoding: "utf8" });
  const users = JSON.parse(usersString);

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

  const newEmail = readlineSync.question(
    "Please fill in new user's email? (Leave blank to keep the current email)"
  );
  const newName = readlineSync.question(
    "Please fill in new user's name? (Leave blank to keep the current name)"
  );

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
    "Are you sure you want to delete this user?"
  );
  if (confirm) {
    const newUsers = users.filter((item) => item.id !== user.id);
    const newUsersString = JSON.stringify(newUsers);
    fs.writeFileSync("./db.json", newUsersString, { encoding: "utf8" });
    console.log("User is deleted successfully!");
  }
};

main();
