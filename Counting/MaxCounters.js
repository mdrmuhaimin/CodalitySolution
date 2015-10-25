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
  var resultArray = Array.apply(null, Array(N)).map(function () {
    return 0
  });

  var max = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      resultArray[A[i] - 1] += 1;
      if (max < resultArray[A[i] - 1]) {
        max = resultArray[A[i] - 1];
      }
    }
    if (A[i] > N) {
      setValue(max);
    }
  }
  function setValue(value) {
    resultArray = Array.apply(null, Array(N)).map(function () {
      return value
    });
  }

  return resultArray;
}
