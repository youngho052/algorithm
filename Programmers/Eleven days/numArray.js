// 나누어 떨어지는 숫자 배열

// link https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  let array = [];
  arr.map((num) => {
    if (num % divisor === 0) {
      return array.push(num);
    }
  });
  array.length > 0 ? array : array.push(-1);
  return array.sort((a, b) => a - b);
}

solution([5, 9, 7, 10], 5);

// output : [5, 10]
