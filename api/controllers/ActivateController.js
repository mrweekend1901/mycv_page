const Activate = require("../models/Activate");

class ActivateController {
  index(req, res, next) {
    Activate.find({})
      .then((item) => res.json(item))
      .catch(next);
    // res.json({ message: "Data infor" });
  }
}

module.exports = new ActivateController();
