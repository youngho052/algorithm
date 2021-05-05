function solution(n, m) {
  var answer = 0;
  let result;
  let reverse;

  for (let i = n; i <= m; i++) {
    result = i + "";
    reverse = result.split("").reverse().join("");

    if (result === reverse) {
      answer++;
    }
  }
  return answer;
}

solution(100, 300);

// output : 20;
