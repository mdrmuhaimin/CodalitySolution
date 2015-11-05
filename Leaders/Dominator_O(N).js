/**
 * Created by muhammadmuhaimin on 2015-11-06.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var stack = [];
  A.forEach(function (value, element) {
    if (stack.length > 0) {
      var stackTop = stack.pop();
      if (value === stackTop) {
        stack.push(stackTop);
        stack.push(value);
      }
    }
    else {
      stack.push(value);
    }
  });
  if (stack.length === 0) {
    return -1;
  }
  var candidate = stack[0];
  var count = 0;
  var indexOccurance = -1;
  A.forEach(function (value, index) {
    if (value === candidate) {
      count++;
      indexOccurance = index;
    }
  });
  if (count > Math.floor(A.length / 2)) {
    return indexOccurance;
  }
  return -1;
}