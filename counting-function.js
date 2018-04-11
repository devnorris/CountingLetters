function countLetters(str) {
  var letterCount = {};
  var string = str.split(" ").join("");

  for (var i = 0 ; i < string.length ; i++) {
    letterCount[string[i]] = 0;
  }

   for (var j = 0 ; j < string.length ; j++) {
    letterCount[string[j]] += 1;

  }
  return letterCount;
}

console.log(countLetters("Lighthouse in the house"));