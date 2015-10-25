/**
 * Created by muhammadmuhaimin on 2015-10-25.
 */
var result = solution([1, 3, 2, 4, 5, 6]);
console.log(result);
function solution(A) {
  A.sort(function (a, b) {
    return a - b;
  });
  A.push(-1);// An extra element is added to catch the missing last element.
  var result;
  A.some(function (value, index) {
    if (index !== value - 1) {
      result = index + 1;
      return true;
    }
  });
  return result;
}