// 1389. Create Target Array in the Given Order

// link https://leetcode.com/problems/create-target-array-in-the-given-order/

var createTargetArray = function (nums, index) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    arr.splice(index[i], 0, nums[i]);
  }
  return arr;
};

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);

// output: [0,4,1,3,2]
