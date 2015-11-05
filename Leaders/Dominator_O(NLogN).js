/**
 * Created by muhammadmuhaimin on 2015-11-06.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var sortedArray = A.slice();
  sortedArray.sort(function (a, b) {
    return a - b;
  });
  var candidate = sortedArray[Math.floor(sortedArray.length / 2)];
  var count = 0;
  var indexOfOccurance = -1;
  A.forEach(function (value, index) {
    if (value === candidate) {
      indexOfOccurance = index;
      count++;
    }
  });
  if (count > A.length / 2) {
    return indexOfOccurance;
  }
  return -1;
}