// 1450. Number of Students Doing Homework at a Given Time

// link : https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/

var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime <= endTime[i] && startTime[i] < queryTime) {
      count++;
    }
  }
  return count;
};

busyStudent([16], [60], 58);

// output : 1
