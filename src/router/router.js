const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

router.get("/", class1.a);
router.get("/:id", class1.b);

module.exports = router;
