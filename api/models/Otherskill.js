const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Otherskill = new Schema({
  name: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Otherskill", Otherskill);
