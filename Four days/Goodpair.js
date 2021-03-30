// 1512. Number of Good Pairs

// link https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function (nums) {
  let numArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i !== j && i < j) {
        if (nums[i] === nums[j]) {
          numArr.push([i, j]);
        }
      }
    }
  }
  return numArr.length;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]);

// output : 4
