var https = require('https');
function getHTML (options, callback) {

  /* Add your code here */
  var stream = "";
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      stream += data;
    });

    response.on('end', function() {
      console.log('\n buffer', stream);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML (requestOptions, printHTML);
