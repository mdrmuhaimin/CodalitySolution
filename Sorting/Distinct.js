/**
 * Created by muhammadmuhaimin on 2015-11-03.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  A.sort(function (a, b) {
    return a - b;
  });
  var result = A.length;
  for (var i = 0; i < A.length; i++) {
    var value = A[i];
    for (; A[i] === A [i + 1] && i < A.length; i++) {
      result--;
    }
  }
  return result;
}