// 완주하지 못한 선수

// link https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  const result = participant.filter((name, idx) => name !== completion[idx]);

  return result[0];
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

// output : "mislav"
