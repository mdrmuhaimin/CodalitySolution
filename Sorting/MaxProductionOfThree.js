// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  A.sort(function (a, b) {
    return a - b;
  });
  var lastIndex = A.length - 1;
  return Math.max(A[0] * A[1] * A[lastIndex], A[lastIndex - 2] * A[lastIndex - 1] * A[lastIndex]);
}