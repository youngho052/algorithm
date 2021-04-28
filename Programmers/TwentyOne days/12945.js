// 피보나치의 수

// link https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let answer = 0;
  let result = [0, 1];

  if (n <= 1) {
    answer = result[n];
  }
  for (let i = 2; i < n + 1; i++) {
    result[i] = (result[i - 2] + result[i - 1]) % 1234567;
  }

  answer = result[n];
  return answer;
}

solution(5);

// output : 5
