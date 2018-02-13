var fetchival = require('fetchival');
fetchival.fetch = require('node-fetch');

require('dotenv').config();

getPoints = function(cb) {
    console.log('blah');
    fetchival('http://localhost:4567/api/v1/pickup_locations?q=SE1%200SW')
      .get()
      .then(function(response) {
        console.log('hello?');
        cb(response);
      });
};

exports.getPoints = getPoints;
