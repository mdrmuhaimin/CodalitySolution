/**
 * Created by muhammadmuhaimin on 2015-10-25.
 */

function solution(N, A) {
  // write your code in JavaScript (Node.js 4.0.0)

  //Create array size of N with all 0s
  //var resultArray = [];
  //for( var k = 0; k < N; k++ ){
  //  resultArray.push(0);
  //}
  var resultArray = new Uint32Array(N);
  var realMax = 0;
  var max = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      resultArray[A[i] - 1] += 1;
      if (max < resultArray[A[i] - 1]) {
        max = resultArray[A[i] - 1];
      }
    }
    if (A[i] > N) {
      resultArray = new Uint32Array(N);
      realMax += max;
      max = 0;
    }
  }
  for (i = 0; i < resultArray.length; i++) {
    resultArray[i] += realMax;
  }
  return resultArray;
}
