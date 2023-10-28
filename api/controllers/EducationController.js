const Education = require("../models/Education");

class EducationController {
  index(req, res, next) {
    Education.find({})
      .then((edu) => res.json(edu))
      .catch(next);
    // res.json({ message: "Data infor" });
  }
}

module.exports = new EducationController();
