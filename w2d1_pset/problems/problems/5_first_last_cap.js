/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
  let words = sentence.split(" ");
  let newWords = [];

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];
    let firstChar = word[0].toUpperCase();
    let lastChar = word[word.length - 1].toUpperCase();
    let middle = word.slice(1, -1).toLowerCase();
    let newSent = firstChar + middle + lastChar;
    newWords.push(newSent);
  }
  return newWords.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
