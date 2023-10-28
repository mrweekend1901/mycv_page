const Otherskill = require("../models/Otherskill");

class OtherskillController {
  index(req, res, next) {
    Otherskill.find({})
      .then((otherskill) => res.json(otherskill))
      .catch(next);
  }
}

module.exports = new OtherskillController();
