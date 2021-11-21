const express = require("express");
const mongoose = require("mongoose");
const formidable = require("express-formidable");
const cors = require("cors");
const app = express();

app.use(formidable());
app.use(cors());

// dotenv
require("dotenv").config();

// connect heroku
mongoose.connect(process.env.MONGODB_URI);

app.use(function (err, req, res, next) {
  res.json({ error: err.message });
});

// roads
const userRoutes = require("./routes/user");
app.use(userRoutes);

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

const favoriteRoutes = require("./routes/favorite");
app.use(favoriteRoutes);

app.get("/", (req, res) => {
  res.json("Voici l'API Marvel dev. par Pierre-matisse ");
});

// start
const server = app.listen(process.env.PORT, () => {
  console.log("Server ON");
});
