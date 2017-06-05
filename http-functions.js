var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
    var stream = "";
    https.get(options, function (response) {
      response.setEncoding('utf8');
      response.on('data', function (data) {
        stream += data;
      });

      response.on('end', function() {
        callback(stream);
      });
    });
};

var getHTML = require('./http-functions');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML (requestOptions, printHTML);
