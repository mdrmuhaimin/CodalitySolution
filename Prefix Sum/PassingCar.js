/**
 * Created by muhammadmuhaimin on 2015-10-27.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var carInFront = [];
  var sum = 0;
  while (A.length !== 0) {
    var car = A.pop();
    if (car === 1) {
      sum++;
      carInFront.push(0);// This line is optional but if the problem statement asked to get passing car for any specific one then this line of code will do it.
    }
    else {
      carInFront.push(sum);
    }
  }
  var carInFrontSum = 0;
  carInFront.forEach(function (element) {
    carInFrontSum += element;
  });
  if (carInFrontSum > 1000000000) {
    return -1;
  }
  return carInFrontSum;
}
