const fs = require("fs");
const { nanoid } = require("nanoid");
const validator = require("validator");

const dbPath = `${__dirname}/../db.json`;

module.exports.get = (req, res) => {
  try {
    const usersStringify = fs.readFileSync(dbPath, { encoding: "utf8" });
    const users = JSON.parse(usersStringify);

    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.getById = (req, res) => {
  try {
    const { id } = req.params;
    const usersStringify = fs.readFileSync(dbPath, { encoding: "utf8" });
    const users = JSON.parse(usersStringify);

    const user = users.find((item) => item.id === id);
    if (!user) throw new Error("Not found");

    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.create = (req, res) => {
  try {
    const { email, name } = req.body;
    if (!email || validator.isEmpty(email.trim()))
      throw new Error("Email is empty");
    if (!validator.isEmail(email)) throw new Error("Email is invalid");
    if (!name || validator.isEmpty(name.trim()))
      throw new Error("Name is empty");

    const usersStringify = fs.readFileSync(dbPath, { encoding: "utf8" });
    const users = JSON.parse(usersStringify);

    const existedUser = users.find((item) => item.email === email);
    if (existedUser) throw new Error("Email existed");

    const newUser = { id: nanoid(8), email, name };
    users.push(newUser);
    fs.writeFileSync(dbPath, JSON.stringify(users), { encoding: "utf8" });

    res.sendStatus(200);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.update = (req, res) => {
  try {
    const { id } = req.params;
    const { email, name } = req.body;

    const usersStringify = fs.readFileSync(dbPath, { encoding: "utf8" });
    const users = JSON.parse(usersStringify);

    const user = users.find((item) => item.id === id);
    if (!user) throw new Error("User doesnt exist");

    if (!email || validator.isEmpty(email.trim()))
      throw new Error("Email is empty");
    if (!validator.isEmail(email)) throw new Error("Email is invalid");
    if (!name || validator.isEmpty(name.trim()))
      throw new Error("Name is empty");

    const existedUserEmail = users.find(
      (item) => item.id !== id && item.email === email
    );
    if (existedUserEmail) throw new Error("Email existed");

    user.email = email;
    user.name = name;

    fs.writeFileSync(dbPath, JSON.stringify(users), { encoding: "utf8" });

    res.sendStatus(200);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.remove = (req, res) => {
  try {
    const { id } = req.params;

    const usersStringify = fs.readFileSync(dbPath, { encoding: "utf8" });
    const users = JSON.parse(usersStringify);

    const user = users.find((item) => item.id === id);
    if (!user) throw new Error("User doesnt exist");

    const newUsers = users.filter((item) => item.id !== id);

    fs.writeFileSync(dbPath, JSON.stringify(newUsers), { encoding: "utf8" });

    res.sendStatus(200);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
