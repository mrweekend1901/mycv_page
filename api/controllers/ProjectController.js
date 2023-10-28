const Project = require("../models/Projects");

class ProjectController {
  index(req, res, next) {
    Project.find({})
      .then((project) => res.json(project))
      .catch(next);
  }
}

module.exports = new ProjectController();
