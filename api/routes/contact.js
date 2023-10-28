const express = require("express");
const router = express.Router();

const contactController = require("../controllers/ContactController");

//information.index
router.post("/", contactController.create);

module.exports = router;
