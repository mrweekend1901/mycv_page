const About = require("../models/About");

class AboutController {
  index(req, res, next) {
    About.find({})
      .then((item) => res.json(item))
      .catch(next);
    // res.json({ message: "Data infor" });
  }
}

module.exports = new AboutController();
