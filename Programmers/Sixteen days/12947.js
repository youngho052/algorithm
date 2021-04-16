// 하샤드 수

// link https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let arr = x.toString().split("");
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i] * 1;
  }
  return x % num === 0 ? true : false;
}

solution(10);

// output : true
