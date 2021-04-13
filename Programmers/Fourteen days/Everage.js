// 평균 구하기

// link https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  let num = 0;
  arr.map((item) => (num += item));
  return num / arr.length;
}

solution([1, 2, 3, 4]);

// output : 2.5
