/**
 * Created by muhammadmuhaimin on 2015-11-08.
 */
//solution(26, [1], [26]);
function solution(N, P, Q) {
  // write your code in JavaScript (Node.js 4.0.0)
  var factorization = [];
  var semiprimes = [];
  var semiprimeSum = [];
  var result = [];
  for (var i = 0; i <= N; i++) {
    factorization[i] = 0;
  }
  for (i = 0; i <= N; i++) {
    semiprimes[i] = 0;
  }
  for (i = 2; i * i <= N; i++) {
    if (factorization[i] === 0) {
      for (var k = i; k <= N; k += i) {
        if (factorization[k] === 0) {
          factorization[k] = i;
        }
      }

    }
  }
  for (i = 0; i < factorization.length; i++) {
    if (isPrime(factorization, i / factorization[i])) {
      semiprimes[i] = 1;
    }
  }

  var sum = 0;
  for (i = 0; i < semiprimes.length; i++) {
    sum += semiprimes[i];
    semiprimeSum[i] = sum;
  }

  for (i = 0; i < P.length; i++) {
    result.push(semiprimeSum[Q[i]] - semiprimeSum[P[i] - 1]);
  }

  return result;

}
function isPrime(A, index) {
  if (index > 1 && A[index] === 0 || A[index] === index) {
    return true;
  }
  return false;
}

