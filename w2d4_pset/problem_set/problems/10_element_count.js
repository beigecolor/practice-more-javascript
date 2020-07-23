/***********************************************************************
Write a function elementCount(array) that returns a object. Each key
corresponds to an element in the array and the value corresponds to how
many times that element appears in the array.

Example:
elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
***********************************************************************/

function elementCount(array) {
  let objCount = {};

  for (let i = 0; i < array.length; i += 1) {
    let key = array[i];

    if (objCount[key] === undefined) {
      objCount[key] = 1;
    } else {
      objCount[key] += 1;
    }
  }
  return objCount;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = elementCount;
