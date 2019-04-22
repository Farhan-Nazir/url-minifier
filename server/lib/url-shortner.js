/* Author: Farhan Nazir */
"use strict";
let randomAlphaNumeric = () => {
  let result = "";
  let alphaNumeric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 6; i++)
    result += alphaNumeric.charAt(
      Math.floor(Math.random() * alphaNumeric.length)
    );
  return result;
};

let validate = link => {
  let validationHttp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  let validationUrl = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  let regexHTTP = new RegExp(validationHttp);
  let regexUrl = new RegExp(validationUrl);
  return link.match(regexHTTP) || link.match(regexUrl) ? true : false;
};

let getHostname = req => `${req.protocol}://${req.headers.host}/`;

module.exports.shortenURL = (url, req) => {
  if (validate(url)) {
    let originalURL =
    url.includes("http") || url.includes("https") ? url : `http://${url}`;

  return { shortURL: getHostname(req) + randomAlphaNumeric(), originalURL };
  } else {
    throw new Error();
    
  }
};
