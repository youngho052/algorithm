// 최솟값 구하기

// link https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  let count = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    count += A[i] * B[i];
  }
  return count;
}

solution([1, 4, 2], [5, 4, 4]);

// output : 29
