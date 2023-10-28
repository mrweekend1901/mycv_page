const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Education = new Schema({
  school: { type: String },
  schooldesc: { type: String },
  study: { type: String },
  img: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Education", Education);
