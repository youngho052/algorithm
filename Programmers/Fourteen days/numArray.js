// 자연수 뒤집어 배열로 만들기

// link https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  let array = [];
  let arr = String(n).split("");
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] * 1);
  }
  return array.reverse();
}

solution(12345);

// output : [5,4,3,2,1]
