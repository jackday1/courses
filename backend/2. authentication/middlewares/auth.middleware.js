const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET_KEY);

    next();
  } catch (err) {
    res.status(401).send(err.message);
  }
};

module.exports = auth;
