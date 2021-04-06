// 1295. Find Numbers with Even Number of Digits

// link https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
};

findNumbers([12, 345, 2, 6, 7896]);

// output : 2
