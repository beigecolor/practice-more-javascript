/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/
function removeVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newWord = "";

  for (let i = 0; i < word.length; i += 1) {
    let char = word[i];
    if (vowels.indexOf(char) === -1) {
      newWord += char;
    }
  }
  return newWord;
}
function abbreviate(sentence) {
  let words = sentence.split(" ");
  let newWords = [];

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];

    if (word.length >= 5) {
      newWords.push(removeVowels(word));
    } else {
      newWords.push(word);
    }
  }
  let newSent = newWords.join(" ");
  return newSent;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
