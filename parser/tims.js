var https = require('https');
var fs = require('fs');
var xml2js = require('xml2js');

require('dotenv').config();

var download = function(url, dest, cb) {
    var file = fs.createWriteStream(dest);
    var request = https.get(url, function(response) {
        response.pipe(file);
        file.on('finish', function() {
            file.close(cb);
        });
    });
};

getPoints = function() {
    download(process.env.TIMS_FEED_URL, "./parser/latest.xml", function() {
        var parser = new xml2js.Parser();

        fs.readFile(__dirname + '/latest.xml', function(err, data) {
            parser.parseString(data, function (err, result) {

                var no_of_disruptions = result.Root.Disruptions[0].Disruption.length;
                for (index = 0; index < no_of_disruptions; ++index) {
                    var disruption = result.Root.Disruptions[0].Disruption[index];

                    var coordsLL = disruption.CauseArea[0].DisplayPoint[0].Point[0].coordinatesLL[0];
                    console.log(coordsLL);
                }
            });
        });
    })
};

exports.getPoints = getPoints;