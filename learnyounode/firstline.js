var path = process.argv[2];

var amountOfLines = function(filePath) {
  var fs = require('fs')
  var currentFile = fs.readFileSync(filePath)
  var strFile = currentFile.toString();
  var splitFile = strFile.split('\n');

  console.log(splitFile.length -1);
  return splitFile.length - 1;

};

amountOfLines(path);