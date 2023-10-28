const express = require("express");
const router = express.Router();

const certificateController = require("../controllers/CertificateController");

//information.index
router.use("/", certificateController.index);

module.exports = router;
