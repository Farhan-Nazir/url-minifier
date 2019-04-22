const express = require("express");
let router = express.Router();
let urlShortner = require("../lib/url-shortner");

router
  .route("/api/:longURL(*)")
  .get((req, res, next) => {
    const { longURL } = req.params;
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
  })
  .post((req, res) => {
    const { longURL } = req.body;
    let data = urlShortner.shortenURL(longURL);
    res.json({
      originalURL: data.originalURL,
      shortURL: data.shortURL
    });
  });

module.exports = router;
