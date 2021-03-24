// Running Sum of 1d Array

var runningSum = function (nums) {
  let numArray = [];
  let numsSum = 0;

  for (let i = 0; i < nums.length; i++) {
    numsSum = numsSum + nums[i];
    numArray.push(numsSum);
  }
  return numArray;
};
