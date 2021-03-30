// 1365. How Many Numbers Are Smaller Than the Current Number

// link https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function (nums) {
  let array = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    array.push(count);
  }
  return array;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);

// output : [4,0,1,1,3]
