/**
 * Created by muhammadmuhaimin on 2015-11-07.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 4.0.0)
  var i = 1;
  var result = 0;
  while (i * i < N) {
    if (N % i === 0) {
      result += 2;
    }
    i++;
  }
  if (i * i === N) {
    result++;
  }
  return result;
}