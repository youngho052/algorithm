// 1768. Merge Strings Alternately

// link : https://leetcode.com/problems/merge-strings-alternately/

var mergeAlternately = function (word1, word2) {
  let result = [];
  let maxlength = word1.length;
  if (word1.length < word2.length) {
    maxlength = word2.length;
  }
  for (let i = 0; i < maxlength; i++) {
    result.push(word1[i], word2[i]);
  }
  return result.join("");
};

mergeAlternately("abc", "pqr");

//output : "apbqcr"
