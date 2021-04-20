//

// link https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let Pcount = 0;
  let Ycount = 0;
  s.toUpperCase()
    .split("")
    .map((item, index) => {
      if (item === "P") {
        Pcount++;
      }
      if (item === "Y") {
        Ycount++;
      }
    });

  return Pcount === Ycount ? true : false;
}

solution("pPoooyY");

// output : true
