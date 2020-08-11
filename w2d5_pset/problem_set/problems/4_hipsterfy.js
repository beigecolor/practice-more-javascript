/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/
function hipsterflyWord(word) {
  let vowel = ["a", "e", "i", "o", "u"];

  for (let i = word.length - 1; i >= 0; i -= 1) {
    if (vowel.indexOf(word[i]) !== -1) {
      let hipsterWord = word.slice(0, i) + word.slice(i + 1);
      return hipsterWord;
    }
  }
  return word;
}

function hipsterfy(sentence) {
  let hipsterfiedWords = [];
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];
    hipsterfiedWords.push(hipsterflyWord(word));
  }
  let hipsterfiedSentence = hipsterfiedWords.join(" ");
  return hipsterfiedSentence;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hipsterfy;
