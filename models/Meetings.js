const { Schema, model } = require("mongoose");

const schema = new Schema({
  userName: { type: String },
  number: { type: String },
  date: { type: String },
  month: { type: String },
  time: { type: String },
  docName: { type: String },
  info: { type: String },
});

module.exports = model("Meetings", schema);
