// x만큼 간격이 있는 n개의 숫자

// link https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  var answer = [x];
  let num = x;
  for (let i = 0; i < n - 1; i++) {
    answer.push((num += x));
  }
  return answer;
}

solution(2, 5);

// output : [2,4,6,8,10]
