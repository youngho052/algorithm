// 이상한 문자 만들기

// link https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let arr = [];
  let result = s.split(" ");

  for (let i = 0; i < result.length; i++) {
    arr.push(
      result[i]
        .split("")
        .map((item, index) => {
          return index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
        })
        .join("")
    );
  }
  return arr.join(" ");
}

solution("try hello world");

// output : "TrY HeLlO WoRlD"
