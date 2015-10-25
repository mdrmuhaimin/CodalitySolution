/**
 * Created by muhammadmuhaimin on 2015-10-25.
 */

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  A.sort(function (a, b) {
    return a - b;
  });
  var expectation = 1;
  for (var i = 0; i < A.length; i++) {
    if (A[i] === expectation) {
      expectation++;
    }
  }
  return expectation;
}
