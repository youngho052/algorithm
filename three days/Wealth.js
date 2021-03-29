// Richest Customer Wealth

// link https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function (accounts) {
  const result = [];

  for (let i = 0; i < accounts.length; i++) {
    result.push(accounts[i].reduce((a, b) => a + b));
  }

  return Math.max(...result);
};

maximumWealth([
  [1, 2, 4],
  [3, 2, 1],
]);

// output: 7
