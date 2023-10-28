const Information = require("../models/Information");

class InformationController {
  index(req, res, next) {
    Information.find({})
      .then((infor) => res.json(infor))
      .catch(next);
    // res.json({ message: "Data infor" });
  }
}

module.exports = new InformationController();
