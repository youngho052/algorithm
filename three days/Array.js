// Shuffle the Array

// link https://leetcode.com/problems/shuffle-the-array/

var shuffle = function (nums, n) {
  let result = [];
  let x = nums.slice(0, n);
  let y = nums.slice(n);

  for (let i = 0; i < n; i++) {
    result.push(x[i], y[i]);
  }
  return result;
};

shuffle([2, 5, 1, 3, 4, 7], 3);

// output: [2,3,5,4,1,7]
