const express = require("express");
const router = express.Router();

const otherskillController = require("../controllers/OtherskillController");

//information.index
router.use("/", otherskillController.index);

module.exports = router;
