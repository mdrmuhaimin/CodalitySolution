/**
 * Created by muhammadmuhaimin on 2015-11-05.
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// console.log("Solution: "+solution([8,8,5,7,9,8,7,4,8]));

function solution(H) {
  // write your code in JavaScript (Node.js 4.0.0)
  var stoneStack = [];
  var stoneCount = 0;
  for (var i = 0; i < H.length; i++) {
    var stoneStackTop = stoneStack.pop();
    if (stoneStackTop > H[i]) {
      while (stoneStackTop > H[i]) {
        stoneStackTop = stoneStack.pop();
      }
    }
    if (stoneStackTop === H[i]) {
      stoneStack.push(H[i]);
    }
    else if (stoneStackTop < H[i]) {
      stoneCount++;
      stoneStack.push(stoneStackTop);
      stoneStack.push(H[i]);
    }
    else {
      stoneCount++;
      stoneStack.push(H[i]);
    }
  }
  return stoneCount;
}
