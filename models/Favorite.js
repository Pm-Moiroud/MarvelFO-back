const mongoose = require("mongoose");

// Build Favorite model

const Favorite = mongoose.model("Favorite", {
  name: String,
  picture: String,
  extension: String,
  description: String,
  userId: String,
  key: String,
});

module.exports = Favorite;
