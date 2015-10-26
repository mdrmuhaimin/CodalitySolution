/**
 * Created by muhammadmuhaimin on 2015-10-25.
 */

function solution(N, A) {
  // write your code in JavaScript (Node.js 4.0.0)

  var resultArray = new Uint32Array(N);
  var maximizedVal = 0;
  var max = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      if (resultArray[A[i] - 1] < maximizedVal) {
        resultArray[A[i] - 1] = maximizedVal;
      }
      resultArray[A[i] - 1] += 1;
      if (max < resultArray[A[i] - 1]) {
        max = resultArray[A[i] - 1];
      }
    }
    if (A[i] > N) {
      maximizedVal = max;
    }
  }
  for (i = 0; i < resultArray.length; i++) {
    if (resultArray[i] < maximizedVal) {
      resultArray[i] = maximizedVal;
    }
  }
  return resultArray;
}