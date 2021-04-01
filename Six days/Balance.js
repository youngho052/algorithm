// 1221. Split a String in Balanced Strings

// link https://leetcode.com/problems/split-a-string-in-balanced-strings/

var balancedStringSplit = function (s) {
  let length = s.length;
  let rcnt = 0;
  let ccnt = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "R" ? (rcnt += 1) : (ccnt += 1);
    if (rcnt === ccnt) {
      count += 1;
    }
  }
  return count;
};

balancedStringSplit("RLRRLLRLRL");

// output : 4
