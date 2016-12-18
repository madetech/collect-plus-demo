var express = require('express');
var router = express.Router();
var tims = require('../parser/tims');

require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  getPoints(function(points) {
      res.render('index', {
          google_maps_api_key: process.env.GOOGLE_MAPS_API_KEY,
          points: points
      });
  });
});

module.exports = router;
