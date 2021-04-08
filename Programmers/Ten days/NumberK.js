// k번째수

// link https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let arr = [];
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    arr.push(array.slice(commands[i][0] - 1, commands[i][1]));
    arr[i].sort((a, b) => a - b);
    result.push(arr[i][commands[i][2] - 1]);
  }

  return result;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);

// output : [5, 6, 3]
