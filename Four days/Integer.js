// 1281. Subtract the Product and Sum of Digits of an Integer

// link https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function (n) {
  let arr = n.toString().split("");

  let multiply = arr.reduce((prev, curr) => {
    return Number(prev * curr);
  });

  let sum = arr.reduce((prev, curr) => {
    return Number(prev) + Number(curr);
  });

  return multiply - sum;
};

subtractProductAndSum(234);

// output : 15
