/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  var words = string.split('-');
  var reversed = [];

  for (var i = words.length - 1; i >= 0; i--) {
    var word = words[i];
    reversed.push(word);
  }

  var reversedStr = reversed.join('-');
  return reversedStr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;
