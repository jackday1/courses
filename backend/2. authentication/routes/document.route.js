const express = require("express");
const controllers = require("../controllers/document.controller");

const router = express.Router();

router.get("/", controllers.get);

module.exports = router;
