const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Contact = new Schema({
  name: { type: String },
  jd: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", Contact);
