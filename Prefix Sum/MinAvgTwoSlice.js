//In this problem minimum slice array should be size of 2 or 3 not more than that.
function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var minSubArrayAvg = {index: 0, avg: (A[0] + A[1]) / 2};
  var thereeSizeAvg = 0, twoSizeAvg = 0;
  A.forEach(function (value, index) {
    if (index + 2 < A.length) {
      thereeSizeAvg = getArrayAvg(A.slice(index, index + 3));
      if (thereeSizeAvg < minSubArrayAvg.avg) {
        minSubArrayAvg.index = index;
        minSubArrayAvg.avg = thereeSizeAvg;
      }
    }

    if (index + 1 < A.length) {
      twoSizeAvg = getArrayAvg(A.slice(index, index + 2));
      if (twoSizeAvg < minSubArrayAvg.avg) {
        minSubArrayAvg.index = index;
        minSubArrayAvg.avg = twoSizeAvg;
      }
    }

  });
  return minSubArrayAvg.index;
}

function getArrayAvg(A) {
  var sum = 0;
  A.forEach(function (value) {
    sum += value;
  });
  return sum / A.length;
}