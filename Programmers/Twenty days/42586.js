// 기능 개발

// link https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  let arr = [];
  let result = [0];

  for (let i = 0; i < progresses.length; i++) {
    arr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let max = arr[0];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (max >= arr[i]) {
      result[j] += 1;
    } else {
      max = arr[i];
      result[++j] = 1;
    }
  }
  return result;
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);

// output : [1, 3, 2]
