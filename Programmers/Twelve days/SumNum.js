// 두 정수 사이의 합

// link https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  let answer = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      if (a === b) {
        answer = a;
        break;
      }
      answer += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      if (a === b) {
        answer = b;
        break;
      }
      answer += i;
    }
  }
  return answer;
}

solution(3, 5);

// output : 12
