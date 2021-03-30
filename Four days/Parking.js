// 1603. Design Parking System

// link https://leetcode.com/problems/design-parking-system/

var ParkingSystem = function (big, medium, small) {
  bigCar = big;
  mediumCar = medium;
  smallCar = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (carType === 1 && bigCar) {
    bigCar--;
    return true;
  }

  if (carType === 2 && mediumCar) {
    mediumCar--;
    return true;
  }

  if (carType === 3 && smallCar) {
    smallCar--;
    return true;
  }
  return false;
};

/*
Input :
["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
[[1, 1, 0], [1], [2], [3], [1]]
Output :
[null, true, true, false, false] */
