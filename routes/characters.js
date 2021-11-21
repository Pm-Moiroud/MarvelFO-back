const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

// 1 road, get characters
router.get("/characters", async (req, res) => {
  try {
    const params = req.query;
    const queryString = Object.keys(params)
      .filter((key) => !!params[key])
      .map((key) => key + "=" + params[key])
      .join("&");

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?&apiKey=${process.env.API_KEY}&${queryString}`
    );

    res.json(response.data.results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
