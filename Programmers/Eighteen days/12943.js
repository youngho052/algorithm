// 콜라츠 추측

// link https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let count = 0;
  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
  }
  return count > 500 ? -1 : count;
}

solution(6);

// output : 8;
