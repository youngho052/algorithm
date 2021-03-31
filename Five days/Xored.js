// 1720. Decode XORed Array

// list https://leetcode.com/problems/decode-xored-array/

var decode = function (encoded, first) {
  let arr = [];
  let count = first;
  arr.push(first);
  for (let i = 0; i < encoded.length; i++) {
    count = encoded[i] ^ count;
    arr.push(count);
  }
  return arr;
};

decode([1, 2, 3], 1);

// output : [1,0,2,1]
