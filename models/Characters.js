const mongoose = require("mongoose");

// Build Character model

const Character = mongoose.model("Character", {
  name: String,
  description: String,
  comics: Array,
  thumbnail: { path: String, extension: String },
  id: String,
});

module.exports = Character;
