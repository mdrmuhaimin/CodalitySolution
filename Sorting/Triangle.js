// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  A.sort(function (a, b) {
    return a - b;
  });
  for (var i = 2; i < A.length; i++) {
    if (A[i - 2] >= 0 && A[i - 2] + A[i - 1] > A[i]) {
      return 1;
    }
  }
  return 0;
}