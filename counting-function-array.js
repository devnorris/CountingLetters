function countLetters(str) {
  var letterObj = {};
  var string = str.split(" ").join("");

  for (var i = 0 ; i < string.length ; i++) {
    if(!letterObj[string[i]]) {
      letterObj[string[i]] = [i];
    } else {
      letterObj[string[i]].push(i);
    }
  }
  return letterObj;
}

console.log(countLetters("Lighthouse in the house"));