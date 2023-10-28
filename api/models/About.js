const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const About = new Schema({
  name: { type: String },
  img: { type: String },
  fb: { type: String },
  insta: { type: String },
  git: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("About", About);
