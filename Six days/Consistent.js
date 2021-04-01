// 1684. Count the Number of Consistent Strings

// link https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function (allowed, words) {
  let allowedArr = allowed.split("");
  return words.filter((word) => {
    return word.split("").filter((w) => !allowedArr.includes(w)).length === 0;
  }).length;
};

countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]);

// output : 7
