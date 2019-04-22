const express = require("express");
let router = express.Router();
let urlShortner = require("../lib/url-shortner");

router.route("/api/:longURL(*)").post((req, res) => {
  const { longURL } = req.body;
  try {
    let data = urlShortner.shortenURL(longURL, req);
    res.json({
      originalURL: data.originalURL,
      shortURL: data.shortURL
    });
  } catch (error) {
    res.json({
      error: "Invalid URL!!!!!!!"
    });
  }
});

module.exports = router;
