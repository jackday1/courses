const express = require("express");
const authRoute = require("./auth.route");
const documentRoute = require("./document.route");

const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.use("/v1/auth", authRoute);
router.use("/v1/documents", auth, documentRoute);

module.exports = router;
