// 1748. Sum of Unique Elements

// link : https://leetcode.com/problems/sum-of-unique-elements/

var sumOfUnique = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    count === 1 && result.push(nums[i]);
  }
  return result.length === 0 ? 0 : result.reduce((acc, cur) => acc + cur);
};

sumOfUnique([1, 2, 3, 2]);

// output : 4
