/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

function avgValue(array) {
  var total = 0;

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];
    total += num;
  }

  var avg = total / array.length;
  return avg;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = avgValue;
