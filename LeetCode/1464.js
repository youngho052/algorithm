// 1464. Maximum Product of Two Elements in an Array

// link : https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

var maxProduct = function (nums) {
  nums = nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};

maxProduct([3, 4, 5, 2]);

// output : 12
