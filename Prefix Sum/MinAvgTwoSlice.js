function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var sumArray = [];
  var prefixSumArray = [];
  var sum = 0;
  var len = A.length;
  A.forEach(function (value) {
    prefixSumArray.push(sum);
    sum += value;
    sumArray.push(sum);
  });
  var left = getSmallestLeftPos();
  var right = getSmallestRight();
  if (left.index < right.index) {
    return left.index;
  }
  if (left.value < right.value) {
    return left.index;
  }
  return 0;
  function getSmallestLeftPos() {
    var smallestLeft = {index: 0, value: sum / len};
    A.forEach(function (value, element) {
      if (element === len - 1) {
        return;
      }
      var subArraySum = sum - prefixSumArray[element];
      var subArrayLen = len - element;
      var subArrayAvg = subArraySum / subArrayLen;
      if (subArrayAvg < smallestLeft.value) {
        smallestLeft.index = element;
        smallestLeft.value = subArrayAvg;
      }
    });
    return smallestLeft;
  }

  function getSmallestRight() {
    var smallestRight = {index: len - 1, value: sum / len};
    for (var i = len - 1; i > 0; i--) {
      var subArraySum = sumArray[i];
      var subArrayLen = i + 1;
      var subArrayAvg = subArraySum / subArrayLen;
      if (subArrayAvg < smallestRight.value) {
        smallestRight.index = i;
        smallestRight.value = subArrayAvg;
      }
    }
    return smallestRight;
  }
}