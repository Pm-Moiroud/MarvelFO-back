const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

// get all comics
router.get("/comics", async (req, res) => {
  try {
    const params = req.query;
    const queryString = Object.keys(params)
      .filter((key) => !!params[key])
      .map((key) => key + "=" + params[key])
      .join("&");

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?&apiKey=${process.env.API_KEY}&${queryString}`
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// road for handling the click on a perso
router.get("/comics/:characterId", async (req, res) => {
  const characterId = req.params.characterId;
  const address = `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`;

  console.log(address);
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
