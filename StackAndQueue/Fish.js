/**
 * Created by muhammadmuhaimin on 2015-11-05.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function Fish(size, direction) {
  this.size = size;
  this.direction = direction;
}

function getAliveFish(fish1, fish2) {
  if (fish1.size > fish2.size) {
    return fish1;
  }
  return fish2;
}

function solution(A, B) {
  // write your code in JavaScript (Node.js 4.0.0)
  var fishStack = [];
  for (var i = 0; i < A.length; i++) {
    var fishAlive = new Fish(A[i], B[i]);
    var fishTop = fishStack.pop();
    while (typeof fishTop !== 'undefined' && fishAlive.direction < fishTop.direction) {
      fishAlive = getAliveFish(fishAlive, fishTop);
      fishTop = fishStack.pop();
    }
    if (typeof fishTop !== 'undefined') {
      fishStack.push(fishTop);
    }
    fishStack.push(fishAlive);
  }
  return fishStack.length;
}