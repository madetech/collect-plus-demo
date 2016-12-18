var express = require('express');
var router = express.Router();

require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    google_maps_api_key: process.env.GOOGLE_MAPS_API_KEY
  });
});

module.exports = router;
