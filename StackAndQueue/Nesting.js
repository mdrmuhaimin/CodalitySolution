/**
 * Created by muhammadmuhaimin on 2015-11-05.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 4.0.0)
  var stringArray = S.split("");
  var nestCounter = 0;
  stringArray.every(function (value, element) {
    if (value === '(') {
      nestCounter++;
    }
    if (value === ')') {
      nestCounter--;
    }
    if (nestCounter < 0) {
      return false;
    }
    return true;
  });
  if (nestCounter === 0) {
    return 1;
  }
  return 0;
}
