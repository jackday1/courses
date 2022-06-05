const fs = require("fs");
const passwordHash = require("password-hash");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const { nanoid } = require("nanoid");

const dbPath = `${__dirname}/../db.json`;

module.exports.logIn = (req, res) => {
  try {
    const { email, password } = req.body;
    const usersStringify = fs.readFileSync(dbPath, { encoding: "utf8" });
    const users = JSON.parse(usersStringify);

    const user = users.find((item) => item.email === email);
    if (!user) throw new Error("Bad credential");

    const passwordIsCorrect = passwordHash.verify(password, user.password);
    if (!passwordIsCorrect) throw new Error("Bad credential");

    const data = { id: user.id, email: user.email, name: user.name };
    const accessToken = jwt.sign(
      data,
      process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
      {
        expiresIn: process.env.JWT_ACCESS_TOKEN_LIFE,
      }
    );

    res.status(200).send({ data, accessToken });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.signUp = (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || validator.isEmpty(email.trim()))
      throw new Error("Email is empty");
    if (!validator.isEmail(email)) throw new Error("Email is invalid");
    if (!name || validator.isEmpty(name.trim()))
      throw new Error("Name is empty");

    if (
      !password ||
      validator.isEmpty(password.trim()) ||
      password.trim().length < 8
    )
      throw new Error("Password is invalid");

    const usersStringify = fs.readFileSync(dbPath, { encoding: "utf8" });
    const users = JSON.parse(usersStringify);

    const existedUser = users.find((item) => item.email === email);
    if (existedUser) throw new Error("Email existed");

    const newUser = {
      id: nanoid(8),
      email,
      name,
      password: passwordHash.generate(password),
    };
    users.push(newUser);
    fs.writeFileSync(dbPath, JSON.stringify(users), { encoding: "utf8" });

    res.sendStatus(201);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
