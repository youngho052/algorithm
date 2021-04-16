// 음양 더하기

// link https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      absolutes[i] = absolutes[i] * -1;
    }
    result += absolutes[i];
  }
  return result;
}

solution([4, 7, 12], [true, false, true]);

// output : 9
