// Running Sum of 1d Array

// link https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function (nums) {
  let numArray = [];
  let numsSum = 0;

  for (let i = 0; i < nums.length; i++) {
    numsSum = numsSum + nums[i];
    numArray.push(numsSum);
  }
  return numArray;
};

runningSum([1, 2, 3, 4]);
//Output: [1,3,6,10]
