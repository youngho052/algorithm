// 행렬의 덧셈

// link https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  var answer = [];

  for (var i = 0; i < arr1.length; i++) {
    answer.push([]);
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

solution([
  [1, 2],
  [3, 4],
  [
    [3, 4],
    [5, 6],
  ],
]);

// output : [[3,6],[8,10]]
