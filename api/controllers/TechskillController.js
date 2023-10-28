const Techskill = require("../models/Techskill");

class TechskillController {
  index(req, res, next) {
    Techskill.find({})
      .then((techskill) => res.json(techskill))
      .catch(next);
  }
}

module.exports = new TechskillController();
