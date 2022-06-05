const express = require("express");
const controllers = require("../controllers/auth.controller");

const router = express.Router();

router.post("/logIn", controllers.logIn);
router.post("/signUp", controllers.signUp);

module.exports = router;
