// 문자열 내 마음대로 정렬하기

// link https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  let arr = [];
  let array = [];

  for (let i = 0; i < strings.length; i++) {
    arr.push(strings[i][n] + strings[i]);
  }

  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i].slice(1));
  }
  return array;
}

solution(["sun", "bed", "car"], 1);

// output : ["car", "bed", "sun"]
