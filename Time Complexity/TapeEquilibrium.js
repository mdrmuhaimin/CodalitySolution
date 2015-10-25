/**
 * Created by muhammadmuhaimin on 2015-10-23.
 */


function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var sum = getArraySum(A);
  var diff = getCurDiff(A[0], sum);
  var partialSum = 0;
  A.forEach(function (value, index, array) {
    partialSum += value;
    if (index === 0 || index + 1 === array.length) {
      return;
    }
    var currDiff = getCurDiff(partialSum, sum);
    if (currDiff < diff) {
      diff = currDiff;
    }
  });
  return diff;
}

function getCurDiff(partialSum, sum) {
  return Math.abs(partialSum - (sum - partialSum));
}

function getArraySum(array) {
  var sum = 0;
  array.forEach(function (value) {
    sum += value;
  });
  return sum;
}
