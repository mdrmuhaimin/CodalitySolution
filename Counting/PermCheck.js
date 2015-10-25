/**
 * Created by muhammadmuhaimin on 2015-10-25.
 */

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  A.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) {
      return 0;
    }
  }
  return 1;
}
