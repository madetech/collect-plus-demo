var express = require('express');
var router = express.Router();
var tims = require('../parser/tims');

require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  var points = tims.getPoints();

  res.render('index', {
    google_maps_api_key: process.env.GOOGLE_MAPS_API_KEY
  });
});

module.exports = router;
