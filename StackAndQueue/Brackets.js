/**
 * Created by muhammadmuhaimin on 2015-11-05.
 */
// you can write to stdout for debugging purposes, e.g.


function solution(S) {
  // write your code in JavaScript (Node.js 4.0.0)
  var stringArray = S.split("");
  var bracketStack = [];
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === '(' || stringArray[i] === '{' || stringArray[i] === '[') {
      bracketStack.push(stringArray[i]);
    }
    else {
      if (getInvert(stringArray[i]) !== bracketStack.pop()) {
        return 0;
      }
    }
  }
  if (bracketStack.length > 0) {
    return 0
  }
  return 1;
}

function getInvert(bracket) {
  if (bracket === ')')
    return '(';
  if (bracket === '}')
    return '{';
  if (bracket === ']')
    return '[';
}