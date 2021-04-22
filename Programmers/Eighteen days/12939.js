// 최솟값 최댓값

// link https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  let arr = s.split(" ").map((item) => item * 1);
  let array = [];

  array.push(Math.min(...arr));
  array.push(Math.max(...arr));

  return array.map((item) => item + "").join(" ");
}

solution("1 2 3 4");

// output : "1 4"
