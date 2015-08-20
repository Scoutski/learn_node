var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
  var result = '';
  res.setEncoding('utf8');
  res.on('err', function(err) {
    console.log(err);
  });
  res.on('data', function(chunk) {
    result += chunk;
  });
  res.on('end', function() {
    console.log(result.length);
    console.log(result);
  });
});