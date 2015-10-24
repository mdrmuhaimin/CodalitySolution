/**
 * Created by muhammadmuhaimin on 2015-10-25.
 */

function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 4.0.0)
  if (X === Y) return 0;
  var diff = Y - X;
  if ((diff % D) === 0) return diff / D;
  return Math.ceil(diff / D);
}
