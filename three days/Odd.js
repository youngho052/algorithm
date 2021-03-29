// Three Consecutive Odds

// link https://leetcode.com/problems/three-consecutive-odds/

var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
      return true;
    }
  }
  return false;
};

threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]);

// output : true
