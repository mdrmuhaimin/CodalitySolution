function solution(A, B, K) {
  if (A === 0) {

    return 1 + Math.floor(B / K);
  }
  var divCountB = Math.floor(B / K);
  var divCountA = Math.floor((A - 1) / K);
  if (divCountB > divCountA) {
    return divCountB - divCountA;
  }
  if (A % K === 0 || B % K === 0) {
    return 1;
  }
  return 0;
}