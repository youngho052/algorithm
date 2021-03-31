// 1678. Goal Parser Interpretation

// link https://leetcode.com/problems/goal-parser-interpretation/

var interpret = function (command) {
  let abc = command.replace(/\(\)/g, "o");
  return abc.replace(/\(al\)/g, "al");
};

interpret("G()(al)");

// output : Goal
