// 예산

// link https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  let sum = 0;
  let result = 0;
  let arr = d.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum <= budget) {
      result++;
    }
  }
  return result;
}

solution([2, 2, 3, 3], 10);

// output : 4
