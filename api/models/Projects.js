const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Projects = new Schema({
  name: { type: String },
  projectdesc: { type: String },
  tech: { type: Array },
  img: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Projects", Projects);
