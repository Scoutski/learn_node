var welcomeMessage = function() {
console.log("welcome to the great underground empire")
}
welcomeMessage()
var start = function(callback) {
callback()
}
start(welcomeMessage)
var look = function(dir) {
if (dir === 'west') {
  console.log('there is a small mailbox here.');
  }
if (dir === "east") { console.log('You are standing next to a whitehouse'); }
}
var walk = function(dir) {
if (dir === 'west') { console.log("It's very dark, you are likely to be eaten by a grue."); }
if (dir === 'south') { console.log("You are standing on the edge of a deep chasm."); }
}
var getInput = function(param, cb) {
cb(param);
}
getInput('west', walk)
getInput('west', look)
