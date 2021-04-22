// 자릿수 더하기

// link https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let arr = n.toString().split("");
  let numSum = [];

  for (let i = 0; i < arr.length; i++) {
    numSum.push(arr[i] * 1);
  }
  return numSum.reduce((arr, cr) => arr + cr);
}

solution(123);

// output : 6
