// 같은 숫자는 싫어

// link https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      array.push(arr[i]);
    }
  }
  return array;
}

solution([1, 1, 3, 3, 0, 1, 1]);

// output : [1,3,0,1]
