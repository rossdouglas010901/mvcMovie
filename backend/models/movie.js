const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  Description: { type: String, required: true },
  imagePath: { type: String, required: true },
  genre: { type: String, required: true }
});

module.exports = mongoose.model("Movie", postSchema);
