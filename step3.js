var https = require('https');
function getAndPrintHTML (options) {

  /* Add your code here */
  var stream = "";

  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      stream += data;
    });
    // // the callback is invoked when an error occurs
    // response.on('error', function (data) {
    //   console.error(error,message);
    // });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('\n buffer', stream);
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
