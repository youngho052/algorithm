// Detect Capital

// link https://leetcode.com/problems/detect-capital/

var detectCapitalUse = function (word) {
  let result = "";
  let words = word.split("");

  if (word === word.toUpperCase() || word === word.toLowerCase()) {
    return true;
  }

  if (word[0] === word.toUpperCase()[0]) {
    for (let i = 0; i < words.length; i++) {
      if (words[i] === words[i].toUpperCase()) {
        result = result + words[i];
      }
    }
    return result.length > 1 ? false : true;
  }
  return false;
};

detectCapitalUse("USA");

// output : true
