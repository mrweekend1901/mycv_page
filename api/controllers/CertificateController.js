const Certificate = require("../models/Certificate");

class CertificateController {
  index(req, res, next) {
    Certificate.find({})
      .then((item) => res.json(item))
      .catch(next);
    // res.json({ message: "Data infor" });
  }
}

module.exports = new CertificateController();
