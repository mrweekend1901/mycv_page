const express = require("express");
const router = express.Router();

const educationController = require("../controllers/EducationController");

//information.index
router.use("/", educationController.index);

module.exports = router;
