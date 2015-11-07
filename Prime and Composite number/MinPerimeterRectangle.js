/**
 * Created by muhammadmuhaimin on 2015-11-07.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 4.0.0)
  var sideA = 0,
    i = 1;
  var result = i;
  while (i * i < N) {
    if (N % i === 0) {
      result = i;
    }
    i++;
  }
  if (i * i === N) {
    result = i;
  }
  return 2 * (result + (N / result))
}