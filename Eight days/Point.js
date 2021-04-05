// 1266. Minimum Time Visiting All Points

// link https://leetcode.com/problems/minimum-time-visiting-all-points/

var minTimeToVisitAllPoints = function (points) {
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const hor = Math.abs(points[i + 1][0] - points[i][0]);
    const ver = Math.abs(points[i + 1][1] - points[i][1]);

    result += Math.max(hor, ver);
  }
  return result;
};

minTimeToVisitAllPoints([
  [1, 1],
  [3, 4],
  [-1, 0],
]);

// output : 7
