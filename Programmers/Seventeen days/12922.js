// 수박수박수박?

// link https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  let result = "수박";

  return n % 2 === 0 ? result.repeat(n / 2) : result.repeat(n / 2) + "수";
}

solution(3);

// output "수박수"
