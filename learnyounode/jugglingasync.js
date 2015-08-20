// This is the ugliest solution ever but shutup, don't judge me, I understand the node and writing it out three times helped me a lot.

var http = require('http');
var urlOne = process.argv[2];
var urlTwo = process.argv[3];
var urlThree = process.argv[4];
var strOne = '';
var strTwo = '';
var strThree = '';

http.get(urlOne, function(res) {
    res.setEncoding('utf8');
    res.on('err', function(err) {
        console.log(err);
    });
    res.on('data', function(chunk) {
        strOne = strOne + chunk;
    });
    res.on('end', function() {
      secondProcess();
    });
});

var secondProcess = function() {
    http.get(urlTwo, function(res) {
        res.setEncoding('utf8');
        res.on('err', function(err) {
            console.log(err);
        });
        res.on('data', function(chunk) {
            strTwo = strTwo + chunk;
        });
        res.on('end', function() {
          thirdProcess();
        });
    });
};

var thirdProcess = function() {
    http.get(urlThree, function(res) {
        res.setEncoding('utf8');
        res.on('err', function(err) {
            console.log(err);
        });
        res.on('data', function(chunk) {
            strThree = strThree + chunk;
        });
        res.on('end', function() {
          console.log(strOne);
          console.log(strTwo);
          console.log(strThree);
        });
    });
};
