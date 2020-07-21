/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

function capVowels(string) {
  let vowels = "aeiouAEIOU".split("");
  let newWords = "";

  for (let i = 0; i < string.length; i += 1) {
    let chars = string[i];

    if (vowels.indexOf(chars) > -1) {
      newWords += chars.toUpperCase();
    } else {
      newWords += chars.toLowerCase();
    }
  }
  return newWords;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
