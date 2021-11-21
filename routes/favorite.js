const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated.js");

// import models
const Favorite = require("../models/Favorite");

// addFavorite
router.post("/addfavorite", async (req, res) => {
  try {
    const { name, description, picture, extension, key, userId } = req.fields;

    console.log(req.fields);

    if (name) {
      const newFavorite = new Favorite({
        name,
        description,
        picture,
        extension,
        userId,
        key,
      });

      await newFavorite.save();
      console.log(newFavorite);
      res.json(newFavorite);
    } else {
      res.status(400).json({ message: "Name is required" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

// delete favorite
router.delete("/deletefavorite", async (req, res) => {
  const { id } = req.fields;

  deleteFavorite = await Favorite.findOne({ id: req.fields });

  await deleteFavorite.delete();
  console.log("Your fovaorite comics have been deleted");
  res.json("Your favorite comics have been deleted");
});

// get all favorite
router.get("/favorite", async (req, res) => {
  console.log(req.fields.headers);
  const userID = req.fields.userID;

  const getFavorite = await Favorite.find({ userID });

  res.json(getFavorite);
});

module.exports = router;
