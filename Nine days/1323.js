// 1323. Maximum 69 Number

// link https://leetcode.com/problems/maximum-69-number/

var maximum69Number = function (num) {
  const arr = num.toString().split("");
  const result = [num];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] === "9" ? "6" : "9";
    if (num > Number(arr.join(""))) {
      result.push(Number(arr.join("")));
      arr[i] = arr[i] === "6" ? "9" : "6";
    } else {
      result.push(Number(arr.join("")));
      arr[i] = arr[i] === "6" ? "9" : "6";
    }
  }
  return Math.max(...result);
};

maximum69Number(9669);

// output : 9969
