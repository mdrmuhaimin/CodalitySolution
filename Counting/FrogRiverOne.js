/**
 * Created by muhammadmuhaimin on 2015-10-25.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(X, A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var elementCount = [];
  var steps = X;
  for (var i = 0; i < X + 1; i++) {
    elementCount.push(0);
  }
  for (i = 0; i < A.length; i++) {
    if (A[i] <= X && elementCount[A[i]] === 0) {
      elementCount[A[i]] = 1;
      steps--;
    }
    if (steps === 0) {
      return i;
    }
  }
  return -1;
}