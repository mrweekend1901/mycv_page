const express = require("express");
const router = express.Router();

const informationController = require("../controllers/InformationController");

//information.index
router.use("/", informationController.index);

module.exports = router;
