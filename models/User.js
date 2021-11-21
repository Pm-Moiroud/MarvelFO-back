const mongoose = require("mongoose");

// Build User model
const User = mongoose.model("User", {
  email: {
    unique: true,
    type: String,
  },
  account: {
    username: {
      required: true,
      type: String,
    },
  },
  token: String,
  hash: String,
  salt: String,
});

/* export  */

module.exports = User;
