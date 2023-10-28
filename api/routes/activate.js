const express = require("express");
const router = express.Router();

const activateController = require("../controllers/ActivateController");

//information.index
router.use("/", activateController.index);

module.exports = router;
