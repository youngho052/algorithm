// 핸드폰 번호 가리기

// link https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const abc = phone_number.slice(0, phone_number.length - 4);
  const bcd = phone_number.slice(phone_number.length - 4, phone_number.length);

  return abc.replace(/[0-9]/g, "*") + bcd;
}

solution("01033334444");

// output : "*******4444"
