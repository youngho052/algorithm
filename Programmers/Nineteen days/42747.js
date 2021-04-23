// H-index

// link https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  let count = 0;
  citations = citations.sort((a, b) => b - a);

  for (let i = 1; i <= citations.length; i++) {
    if (citations[i - 1] >= i) {
      count++;
    }
  }
  return count;
}

solution([3, 0, 6, 1, 5]);

// output : 3
