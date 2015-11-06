/**
 * Created by muhammadmuhaimin on 2015-11-06.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var leader = getLeader(A);
  if (leader === -1) {
    return 0;
  }
  var leaderCount = 0;
  var equileader = 0;
  for (var i = 0; i < A.length - 1; i++) {
    if (A[i] === leader.value) {
      leaderCount++;
    }
    // console.log(leaderCount+" : "+Math.floor( (i+1)/2 ));
    // console.log(( leader.occurance - leaderCount ) + " : " + Math.floor( (A.length - i - 1) / 2 ));
    if (leaderCount > Math.floor((i + 1) / 2) && ( leader.occurance - leaderCount ) > Math.floor((A.length - i - 1) / 2)) {
      equileader++;
    }
  }
  return equileader;
}

function getLeader(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var stack = [];
  A.forEach(function (value, element) {
    if (stack.length > 0) {
      var stackTop = stack.pop();
      if (value === stackTop) {
        stack.push(stackTop);
        stack.push(value);
      }
    }
    else {
      stack.push(value);
    }
  });
  if (stack.length === 0) {
    return -1;
  }
  var candidate = stack[0];
  var count = 0;
  var indexOccurance = -1;
  A.forEach(function (value, index) {
    if (value === candidate) {
      count++;
      indexOccurance = index;
    }
  });
  if (count > Math.floor(A.length / 2)) {
    return {'value': candidate, 'occurance': count};
  }
  return -1;
}