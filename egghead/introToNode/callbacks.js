var welcomeMessage = function() {
console.log("welcome to the great underground empire")
}
welcomeMessage()
var start = function(callback) {
callback()
}
start(welcomeMessage)
