// 신규 아이디 추천

// link https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.{2,}/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); // 7
}

solution("...!@BaT#*..y.abcdefghijklm");

// output : "bat.y.abcdefghi"
