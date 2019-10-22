/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/

function valueReplace(array, obj) {
  // your code here...
  let replaced = [];

  for (let i = 0; i < array.length; i += 1) {
    let ele = array[i];

    if (obj[ele] === undefined) {
      replaced.push(ele);
    } else {
      replaced.push(obj[ele]);
    }
  }
  return replaced;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueReplace;
