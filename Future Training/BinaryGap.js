/**
 * Created by muhammadmuhaimin on 2015-11-08.
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 4.0.0)
  var binary = N.toString(2);
  //console.log(binary);
  var binaryArray = binary.split("1");
  var maxLen = 0;
  for (var i = 0; i < binaryArray.length - 1; i++) {
    if (binaryArray[i].length > maxLen) {
      maxLen = binaryArray[i].length;
    }
  }
  return maxLen;
}