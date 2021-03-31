// 1773. Count Items Matching a Rule

// link https://leetcode.com/problems/count-items-matching-a-rule/

var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  let type = {
    type: 0,
    color: 1,
    name: 2,
  };

  for (let i = 0; i < items.length; i++) {
    if (items[i][type[ruleKey]] === ruleValue) {
      count++;
    }
  }
  return count;
};

countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  "color",
  "silver"
);

// output : 1
