const express = require("express");
const router = express.Router();

const projectController = require("../controllers/ProjectController");

//information.index
router.use("/", projectController.index);

module.exports = router;
