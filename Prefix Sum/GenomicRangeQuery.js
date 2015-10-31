/**
 * Created by muhammadmuhaimin on 2015-10-28.
 */
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 4.0.0)
  var dict = {A: 1, C: 2, G: 3, T: 4};
  var stringArray = S.split("");
  var sequence = {A: stringArray.length, C: stringArray.length, G: stringArray.length, T: stringArray.length};
  var nextOccuranceList = {};
  var resultList = [];
  for (var i = stringArray.length - 1; i >= 0; i--) {
    var charAtIndex = stringArray[i];
    sequence[charAtIndex] = i;
    nextOccuranceList[i] = JSON.parse(JSON.stringify(sequence));
    ;
  }
  P.forEach(function (element, index) {
    var occuranceList = nextOccuranceList[element];
    for (var key in occuranceList) {
      if (occuranceList.hasOwnProperty(key)) {
        var value = occuranceList[key];
        if (value <= Q[index]) {
          resultList.push(dict[key]);
          break;
        }
      }
    }
  });
  return resultList;
}
