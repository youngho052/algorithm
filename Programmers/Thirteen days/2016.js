// 2016년

// link https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  const arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const setDate = new Date(`2016-${a}-${b}`);

  return arr[setDate.getDay()];
}

solution(5, 24);

// output : "TUE"
