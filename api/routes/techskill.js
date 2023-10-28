const express = require("express");
const router = express.Router();

const techskillController = require("../controllers/TechskillController");

//information.index
router.use("/", techskillController.index);

module.exports = router;
