// 1688. Count of Matches in Tournament

// link https://leetcode.com/problems/count-of-matches-in-tournament/

var numberOfMatches = function (n) {
  var sum = 0;
  var teams = n;
  while (teams != 1) {
    if (teams % 2 == 0) {
      sum += teams / 2;
      teams = teams / 2;
    } else {
      sum += (teams - 1) / 2;
      teams = (teams + 1) / 2;
    }
  }
  return sum;
};

numberOfMatches(15);

// output : 14
