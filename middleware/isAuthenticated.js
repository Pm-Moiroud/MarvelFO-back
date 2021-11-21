const User = require("../models/User");

const isAuthenticated = async (req, res, next) => {
  // token exist ?
  if (req.headers.authorization) {
    // change the string of req.headers
    const token = req.headers.authorization.replace("Bearer ", "");
    // find if token exist in db
    const user = await User.findOne({ token: token }).select("account _id");

    if (user) {
      req.user = user;
      next();
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = isAuthenticated;
