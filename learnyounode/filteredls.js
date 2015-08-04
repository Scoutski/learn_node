var fs = require('fs');
var path = require('path');

// process.argv return any command line arguments to JS.
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, data) {
  for (var i = 0; i < data.length; i ++) {
    if (path.extname(data[i]) === ('.' + ext)) {
        console.log(data[i]);
    };
  };

});