const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Information = new Schema({
  fullName: { type: String },
  dateOfBirth: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Information", Information);
