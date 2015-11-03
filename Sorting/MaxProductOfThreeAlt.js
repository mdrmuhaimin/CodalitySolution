/**
 * Created by muhammadmuhaimin on 2015-11-02.
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// This is solution for the problem without using sorting. Where instead of sorting we collect only max 3 and min 2 elements
// The worst case scenario for the problem if the array is already sorted. In that case the runtime would O(N),
// if needed this solution can also return index of the maximal element along with elements

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var max3elems = [-1000, -1000, -1000];
  var min2s = [1000, 1000];
  var maxIndex = [0, 0, 0];
  A.forEach(function (element, index) {
    maxInsert(element, index);
    minInsert(element, index);
  });
  function maxInsert(element, index) {
    if (element > max3elems[0]) {
      if (element > max3elems[1]) {
        if (element > max3elems[2]) {
          var tempElem2 = max3elems[2];
          var tempIndex2 = maxIndex[2];
          max3elems[2] = element;
          maxIndex[2] = index;
          maxInsert(tempElem2, tempIndex2);
        }
        else {
          var tempElem = max3elems[1];
          var tempIndex = maxIndex[1];
          max3elems[1] = element;
          maxIndex[1] = index;
          maxInsert(tempElem, tempIndex);
        }
      }
      else {
        max3elems[0] = element;
        maxIndex[0] = index;
      }
    }
  }

  function minInsert(element, index) {
    if (element < min2s[0]) {
      if (element < min2s[1]) {
        min2s[0] = min2s[1];
        min2s[1] = element;
      }
      else {
        min2s[0] = element;
      }
    }
  }

  return Math.max(max3elems[0] * max3elems[1] * max3elems[2], min2s[0] * min2s[1] * max3elems[2]);
}