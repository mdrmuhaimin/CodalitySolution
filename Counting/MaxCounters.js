/**
 * Created by muhammadmuhaimin on 2015-10-25.
 */
/*
 This is not the optimal solution, this code's runtime complexity is O(n*m) whether we are looking for a
 solution with run time complexity of O(n+m)
 */


function solution(N, A) {
  // write your code in JavaScript (Node.js 4.0.0)

  var resultArray = new Uint32Array(N);
  var max = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      resultArray[A[i] - 1] += 1;
      if (max < resultArray[A[i] - 1]) {
        max = resultArray[A[i] - 1];
      }
    }
    if (A[i] > N) {
      for (k = 0; k < resultArray.length; k++) {
        resultArray[k] = max;
      }
    }

  }
  return resultArray;
}