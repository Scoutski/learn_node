var fs = require('fs');
var args = process.argv[2];

var readLines = function(path) {
  
  var file = fs.readFile(path);

  fs.readFile(path, 'utf8', function doneReading(err, fileContents) {
    fileContents = fileContents.toString().split('\n').length - 1;
    console.log(fileContents);
  });
};

readLines(args);