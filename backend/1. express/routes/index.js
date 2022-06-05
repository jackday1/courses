const express = require("express");
const userRoute = require("./user.route");

const router = express.Router();

router.use("/v1/users", userRoute);

module.exports = router;
