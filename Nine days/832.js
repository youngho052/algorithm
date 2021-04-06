// 832. Flipping an Image

// link https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function (image) {
  return image.map((a) => a.reverse().map((b) => (b === 1 ? 0 : 1)));
};

flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]);

// output : [[1,0,0],[0,1,0],[1,1,1]]
