// 1662. Check If Two String Arrays are Equivalent

// link https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};

arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);

// output : true
