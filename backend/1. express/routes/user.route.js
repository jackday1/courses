const express = require("express");
const controllers = require("../controllers/user.controller");

const router = express.Router();

router.get("/", controllers.get);
router.get("/:id", controllers.getById);
router.post("/", controllers.create);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.remove);

module.exports = router;
