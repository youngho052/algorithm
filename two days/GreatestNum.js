// Kids With the Greatest Number of Candies

// link https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
  let array = [];
  let maxNum = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    if (extraCandies + candies[i] >= maxNum) {
      array.push(true);
    } else {
      array.push(false);
    }
  }
  return array;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);

//Output: [true,true,true,false,true]
