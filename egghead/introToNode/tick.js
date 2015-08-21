console.log('start');
// 1 runs first.
process.nextTick(function() {
  // nextTick doesn't do anything with the first pass through.
  console.log('nextTick callback');
  // 4 runs third.
});
console.log('scheduled');
// 7 runs second.