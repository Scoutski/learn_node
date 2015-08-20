var net = require('net');
var strftime = require('./strftime.js');
var port = process.argv[2];

var server = net.createServer(function(socket) {
  var time = strftime('%Y-%m-%d %H:%M');
  time = time + '\n';
  socket.write(time);
  socket.end();
});
server.listen(port);