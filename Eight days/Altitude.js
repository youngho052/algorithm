// 1732. Find the Highest Altitude

// link https://leetcode.com/problems/find-the-highest-altitude/

var largestAltitude = function (gain) {
  let arr = [0];

  for (let i = 0; i < gain.length; i++) {
    arr.push(gain[i] + arr[i]);
  }

  return Math.max(...arr);
};

largestAltitude([-5, 1, 5, 0, -7]);

// output : 1
