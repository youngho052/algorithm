// 두개 뽑아서 더하기

// link https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!arr.includes(numbers[i] + numbers[j])) {
        arr.push(numbers[i] + numbers[j]);
      }
    }
  }
  return arr.sort((a, b) => a - b);
}

solution([2, 1, 3, 4, 1]);

// output : [2,3,4,5,6,7]
