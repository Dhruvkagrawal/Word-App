const { Schema, model } = require("mongoose");

const wordSchema = new Schema(
  {
    words: { type: String, required: true, unique: true },
    count: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = model("data", wordSchema);
