// 제일 작은 수 제거하기

// link https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  let array = [];
  if (arr.length === 1) {
    array.push(-1);
    return array;
  }
  min = Math.min(...arr);
  arr.filter((item) => {
    if (item !== min) {
      array.push(item);
    }
  });
  return array;
}

solution([4, 3, 2, 1]);

// output : [4,3,2]
