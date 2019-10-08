/******************************************************************************
Write a function firstOrLast(array) that takes in an array and returns either:

- the first element if there is an even number of elements in the array

- the last element if there is an odd number of elemetns in the array

You can assume the array contains at least one element.

Examples:

firstOrLast(['a', 'b', 'c', 'd']) => 'a'
firstOrLast(['Jenny', 'Mary', 'Mark']) => 'Mark'
*******************************************************************************/

function firstOrLast(array) {
  let ele = "";

  if (array.length % 2 === 0) {
    ele += array[0];
  } else {
    ele += array[array.length - 1];
  }
  return ele;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = firstOrLast;
