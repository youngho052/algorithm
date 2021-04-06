// 1816. Truncate Sentence

// link https://leetcode.com/problems/truncate-sentence/

var truncateSentence = function (s, k) {
  let arr = s.split(" ");
  return arr.slice(0, k).join(" ");
};

truncateSentence("Hello how are you Contestant", 4);

// output : Hello how are you
