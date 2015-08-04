var sumArgs = function(args) {
  var result = 0;
  for (var i = 2; i < args.length; i++ ) {
    result += parseInt(args[i]);
  }
  console.log(result);
};

// console.log(process.argv[2]);

sumArgs(process.argv);