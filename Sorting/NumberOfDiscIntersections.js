/**
 * Created by muhammadmuhaimin on 2015-11-03.
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var circleStart = [];
  var circleEnd = [];
  var circlesPoints = []; //Here 0 donates start point and 1 donates end point
  A.forEach(function (value, index) {
    circleStart.push(index - value);
    circleEnd.push(index + value);
  });
  circleStart.sort(function (a, b) {
    return a - b;
  });
  circleEnd.sort(function (a, b) {
    return a - b;
  });
  while (circleStart.length > 0 || circleEnd.length > 0) {
    if (circleStart[0] <= circleEnd[0]) {
      circlesPoints.push(0);
      circleStart.shift();
    }
    if (circleEnd[0] < circleStart[0] || circleStart.length === 0) {
      circlesPoints.push(1);
      circleEnd.shift();
    }
  }
  var currentInterSection = 0;
  var pairFound = 0;
  for (var i = 1; i < circlesPoints.length; i++) {
    if (circlesPoints[i] === 1) {
      pairFound += currentInterSection;
      currentInterSection--;
    }
    if (circlesPoints[i] === 0) {
      currentInterSection++
    }
  }
  if (pairFound > 10000000) {
    return -1;
  }
  return pairFound;
}