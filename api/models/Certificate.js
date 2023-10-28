const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Certificate = new Schema({
  name: { type: String },
  time: { type: String },
  desc: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Certificate", Certificate);
