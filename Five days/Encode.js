// 1313. Decompress Run-Length Encoded List

// link https://leetcode.com/problems/decompress-run-length-encoded-list/

var decompressRLElist = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      arr.push(nums[i + 1]);
    }
  }
  return arr;
};

decompressRLElist([1, 2, 3, 4]);

// output : [2,4,4,4]
